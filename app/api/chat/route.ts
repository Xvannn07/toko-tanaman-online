import { NextRequest, NextResponse } from 'next/server';

// Rate limiter: 10 requests per second per IP
const rateLimitMap = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
  return ip;
}

function checkRateLimit(ip: string, maxRequests: number = 10, windowMs: number = 1000): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Get or create request timestamps array for this IP
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  
  const timestamps = rateLimitMap.get(ip)!;
  
  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter(ts => ts > windowStart);
  
  // Check if limit exceeded
  if (recentTimestamps.length >= maxRequests) {
    return false; // Rate limit exceeded
  }
  
  // Add current timestamp
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  
  // Cleanup old entries occasionally
  if (rateLimitMap.size > 10000) {
    const ips = Array.from(rateLimitMap.keys());
    for (const oldIp of ips.slice(0, 1000)) {
      const oldTimestamps = rateLimitMap.get(oldIp) || [];
      if (oldTimestamps.filter(ts => ts > windowStart).length === 0) {
        rateLimitMap.delete(oldIp);
      }
    }
  }
  
  return true;
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  
  // Check rate limit: 10 requests per second
  if (!checkRateLimit(clientIp, 10, 1000)) {
    return NextResponse.json(
      { 
        error: 'Terlalu banyak permintaan. Silakan coba lagi dalam beberapa detik.',
        code: 'RATE_LIMIT_EXCEEDED'
      },
      { 
        status: 429,
        headers: {
          'Retry-After': '1',
        }
      }
    );
  }

  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Format request tidak valid' },
        { status: 400 }
      );
    }

    // Get API key from server-side environment variables
    const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;

    if (!apiKey) {
      console.error('GROQ_API_KEY tidak ditemukan di environment variables');
      return NextResponse.json(
        { error: 'Konfigurasi server tidak lengkap. Hubungi administrator.' },
        { status: 500 }
      );
    }

    // Forward request to Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(messages),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API error:', errorData);
      
      return NextResponse.json(
        { 
          error: errorData.error?.message || 'Gagal menghubungi AI service',
          code: 'AI_SERVICE_ERROR'
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);

    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Terjadi kesalahan server',
        code: 'INTERNAL_SERVER_ERROR'
      },
      { status: 500 }
    );
  }
}

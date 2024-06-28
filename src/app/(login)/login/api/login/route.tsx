// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    // Spring 서버로 로그인 요청
    const response = await fetch('http://your-spring-server/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Login request failed' },
      { status: 500 },
    );
  }
}

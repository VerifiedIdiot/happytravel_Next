import { NextRequest, NextResponse } from 'next/server';
import { SearchParams } from '@/types/Tour';
const SPRING_URL: string = process.env.NEXT_PUBLIC_SPRINGBOOT_URL!;

export const GET = async (req: NextRequest) => {
  if (!SPRING_URL) {
    return NextResponse.json({ error: 'SPRINGBOOT_URL is not defined' }, { status: 500 });
  }

  const params: { [key: string]: string | number | null | undefined  } = {
    country: req.nextUrl.searchParams.get('country') || undefined,
    minPrice: req.nextUrl.searchParams.get('minPrice')|| undefined,
    maxPrice: req.nextUrl.searchParams.get('maxPrice')|| undefined,
    startDate: req.nextUrl.searchParams.get('startDate')|| undefined,
    endDate: req.nextUrl.searchParams.get('endDate')|| undefined,
    limit: req.nextUrl.searchParams.get('limit') || 6,
    offset: req.nextUrl.searchParams.get('offset') || 0,
  };

  const url = new URL(`${SPRING_URL}/package/package-list`);
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (value !== null && value !== undefined) {
      url.searchParams.append(key, String(value)); 
    }
  });

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Spring Boot server' }, { status: 500 });
  }
};

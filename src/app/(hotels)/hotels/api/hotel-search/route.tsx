import { NextRequest, NextResponse } from 'next/server'
import { Hotel } from '@/types/Hotel'
import { AxiosResponse } from 'axios'
import apiClient from '@/lib/AxiosConfig'

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!
const SPRING_URL: string = process.env.NEXT_PUBLIC_SPRINGBOOT_URL!


export const GET = async (req: NextRequest) => {
  if (!SPRING_URL) {
    return NextResponse.json({ error: 'SPRINGBOOT_URL is not defined' }, { status: 500 });
  }
  try {
    console.log(req)
    const response = await fetch(`${SPRING_URL}/hotel/search`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
      // next: { revalidate : 10},
    })

    const data = await response.json()

    const nextResponse = NextResponse.json(data)
    nextResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')

    return nextResponse
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Spring Boot server' }, { status: 500 })
  }
}
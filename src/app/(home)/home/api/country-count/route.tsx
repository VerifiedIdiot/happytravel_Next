import { NextRequest, NextResponse } from 'next/server'
import { CountryCount } from '@/types/Home'
import { AxiosResponse } from 'axios'
import apiClient from '@/lib/AxiosConfig'

const BASE_URL: string = process.env.BASE_URL!
const SPRING_URL: string = process.env.SPRINGBOOT_URL!

export const GET = async (req: NextRequest) => {
  try {
    const response = await fetch(`${SPRING_URL}/package/country-count`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    })

    const data = await response.json()

    const nextResponse = NextResponse.json(data)
    nextResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')

    return nextResponse
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Spring Boot server' }, { status: 500 })
  }
}

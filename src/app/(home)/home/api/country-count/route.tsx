import { NextRequest, NextResponse } from 'next/server'
import { CountryCount } from '@/types/Home'
import { AxiosResponse } from 'axios'
import apiClient from '@/lib/AxiosConfig'

const BASE_URL: string = process.env.BASE_URL!;
const SPRING_URL: string = process.env.SPRINGBOOT_URL!;

export const GET = async (req: NextRequest) => {
  try {
    const response: AxiosResponse<CountryCount[]> = await apiClient.get<CountryCount[]>(
      `${SPRING_URL}/package/country-count`,
    )

    const data = response.data

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Spring Boot server' }, { status: 500 })
  }
}

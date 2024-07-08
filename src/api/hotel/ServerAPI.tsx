import { AxiosRequestConfig } from 'axios'
import apiClient from '@/lib/AxiosConfig'
import { Hotel } from '@/types/Hotel'
import { Country } from '@/types/Country'

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!

export const fetchHotelList = async (): Promise<Hotel[]> => {
  try {
    const response = await apiClient.get<Hotel[]>(`${BASE_URL}/hotels/api/hotel-list`)
    return response.data
  } catch (error) {
    console.error('Error fetching hotel list:', error)
    throw error
  }
}

export const fetchCountryList = async (): Promise<Country[]> => {
  try {
    const response = await apiClient.get<Country[]>(`${BASE_URL}/hotels/api/country-list`)
    return response.data
  } catch (error) {
    console.error('Error fetching country list:', error)
    throw error
  }
}

export const hotelSearch = async (searchParams: any): Promise<Hotel[]> => {
  try {
    
    const config: AxiosRequestConfig = {
      params: {
        country: searchParams.country,
        minPrice: searchParams.minPrice,
        maxPrice: searchParams.maxPrice,
        startDate: searchParams.startDate,
        endDate: searchParams.endDate,
      },
    };
    
    // console.log('Search parameters:', searchParams); // 검색 조건 확인
    const response = await apiClient.get<Hotel[]>('/hotels/api/hotel-search', config.params);
    console.log('API response:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error('Error fetching hotel list:', error);
    throw error;
  }
};
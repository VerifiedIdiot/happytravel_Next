import apiClient from '@/lib/AxiosConfig'
import { HotelList } from '@/types/Hotel'

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!

export const fetchHotelList = async (): Promise<HotelList[]> => {
  try {
    const response = await apiClient.get<HotelList[]>(`${BASE_URL}/hotels/api/hotel-list`)
    return response.data
  } catch (error) {
    console.error('Error fetching hotel list:', error)
    throw error
  }
}

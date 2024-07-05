import apiClient from "@/lib/AxiosConfig";
import { HotelList } from "@/types/Hotel";

const SPRING_URL: string = process.env.SPRINGBOOT_URL!;

export const fetchHotelList = async (): Promise<HotelList[]> => {
  console.log('실행됨');
  try {
    const response = await apiClient.get<HotelList[]>(`${SPRING_URL}/hotel/hotel-list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotel list:', error);
    throw error;
  }
};

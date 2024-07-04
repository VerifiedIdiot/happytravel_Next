import apiClient from "@/lib/AxiosConfig";
import { CountryCount } from "@/types/Home";

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!;


export const fetchCountryCount = async (): Promise<CountryCount[]> => {
  console.log('실행됨')
  const response = await apiClient.get<CountryCount[]>(`${BASE_URL}/home/api/country-count`)
  return response.data
}
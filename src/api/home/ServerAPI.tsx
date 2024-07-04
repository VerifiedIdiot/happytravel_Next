import apiClient from "@/lib/AxiosConfig";
import { CountryCount } from "@/types/Home";

const BASE_URL: string = process.env.BASE_URL!;


export const fetchCountryCount = async (): Promise<CountryCount[]> => {
  const response = await apiClient.get<CountryCount[]>(`${BASE_URL}/home/api/country-count`)
  return response.data
}
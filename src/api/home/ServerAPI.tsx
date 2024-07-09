import apiClient from "@/lib/AxiosConfig";
import { CountryCount , TopPackage} from "@/types/Home";

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!;


export const fetchCountryCount = async () => {
  
  const response = await apiClient.get<CountryCount[]>(`${BASE_URL}/home/api/country-count`)
  return response.data
}


export const fetchTopPackages = async (): Promise<TopPackage[]> => {
  
  const response = await apiClient.get<TopPackage[]>(`${BASE_URL}/home/api/top-packages`)
  return response.data
}
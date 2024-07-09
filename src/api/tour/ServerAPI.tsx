import apiClient from "@/lib/AxiosConfig";
import { AxiosRequestConfig } from "axios";
import { TourPackage, SearchParams } from "@/types/Tour";

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!;

export const fetchTourPackages = async (searchParams: SearchParams): Promise<TourPackage[]> => {
  const config: AxiosRequestConfig = {
    params: {
      country: searchParams.country || null,
      minPrice: searchParams.minPrice || null,
      maxPrice: searchParams.maxPrice || null,
      startDate: searchParams.startDate || null,
      endDate: searchParams.endDate || null,
      limit: searchParams.limit || 6,
      offset: searchParams.offset || 0,
    },
  };

  const response = await apiClient.get<TourPackage[]>(`${BASE_URL}/tour/api/package-list`, config);
  return response.data;
}

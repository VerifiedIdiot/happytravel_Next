export interface SearchParams {
    country?: string;
    minPrice?: string;
    maxPrice?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
  }
  

export interface TourPackage {
    packageCode: string
    packageName: string
    countryName: string
    region: string
    countryImage: string
    packageInfo: string
    days: number
    salePrice: number
    rating: number
}

export interface TourPackagePagination {
    packageCnt: number;
    currentPage: number;
    itemsPerPage: number;
    totalPage: number;
  }




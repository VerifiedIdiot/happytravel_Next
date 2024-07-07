export interface CountryCount {
    countryCode: string
    koreanName: string
    countryImage: string
    packageCount: number
}

export interface TopPackage {
    packageCode: string
    packageName: string
    countryName: string
    region: string
    countryImage: string
    packageInfo: string
    days: number
    saleAmount: number
    salePrice: number
    rating: number
}

export interface LoginInfo {
  loginState: {
    empId: string
    empName: string
    deptCode: string
    posCode: string
  }
}

export enum CRUDStateEnum {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export interface HotelList {
  id: number
  hotelName: string
  isUsed: string
  price: number
  imageUrl: string
}

export interface HotelListResponse {
  hotels: HotelList[]
  hotelCnt: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}


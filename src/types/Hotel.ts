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

export interface Hotel {
  id: number
  hotelName: string
  imageUrl: string
  star: number
  price: number
  detail: string
  countryName: string
  country: string
  region: string
}

export interface HotelCntList {
  hotelList: Hotel[]
  hotelCnt: number
  currentPage: number
  itemsPerPage: number
  totalPage: number
}

export type HotelAction =
  | { type: 'SET_HOTEL_LIST'; payload: Hotel[] }
  | { type: 'SET_HOTEL_CNT'; payload: number }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_ITEM_PER_PAGE'; payload: number }
  | { type: 'SET_TOTAL_PAGE'; payload: number }

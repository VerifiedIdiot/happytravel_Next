export interface LoginInfo {
  loginState : {
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

export interface PackageState {
  packageCode: string
  isModalOpen: boolean
  isEditing: boolean
  isCreating: boolean
  crudState: CRUDStateEnum
  packageDetail: {
    flightCountry: string
    hotelCountry: string
    agencyCountry: string
  }
  countries: string[]
  packageList: object[]
  packageCnt: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export interface PartnerDisable {
  flightDisable: boolean
  hotelDisable: boolean
  agencyDisable: boolean
}

export interface FlightState {
  flights: object[]
  flightCnt: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export interface HotelState {
  hotels: object[]
  hotelCnt: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export interface AgencyState {
  agencies: object[]
  agencyCnt: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export interface AssignState {
  waited: number
  assigned: number
  rejected: number
}



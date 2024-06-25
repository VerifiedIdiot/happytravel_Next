export interface LoginInfo {
  empId: string
  empName: string
  deptCode: string
  posCode: string
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
  packages: object[]
  packageCnt: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export const initialState: PackageState = {
  packageCode: '',
  isModalOpen: false,
  isEditing: false,
  isCreating: false,
  crudState: CRUDStateEnum.CREATE,
  packageDetail: {
    flightCountry: '',
    hotelCountry: '',
    agencyCountry: '',
  },
  countries: [],
  packages: [],
  packageCnt: 0,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 0,
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

export type PackageAction =
  | { type: 'SET_PACKAGES'; payload: object[] }
  | { type: 'SET_EDITING'; payload: boolean }
  | { type: 'SET_MODAL_OPEN'; payload: boolean }

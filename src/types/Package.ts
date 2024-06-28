export interface LoginInfo {
  loginState: {
    empId: string;
    empName: string;
    deptCode: string;
    posCode: string;
  };
}

export enum CRUDStateEnum {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export interface PackageList {
  packageList: object[];
  packageCnt: number;
  currentPage: number;
  itemsPerPage: number;
  totalPage: number;
}

// export interface PackageState {
//   packageCode: string
//   isModalOpen: boolean
//   isEditing: boolean
//   isCreating: boolean
//   crudState: CRUDStateEnum
//   packageDetail: {
//     flightCountry: string
//     hotelCountry: string
//     agencyCountry: string
//   }
//   countries: string[]
//   packageList: object[]
//   packageCnt: number
//   currentPage: number
//   itemsPerPage: number
//   totalPages: number
// }

export interface PartnerDisable {
  flightDisable: boolean;
  hotelDisable: boolean;
  agencyDisable: boolean;
}

export interface FlightList {
  flights: object[];
  flightCnt: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface HotelList {
  hotels: object[];
  hotelCnt: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface AgencyList {
  agencies: object[];
  agencyCnt: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface AssignState {
  waited: number;
  assigned: number;
  rejected: number;
}

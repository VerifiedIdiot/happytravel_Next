import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { PackageState, CRUDStateEnum } from '@/types/Package'

//////////////////////////////////// 상태와 액션 정의 ////////////////////////////////////  

const initialState: PackageState = {
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
  packageList: [],
  packageCnt: 0,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 0,
}

type PackageAction =
  | { type: 'SET_PACKAGE_LIST'; payload: object[] }
  | { type: 'SET_EDITING'; payload: boolean }
  | { type: 'SET_MODAL_OPEN'; payload: boolean }


//////////////////////////////////// 리듀서 정의, 인자로 상태와 액션 전달 ////////////////////////////////////
const packageReducer = (
  packageState: PackageState,
  action: PackageAction,
): PackageState => {
  switch (action.type) {
    case 'SET_PACKAGE_LIST':
      return { ...packageState, packageList: action.payload }
    default:
      return packageState
  }
}



///////////////////////////////////// Context 정의, 인자로 상태와 디스패치 제공 ////////////////////////////////////
const PackageContext = createContext<{
  packageState: PackageState
  dispatch: React.Dispatch<PackageAction>
} | undefined>(undefined)


// ///////////////////////////////////// 모든 자식 컴포넌트가 
// export const usePackageContext = () => {
//   const context = useContext(PackageContext)
//   if (context === undefined) {
//     throw new Error('usePackageContext must be used within a PackageProvider')
//   }
//   return context
// }


//////////////////////////////////// Context 프로바이더 정의 하위 자식컴포넌트들은 상태와 디스패치에 접근가능 ////////////////////////////////////
export const PackageProvider = ({ children }: { children: ReactNode }) => {
  const [packageState, dispatch] = useReducer(packageReducer, initialState)

  return (
    <PackageContext.Provider value={{ packageState, dispatch }}>
      {children}
    </PackageContext.Provider>
  )
}




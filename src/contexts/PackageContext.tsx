// import React, { createContext, useContext, useReducer, ReactNode } from 'react'
// import { packageState, PackageAction ,packageReducer } from '@/reducers/package/PackageReducer'
// import { PackageState } from '@/types/Package'

// ///////////////////////////////////// Context 정의, 인자로 상태와 디스패치 제공 ////////////////////////////////////
// const PackageContext = createContext<{
//   // state: PackageState
//   // dispatch: React.Dispatch<PackageAction>
// } | undefined>(undefined)

// ///////////////////////////////////// 모든 자식 컴포넌트가 상태와 디스패치를 사용하게끔 useContext 정의  /////////////////////////////////////
// export const usePackageContext = () => {
//   const context = useContext(PackageContext)
//   if (context === undefined) {
//     throw new Error('usePackageContext must be used within a PackageProvider')
//   }
//   return context
// }

// //////////////////////////////////// Context 프로바이더 정의 하위 자식컴포넌트들은 상태와 디스패치에 접근가능 ////////////////////////////////////
// export const PackageProvider = ({ children }: { children: ReactNode }) => {
//   // const [state, dispatch] = useReducer(packageReducer, packageState)

//   return (
//     // <PackageContext.Provider value={{ state, dispatch }}>
//     //   {children}
//     // </PackageContext.Provider>
//   )
// }

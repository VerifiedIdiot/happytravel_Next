import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { PackageState, PackageAction, initialState } from '@/types/Package'

const PackageContext = createContext<{
  state: PackageState
  dispatch: React.Dispatch<PackageAction>
} | undefined>(undefined)

const packageReducer = (
  state: PackageState,
  action: PackageAction,
): PackageState => {
  switch (action.type) {
    case 'SET_PACKAGES':
      return { ...state, packages: action.payload }
    default:
      return state
  }
}

export const PackageProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(packageReducer, initialState)

  return (
    <PackageContext.Provider value={{ state, dispatch }}>
      {children}
    </PackageContext.Provider>
  )
}

export const usePackageContext = () => {
  const context = useContext(PackageContext)
  if (context === undefined) {
    throw new Error('usePackageContext must be used within a PackageProvider')
  }
  return context
}

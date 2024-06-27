import { fetchPackageList } from '@/lib/package/ServerAPI'
import { useEmployeeStore } from '@/store/LoginStore'
import { Metadata } from 'next';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: "Package",
};


const PackagePage = () => {
  const { loginState } = useEmployeeStore()
  // const dataPromise = fetchPackageList(loginState.empId)
}

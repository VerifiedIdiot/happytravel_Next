import { PackageState } from '@/types/Package';

export const fetchPackageList = async (empId : string): Promise<PackageState['packageList']> => {
  const res = await fetch('', { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch package list')
  }
  return res.json()
}
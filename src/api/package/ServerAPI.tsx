import { PackageList } from '@/types/Package';

export const fetchPackageList = async (empId : string): Promise<PackageList> => {
  const res = await fetch('', { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch package list')
  }
  return res.json()
}

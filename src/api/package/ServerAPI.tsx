import { PackageList } from '@/types/Package';

export const fetchPackageList = async (empId : string): Promise<PackageList> => {
  const res = await fetch('', { cache: 'force-cache' })
  return res.json()
}

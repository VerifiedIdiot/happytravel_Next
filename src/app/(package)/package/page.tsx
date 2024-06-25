import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const fetchData = async (): Promise<Packages[]> => {
  const res = await fetch('', { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch package list')
  }
  return res.json()
}

const PackagePage = () => {
  const dataPromise = fetchData()
}

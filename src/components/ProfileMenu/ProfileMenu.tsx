"use client"
import dynamic from 'next/dynamic'
import { Skeleton } from '../ui/skeleton'
import AuthActions from './AuthActions'
// import ProfileBar from './AuthDropdown'

const ProfileBar = dynamic(() => import("./AuthDropdown"), { ssr: false, loading: ActionsSkeleton })

export default function ProfileMenu() {
  return (
    <>
    {false ? (
      <ProfileBar/>
    ) : (
      <div className="flex items-center space-x-6">
        <AuthActions />
      </div>
    )}
  </>
  )
}

function ActionsSkeleton() {
  return <Skeleton className="h-[35px] w-[250px]" />
}

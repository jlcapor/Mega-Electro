"use client"
import { User } from 'next-auth'
import { Skeleton } from '../ui/skeleton'
import AuthActions from './AuthActions'
import { AuthDropdown } from './AuthDropdown'

// const ProfileBar = dynamic(() => import("./AuthDropdown"), { ssr: false, loading: ActionsSkeleton })
interface ProfileMenuProps  {
  user: Pick<User, "name" | "image" | "email">
}
export default function ProfileMenu({ user }: ProfileMenuProps) {
  return (
    <>
    {user.name ? (
      <AuthDropdown user={user}/>
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

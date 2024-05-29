"use client"
import { Skeleton } from '../ui/skeleton'
import AuthActions from './AuthActions'
import { AuthDropdown } from './AuthDropdown'
import { Session } from 'next-auth'

// const ProfileBar = dynamic(() => import("./AuthDropdown"), { ssr: false, loading: ActionsSkeleton })
interface ProfileMenuProps  {
  // user: Pick<User, "name" | "image" | "email">
  session: Session | null
}
export default function ProfileMenu({ session }: ProfileMenuProps) {
  return (
    <>
    {session ? (
      <AuthDropdown session={session}/>
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

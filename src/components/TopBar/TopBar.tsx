import Link from "next/link"
import React from 'react'
import ProfileMenu from "../ProfileMenu/ProfileMenu"
import type { Session } from "next-auth"
interface TopBarProps  {
  // user: Pick<User, "name" | "image" | "email">
  session: Session | null
}
export default function TopBar({ session } : TopBarProps) {
  return (
    <header className="hidden bg-background py-4 md:block">
      <div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
        <Link prefetch={false} href="/" className="text-3xl font-bold">
            Acme
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ProfileMenu session={session}/>
          </nav>
        </div>
      </div>
    </header>
  )
}

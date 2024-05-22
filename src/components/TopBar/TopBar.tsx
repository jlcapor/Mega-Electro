import Link from "next/link"
import React from 'react'
import ProfileMenu from "../ProfileMenu/ProfileMenu"
import MainNav from "../layouts/MainNav"

export default function TopBar() {
  return (
    <header className="hidden bg-background py-4 md:block">
      <div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
        <Link prefetch={false} href="/" className="text-3xl font-bold">
            Acme
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ProfileMenu />
          </nav>
        </div>
      </div>
    </header>
  )
}

import { LaptopMinimal } from "lucide-react"
import Link from "next/link"
import { DashboardSidebarSheet } from "./dashboard-sidebar-sheet"
import { User } from "next-auth"
import { AuthDropdown } from "@/components/ProfileMenu/AuthDropdown"


interface DashboardHeaderProps {
  user: Pick<User, "name" | "image" | "email">
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between space-x-2 sm:space-x-0">
        <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <LaptopMinimal className='h-8 w-8 mr-1' aria-hidden="true"/>
          <span className="hidden text-xl font-bold lg:inline-block">
            E-commerce
          </span>
          <span className="sr-only">Home</span>
        </Link>
        <DashboardSidebarSheet/>
        <div className="flex items-center space-x-1.5">
          <nav className="flex items-center space-x-2">
             <AuthDropdown user={user}/>
          </nav>
        </div>
      </div>
    </header>
  )
}

"use client"

import { LaptopMinimal } from "lucide-react"
import Link from "next/link"
import { DashboardSidebarSheet } from "./dashboard-sidebar-sheet"
import { AuthDropdown } from "@/components/ProfileMenu/AuthDropdown"
import { dashboardConfig } from "@/config/dashboard"
import type { Session } from "next-auth"


interface DashboardHeaderProps {
  // user: Pick<User, "id" | "name" | "image" | "email">
  session: Session | null
}

export function DashboardHeader({ session }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <LaptopMinimal className='h-8 w-8 mr-1' aria-hidden="true"/>
          <span className="hidden text-xl font-bold lg:inline-block">
            JRC
          </span>
          <span className="sr-only">Home</span>
        </Link>
        <DashboardSidebarSheet items={dashboardConfig.sidebarNav}/>
        <span className="mx-2 text-lg font-bold text-muted-foreground">
          /
        </span>
        
          {/* <WorkspaceSwitcher /> */}
          {/* <Suspense>
            <ProjectSwitcher
              projectsPromise={api.project.listByActiveWorkspace.query()}
            />
          </Suspense> */}
          <div className="ml-auto flex items-center space-x-4">
            <AuthDropdown session={session}/>
          </div>
      </div>
    </header>
  )
}

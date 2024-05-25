"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/sidebar-nav"
import { dashboardConfig } from "@/config/dashboard"


export function DashboardSidebar() {
  return (
  <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <SidebarNav items={dashboardConfig.sidebarNav} className="p-1 pt-4" />
    </ScrollArea>
  </aside>
  )
}




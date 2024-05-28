"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { dashboardConfig } from "@/config/dashboard"
import { SidebarNav } from "@/components/sidebar-nav"


export function DashboardSidebar() {
  return (
    <aside className="hidden flex-col -ml-6 lg:flex">
      <ScrollArea className="h-[calc(100vh-8rem)] lg:py-8 px-3 py-2.5 lg:px-4">
        <SidebarNav items={dashboardConfig.sidebarNav} className="p-1 pt-4" />
      </ScrollArea>
    </aside>
  )
}
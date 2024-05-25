"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import React from "react"
import { LaptopMinimalIcon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/sidebar-nav"
import { dashboardConfig } from "@/config/dashboard"
import { useSidebar } from "@/hooks/use-sidebar"


export interface DashboardSidebarSheetProps extends React.ComponentPropsWithRef<typeof SheetTrigger>, ButtonProps {
  children?: React.ReactNode
}

export function DashboardSidebarSheet() {
  const { open, setOpen } = useSidebar()
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isDesktop) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9">
        <div className="w-full px-7">
                <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setOpen(false)}
                    >
                       <LaptopMinimalIcon className='h-8 w-8 mr-1' aria-hidden="true"/>
                        <span className="font-bold">E-commerce</span>
                        <span className="sr-only">Home</span>
                </Link>
        </div>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              <SidebarNav items={dashboardConfig.sidebarNav} className="p-1 pt-4" />
            </div>
          </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

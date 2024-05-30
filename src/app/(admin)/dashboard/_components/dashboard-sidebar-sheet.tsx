"use client"

import Link from "next/link"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { useSidebar } from "@/hooks/use-sidebar"
import { ChevronLeftIcon, LaptopMinimalIcon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { SidebarNavItem } from "@/types"
import { useSelectedLayoutSegments } from "next/navigation"
import { cn } from "@/lib/utils"


export interface DashboardSidebarSheetProps{
  items: SidebarNavItem[]
}

export function DashboardSidebarSheet({
  items
}: DashboardSidebarSheetProps) {
  const segment = useSelectedLayoutSegments()
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
        <SheetContent side="left" className="inset-y-0 flex h-auto w-[18.75rem] flex-col items-center gap-4 px-0 py-4">
          <div className="w-full px-7">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <LaptopMinimalIcon className="mr-2 size-6" aria-hidden="true" />
              <span className="font-bold">frty</span>
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex items-start justify-center gap-2 flex-col">
              {items.map((item, index) => {
                const Icon = item.icon ? item.icon : ChevronLeftIcon

                return item.href ? (
                  <Link
                    aria-label={item.title}
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : ""}
                    rel={item.external ? "noreferrer" : ""}
                    onClick={() => {
                      if (open) setOpen(false)
                    }}
                  >
                    <span
                      className={cn(
                        "group flex w-60 items-center rounded-md border border-transparent px-2 py-2 mr-6 hover:bg-muted hover:text-foreground",
                        item.href.includes(String(segment))
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground",
                        item.disabled && "pointer-events-none opacity-60"
                      )}
                    >
                      <Icon className="mr-2 size-4" aria-hidden="true" />
                      <span>{item.title}</span>
                    </span>
                  </Link>
                ) : (
                  <span
                    key={index}
                    className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                  >
                    <Icon className="mr-2 size-4" aria-hidden="true" />
                    {item.title}
                  </span>
                )
              })}
            </div>
          </ScrollArea>
        </SheetContent>
    </Sheet>
)
}
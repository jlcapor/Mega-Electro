"use client"

import Link from "next/link"
import type { SidebarNavItem } from "@/types"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import React from "react"
import { useSelectedLayoutSegments } from "next/navigation"
import { useSidebar } from "@/hooks/use-sidebar"

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[]
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const segment = useSelectedLayoutSegments()
  const { open, setOpen } = useSidebar()
  
  if (!items?.length) return null

  return (
    <div
      className={cn("flex w-full flex-col gap-2 text-base", className)}
      {...props}
    >
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
                "group flex w-52 items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
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
  )
}
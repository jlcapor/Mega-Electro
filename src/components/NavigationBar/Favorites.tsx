import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "../icons"

interface FavoritesProps {
  className?: string
}

export async function Favorites({ className }: FavoritesProps) {
  return (
    <div className={cn("mt-0.5 size-8 cursor-pointer items-center justify-center fill-none transition-transform hover:scale-105", className)}>
      <Link aria-label="Go to favorites items" href="/favorites" prefetch={false}>
        <Icons.favorites className="size-6" />
      </Link>
    </div>
  )
}
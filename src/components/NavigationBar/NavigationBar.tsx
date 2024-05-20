import { Suspense } from "react"

import Link from "next/link"
import { Skeleton } from "../ui/skeleton"
import { Icons } from "../icons"
import { CartSheet } from "../Cart/CartSheet"
import { Favorites } from "./Favorites"
import MainNav from "../layouts/MainNav"

export function NavigationBar() {
  
  return (
    <nav className="sticky top-0 z-50 mx-auto my-0 flex w-full flex-wrap content-center items-center justify-between border-b bg-background py-6 md:border-y">
      <div className="flex justify-start px-4 md:mx-auto md:w-full md:px-0">
        <section className="flex w-full justify-between md:hidden">
          <Icons.menu className="size-6 mr-2 mt-2"/>
          <Link href="/" className="flex items-center text-xl font-bold">
            Acme
          </Link>
          <div className="absolute right-4 flex items-center justify-center gap-2">
            <Favorites className="flex md:hidden" />
            <Suspense fallback={<Skeleton className="size-8" />}>
              <CartSheet className="flex md:hidden" />
            </Suspense>
          </div>
        </section>
        <section className="flex flex-1 items-center justify-end space-x-4">
          <div className="container flex items-center justify-center">
            <div className="mt-10 flex w-full flex-col gap-8 md:mt-0 md:w-auto md:flex-row md:items-center md:justify-start">
              <MainNav/>
            </div>
              
            <div className="relative ml-auto flex items-center">
              <div className="flex gap-2">
                <Favorites className="hidden md:flex" />
                <CartSheet className="hidden md:flex" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  )
}

//Dem0_2023#_.
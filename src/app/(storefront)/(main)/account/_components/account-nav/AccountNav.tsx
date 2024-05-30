"use client"

import ChevronDown from '@/components/common/icons/chevron-down'
import MapPin from '@/components/common/icons/map-pin'
import Package from '@/components/common/icons/package'
import User from '@/components/common/icons/user'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { SidebarNavItem } from '@/types'
import { ExitIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface AccountNavProps {
  items: SidebarNavItem[]
}

export default function AccountNav({items}: AccountNavProps){

  const pathname = usePathname()
  console.log(pathname)
  if (!items?.length) return null

  
  // const handleLogout = async () => {
  //   await signOut()
  // }
  
  return (
    <>
      <div className="small:hidden" >
        {pathname !== "/account" ? (
          <Link
            href="/account"
            className="flex items-center gap-x-2 text-small-regular py-2"
          >
            <ChevronDown className="transform rotate-90" />
            <span>Cuenta</span>
          </Link>
        ) : (
          <>
            <div className="text-xl-semi mb-4 px-8">
              Jose Luis Capote
            </div>
            <div className="text-base-regular">
              <ul 
                className='flex flex-col gap-y-4'
              >
                <li>
                  <Link
                    href="/account/profile"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <User size={20} />
                        <span>Perfil</span>
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account/addresses"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <MapPin size={20} />
                        <span>Direcciones</span>
                      </div>
                        <ChevronDown className="transform -rotate-90" />
                    </>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account/orders"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <div className="flex items-center gap-x-2">
                      <Package size={20} />
                      <span>Pedidos</span>
                    </div>
                      <ChevronDown className="transform -rotate-90" />
                  </Link>
                </li>
                <li className='ml-6 mt-4'>
                  <Button
                    variant="default"
                    size="sm"
                  >
                    <div className="flex items-center gap-x-2">
                      <ExitIcon className="size-5 transform -rotate-90"/>
                      <span>Cerrar sesión</span>
                    </div>
                  </Button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="hidden small:block">
        <>
          <h3 className="text-base-semi">Cuenta</h3>
        </>
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 divide-y space-y-1">
            <div className="text-base-regular">
              <div className="space-y-4 pb-4">
                {items.map((item, index) => {
                  return item.href ? (
                  <Link
                    aria-label={item.title}
                    key={index}
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent py-1 hover:underline",
                      item.disabled && "cursor-not-allowed opacity-60",
                      pathname === item.href
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                    target={item.external ? "_blank" : ""}
                    rel={item.external ? "noreferrer" : ""}
                  >
                    <span
                      className={cn(
                        "group flex w-52 items-center",
                      )}
                    >
                    
                      <span>{item.title}</span>
                    </span>
                  </Link>
                  ) : null
                })}
              </div>
              <Button
                variant="default"
                size="sm"
                className='mt-4'
              >
                <ExitIcon className="mr-2 size-5" aria-hidden="true" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




"use client"

import LocalizedClientLink from '@/components/common/components/localized-client-link'
import ChevronDown from '@/components/common/icons/chevron-down'
import MapPin from '@/components/common/icons/map-pin'
import Package from '@/components/common/icons/package'
import User from '@/components/common/icons/user'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AccountNav = () => {
  const route = usePathname()
  return (
    <>
      <div className="small:hidden" >
        {route !== `/account` ? (
          <Link
            href="/account"
            className="flex items-center gap-x-2 text-small-regular py-2"
          >
            <ChevronDown className="transform rotate-90" />
            <span>Account</span>
          </Link>
        ) : (
          <>
            <div className="text-xl-semi mb-4 px-8">
              Jose Luis Capote
            </div>
            <div className="text-base-regular">
              <ul>
                <li>
                  <Link
                    href="/account/profile"
                    className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <User size={20} />
                        <span>Profile</span>
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
                        <span>Addresses</span>
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
                      <span>Orders</span>
                    </div>
                      <ChevronDown className="transform -rotate-90" />
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="hidden small:block">
        <>
          <h3 className="text-base-semi">Account</h3>
        </>
        {/* <div className="text-base-regular">
          <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
            <li>
              <AccountNavLink
                href="/"
                route={route!}
              >
                  Overview
              </AccountNavLink>
            </li>
            <li>
                <AccountNavLink
                  href="profile"
                  route={route!}
                >
                  Profile
                </AccountNavLink>
              </li>
          </ul>
        </div> */}
      </div>
    </>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
}

const AccountNavLink = ({ href, route, children,}: AccountNavLinkProps) => {

  return (
    <LocalizedClientLink
      href={href}
      className={cn("")}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav

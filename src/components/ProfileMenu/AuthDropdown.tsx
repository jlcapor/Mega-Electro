
import Link from "next/link"
import { DashboardIcon, ExitIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import type { Session } from "next-auth"
import { Icons } from "../icons"

interface AuthDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  // user: Pick<User, "name" | "image" | "email">
  session: Session | null
}

export function AuthDropdown({ session }: AuthDropdownProps) {
  const initials = `${session?.user?.name?.charAt(0) ?? ""}`
  return (
    <div className='flex items-center space-x-6'>
      {session ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className={cn("size-8 rounded-full")}
              >
                <Avatar className="size-9">
                  <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? ""} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {session.user.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/users">
                    <DashboardIcon className="mr-2 size-4" aria-hidden="true" />
                      Dashboard
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <Icons.user className="mr-2 size-4" aria-hidden="true" />
                     Tu cuenta
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                  onSelect={(event) => {
                    event.preventDefault()
                    void signOut({
                      callbackUrl: `${window.location.origin}/signin`,
                    })
                  }}
                >
                <ExitIcon className="mr-2 size-4" aria-hidden="true" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : null}
    </div>
  )
}

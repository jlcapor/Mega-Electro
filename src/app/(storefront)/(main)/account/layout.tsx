import { getCurrentUser } from "@/lib/session";
import AccountNav from "./_components/account-nav/AccountNav";
import { profileConfig } from "@/config/profile";
import { redirect } from "next/navigation";
import { authOptions } from "@/server/auth";

interface AccountLayoutProps {
  children: React.ReactNode
}

export default async function AccountPageLayout({ children } : AccountLayoutProps) {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/signin")
  }
  return (
    <div className="flex-1 small:py-12">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto flex flex-col">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-12">
          <div>{user?.id && <AccountNav items={profileConfig.sidebarNav}/>}</div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}
 //R0j45_#_2024*
import { NavigationBar } from "@/components/NavigationBar/NavigationBar"
import TopBar from "@/components/TopBar/TopBar"
import SiteFooter from "@/components/site-footer"
import { getSession } from "@/lib/session"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getSession()
  
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar session={session}/>
      <NavigationBar/>
      <section className="flex items-center justify-center my-4">
        {children}
      </section>
      <SiteFooter />
    </div>
  )
}
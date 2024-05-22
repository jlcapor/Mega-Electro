import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import TopBar from "@/components/TopBar/TopBar";
import SiteFooter from "@/components/layouts/SiteFooter";
import { getSession } from "@/lib/session";

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar/>
      <NavigationBar/>
      <section className="flex items-center justify-center my-6">
        {children}
      </section>
      <SiteFooter/>
    </div>
  )
}
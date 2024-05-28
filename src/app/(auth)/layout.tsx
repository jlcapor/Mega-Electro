import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import TopBar from "@/components/TopBar/TopBar";
import SiteFooter from "@/components/site-footer";
import { getCurrentUser } from "@/lib/session";

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar user={{
        name: user?.name,
        image: user?.image,
        email: user?.email,
      }}/>
      <NavigationBar/>
      <section className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        {children}
      </section>
      <SiteFooter/>
    </div>
  )
}
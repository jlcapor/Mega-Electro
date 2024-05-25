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
      <section className="flex items-center justify-center my-6">
        {children}
      </section>
      <SiteFooter/>
    </div>
  )
}
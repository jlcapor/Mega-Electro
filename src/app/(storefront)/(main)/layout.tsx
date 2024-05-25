import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import SiteFooter from "@/components/site-footer";
import TopBar from "@/components/TopBar/TopBar";
import { getCurrentUser } from "@/lib/session";

export default async function TechStoreLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <div className="relative flex min-h-screen flex-col">
      <TopBar user={{
        name: user?.name,
        image: user?.image,
        email: user?.email,
      }}/>
      <NavigationBar/>
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

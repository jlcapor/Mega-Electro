import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import SiteFooter from "@/components/site-footer";
import TopBar from "@/components/TopBar/TopBar";
import {  getSession } from "@/lib/session";

export default async function TechStoreLayout({ children }: { children: React.ReactNode }) {
  // const user = await getCurrentUser();
  const session = await getSession()
  return (
    <div className="relative flex min-h-screen flex-col">
      <TopBar session={session}/>
      <NavigationBar/>
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

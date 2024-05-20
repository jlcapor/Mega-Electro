import { NavigationBar } from "@/components/NavigationBar/NavigationBar";
import SiteFooter from "@/components/layouts/SiteFooter";
import TopBar from "@/components/TopBar/TopBar";

export default function TechStoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <TopBar/>
      <NavigationBar/>
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

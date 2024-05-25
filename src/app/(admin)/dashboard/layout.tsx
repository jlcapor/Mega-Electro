import { redirect } from 'next/navigation';
import { DashboardHeader } from './_components/dashboard-header'
import { DashboardSidebar } from './_components/dashboard-sidebar'
import SiteFooter from '@/components/site-footer'
import { getCurrentUser } from '@/lib/session'
import { SidebarProvider } from '@/context/sidebar-context';


export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin")
  }
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col space-y-6">
        <DashboardHeader user={user}/>
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <DashboardSidebar/>
          <main className="flex w-full flex-1 flex-col overflow-hidden space-y-4 pt-6">
            {children}
          </main>
        </div>
        <SiteFooter/>
      </div>
    </SidebarProvider>
  )
}

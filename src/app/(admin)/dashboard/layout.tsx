import { redirect } from 'next/navigation';
import { DashboardHeader } from './_components/dashboard-header'
import { getCurrentUser } from '@/lib/session'
import { SidebarProvider } from '@/context/sidebar-context';
import { DashboardSidebar } from './_components/dashboard-sidebar';
import SiteFooter from '@/components/site-footer';


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
        <DashboardHeader user={user} />
        <div className="container flex flex-1 gap-12">
          <DashboardSidebar/>
          <main className="flex-1 space-y-4 pt-12">
            {children}
          </main>
        </div>
        <SiteFooter/>
      </div>
    </SidebarProvider>
  )
}

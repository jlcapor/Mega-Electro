import getCurrentUser from "@/lib/queries/getCurrentUser"
import { redirect } from "next/navigation"
export default async function ProtectedAuthLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getCurrentUser()
  if (user) {
    redirect("/")
  }

  return <>{children}</>
}
import { authOptions, getServerAuthSession } from "@/server/auth"
import { getServerSession } from "next-auth/next"

export async function getSession() {
  return await getServerAuthSession();
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}
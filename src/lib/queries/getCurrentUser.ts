import  { getServerSession } from "next-auth/next"
import { unstable_noStore as noStore } from "next/cache"
import { authOptions } from "@/server/auth";
import { db } from "@/server/db";

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function  getCurrentUser() {
  noStore()
  try {
   const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, String(session.user.email)),
    });
    
    if (!currentUser) {
      return null;
    }

    return currentUser
      
  } catch (error) {
    return null;
  }
}
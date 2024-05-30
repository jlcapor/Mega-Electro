import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { env } from "@/env"
import type { Metadata } from "next"


export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Products",
  description: "Manage your products",
}
export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
        <Button>
          XCXCV
        </Button>
      </div>
      <Card></Card>
    </div>
  )
}

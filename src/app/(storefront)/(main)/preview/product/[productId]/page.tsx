import { redirect } from "next/navigation"

interface ProductPreviewPageProps {
  params: {
    productId: string
  }
}
//https://medium.com/@alexandre.penombre/file-upload-with-next-js-14-app-router-6cb0e594e778
export default function ProductPreviewPage({
  params,
}: ProductPreviewPageProps) {
  const productId = Number(params.productId)
  redirect(`/product/${productId}`)
}
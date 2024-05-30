interface UpdateProductPageProps {
    params: {
      productId: string
    }
}

export default async function UpdateProductPage({ params } : UpdateProductPageProps) {
  const { productId } = params
  return (
    <div>
        {productId}
    </div>
  )
}


type OrderDetailPageProps = {
    params: { orderId: string }
  }

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
    const { orderId } = params
    return(
        <div className="container">
            <h1>Order Detail {orderId}</h1>
        </div>
    )
}
import { createFileRoute } from '@tanstack/react-router'
import Breadcrumb from '../../components/breadcrumb'
import { getProduct } from '../../api/product'
import ProductDetails from '../../components/product-details'
import { TProductResponse } from '../../utils/types'

export const Route = createFileRoute('/shop/$name')({
  component: Product,
  loader: async ({ params }) => await getProduct(params.name),
})

function Product() {
  const { name } = Route.useParams()
  const data: TProductResponse = Route.useLoaderData()

  return (
    <>
      <Breadcrumb title="Home" links={['shop', name]} />
      <ProductDetails product={data.items[0]} />
      <div></div>
    </>
  )
}

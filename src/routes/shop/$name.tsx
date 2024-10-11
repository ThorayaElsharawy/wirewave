import { createFileRoute } from '@tanstack/react-router'
import { getProduct } from '../../api/product'
import ProductDetails from '../../components/product-details'
import { TProductResponse } from '../../utils/types'
import { useQuery } from '@tanstack/react-query'
import Breadcrumb from '../../components/breadcrumb'

export const Route = createFileRoute('/shop/$name')({
  component: Product,
  loader: async ({ params }) => await getProduct(params.name),
})

function Product() {
  const { name } = Route.useParams()
  const initalData: TProductResponse = Route.useLoaderData()

  const { data = initalData } = useQuery({
    queryKey: ['product', name],
    queryFn: () => getProduct(name),
    staleTime: 50,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  })

  return (
    <>
      <Breadcrumb />
      <ProductDetails product={data?.items[0]} />
    </>
  )
}

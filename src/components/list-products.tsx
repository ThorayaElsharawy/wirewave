import SingleListProduct from './single-list-product'
import { TProductDetails, TProductResponse } from '../utils/types'

type ListProductsProps = {
  products: TProductDetails[]
}

export default function ListProducts({products}: ListProductsProps) {
  return (
    <div>
      {products.map(item => (
        <SingleListProduct item={item} />
      ))}
    </div>
  )
}

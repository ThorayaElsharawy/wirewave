import SingleProduct from './single-product'
import { TProductDetails } from '../utils/types'

type GridProductsProps = {
  products: TProductDetails[]
}

export default function GridProducts({ products }: GridProductsProps) {
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10 items-center justify-center w-full p-5 '>
      {products.map((item) => (
        <div key={item.id} className={`sm:border-r cursor-pointer group relative m-auto sm:m-0 w-auto flex flex-col`}>
          <SingleProduct item={item} />
        </div>
      ))}
    </div>
  )
}

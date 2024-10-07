import { TProductResponse } from '../utils/types'
import SingleProduct from './single-product'

type ProductsProps = {
    products: TProductResponse
}

export default function Products({products}: ProductsProps) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
            {products?.items.slice(0, 4).map(item => (
                <div key={item.id} className='border-r last:border-0 cursor-pointer group max-md:even:border-r-0 relative'>
                    <SingleProduct item={item} />
                </div>
            ))}
        </div>
    )
}

import { FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import { TProductDetails } from '../utils/types'
import Section from './section'
import { IoEye } from 'react-icons/io5'
import { formatValue } from '../utils/helpers'
import SingleProduct from './single-product'
import { getproducts } from '../api/product'
import { useQuery } from '@tanstack/react-query'

type ProductDetailsProps = {
    product: TProductDetails
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getproducts
    })

    return (
        <Section>
            <div className='grid md:grid-cols-[auto_auto] gap-10 items-center justify-center mt-10'>
                <div className='m-auto flex flex-col items-center justify-center'>
                    <img src={product.imgurl} alt={product.name} className='' width={468} height={468} />
                    <div className='grid grid-cols-3 gap-6 '>
                        <img src={product.imgurl} alt={product.name} className='border shadow-md' width={150} height={150} />
                        <img src={product.imgurlFlip} alt={product.name} className='border shadow-md ' width={150} height={150} />
                        <img src={product.imgurl} alt={product.name} className='border shadow-md' width={150} height={150} />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h4 className='text-xl font-semibold'>{product.name}</h4>
                    <p>{product.color}</p>
                    <p className='text-sm'>
                        <span className='italic'>Reference:</span>
                        <span className='text-[#f0ce16]'>demo_13</span></p>
                    <p className='text-sm'>
                        <span className='italic'>Condition:</span>
                        {product.condition && <span className='text-[#f0ce16]'>New product</span>}</p>
                    <p >
                        <span className='text-3xl font-bold'> ${formatValue(product.price)}</span>
                        <span className='text-sm text-[#393939] mx-2'>tax incl.</span>
                    </p>
                    <p className='text-[#777777] border-b border-[#f2f2f2] pb-4 max-w-[80%] text-sm'>
                        Printed chiffon knee length dress with tank straps. Deep v-neckline.</p>
                    <div>
                        <label htmlFor="qty">Qty</label>
                        <input type="number" min='1' max='5' className='border p-2 px-3 mx-2' />
                    </div>
                    <div className='mt-5 flex items-center gap-2'>
                        <button className='px-4 py-2 text-white bg-black flex items-center justify-center gap-2 rounded-2xl hover:bg-[#f0ce16] transition-colors'>
                            <FaCartShopping className='w-4' />
                            <span>Add to cart</span>
                        </button>
                        <button
                            className='hover:bg-[#f0ce16] rounded-full p-3 bg-black text-white transition-colors duration-300'>
                            <FaRegHeart className='w-4' />
                        </button>
                        <button
                            className='hover:bg-[#f0ce16] rounded-full p-3 bg-black text-white transition-colors duration-300'>
                            <IoEye className='w-4' />
                        </button>
                    </div>

                    <div className='bg-green-700/80 text-white px-2.5 py-1.5 text-sm rounded-md mt-5'>
                        In stock
                    </div>
                </div>
            </div>

            <div className='relative my-20 m-auto xl:w-[80%]'>
                <h2 className='text-2xl font-bold uppercase'>More info</h2>
                <div className='h-[2px] bg-primary mt-2 bottom-0 left-0 w-[5rem]'></div>
                <p className='text-sm text-[#777777] mt-5 leading-8'>
                    Fashion has been creating well-designed collections since 2021. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a
                    full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy,
                    chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!
                </p>
            </div>

            <div className='m-auto xl:w-[80%]'>
                <h2 className='uppercase'>
                    <span className='text-primary text-3xl'>0</span>
                    <span className='text-2xl font-bold'>ther products in the same category:</span>
                </h2>
                <div className='h-[2px] bg-primary mt-2 bottom-0 left-0 w-[10rem]'></div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                    {products?.items.slice(0, 4).map(item => (
                        <div key={item.id} className='border-r last:border-0 cursor-pointer group max-md:even:border-r-0 relative'>
                            <SingleProduct item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

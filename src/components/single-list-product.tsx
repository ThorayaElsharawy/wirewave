import { FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import { IoEye } from 'react-icons/io5'
import { TiStarFullOutline } from 'react-icons/ti'
import { TProductDetails } from '../utils/types'
import { Link } from '@tanstack/react-router'


type SingleListProductProps = {
    item: TProductDetails
}

export default function SingleListProduct({ item }: SingleListProductProps) {
    return (
        <Link to='/shop/$name' params={{
            name: item.name
        }}>
            <div className='grid sm:grid-cols-[25%_70%] items-center gap-6 justify-between border-b py-5 cursor-pointer'>

                <div className='relative m-auto w-full h-[250px] group'>
                    <img src={item.imgurl} alt={item.name}
                        className='w-full h-full object-contain inset-0 backface-hidden transition-transform duration-700 transform ease-in-out group-hover:animate-rotate-y' />
                    <img src={item.imgurlFlip} alt={item.name}
                        className='w-full h-full object-contain absolute inset-0 backface-hidden opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100'
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className='text-lg font-[600] hover:text-[#f0ce16] transition-colors duration-300'>{item.name}</h2>
                    <div className='flex text-[#cccccc] my-2'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span key={index}>
                                <TiStarFullOutline />
                            </span>
                        ))}
                    </div>
                    <p className='text-sm text-[#666666] max-w-[35rem]'>
                        Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.
                        Accessorize with a straw hat and you're ready for summer!
                    </p>

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
                </div>

            </div>
        </Link>
    )
}

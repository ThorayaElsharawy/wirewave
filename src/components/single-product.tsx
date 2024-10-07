import { FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import { IoEye } from 'react-icons/io5'
import { TiStarFullOutline } from 'react-icons/ti'
import { TProductDetails } from '../utils/types'
import { Link } from '@tanstack/react-router'

type SingleProductProps = {
    item: TProductDetails
}

const IconButtons = [
    {
        id: 1,
        icon: <FaCartShopping className='w-4' />,
        onClick: () => console.log('Cart button clicked'),
        ariaLabel: 'Cart'
    },
    {
        id: 2,
        icon: <FaRegHeart className='w-4' />,
        onClick: () => console.log('Favorite button clicked'),
        ariaLabel: 'Favorite'
    },
    {
        id: 3,
        icon: <IoEye className='w-4' />,
        onClick: () => console.log('View button clicked'),
        ariaLabel: 'View'
    }
]

export default function SingleProduct({ item }: SingleProductProps) {
    return (
        <Link to='/shop/$name' params={{
            name: item.name
        }}>
            <div className='relative m-auto group w-full sm:w-[80%] h-[250px]'>
                <img src={item.imgurl} alt={item.name}
                    width={300}
                    className='m-auto w-full h-full object-contain inset-0 backface-hidden transition-transform duration-700 transform ease-in-out group-hover:animate-rotate-y' />
                <img src={item.imgurlFlip} alt={item.name}
                    className='m-auto w-full h-full object-contain absolute inset-0 backface-hidden opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100'
                   
                />
            </div>

            <div className='absolute left-2 w-full transition-opacity ease-in-out top-[10%] sm:top-[10rem] flex gap-2'>
                {IconButtons.map((item, index) => (
                    <button
                        key={item.id}
                        className={`hover:bg-[#f0ce16] rounded-full p-3 bg-black text-white opacity-0 group-hover:opacity-100 duration-[${index * 1000}ms] transition-opacity`}
                        onClick={item.onClick} >
                        {item.icon}
                    </button>
                ))}
            </div>

            <div className='px-3  mt-5'>
                <h5 className='block capitalize text-[#393939] font-semibold hover:text-[#f0ce16] transition-colors duration-300'>{item.name}</h5>
                <div className='flex text-[#cccccc] my-2'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index}>
                            <TiStarFullOutline />
                        </span>
                    ))}
                </div>
                <div>
                    {item.oldPrice > 0 && <p className='text-red-500  font-bold inline-block mr-1 text-lg'>
                        {item.oldPrice} €
                    </p>}
                    <p className={`${item.oldPrice ? 'inline-block text-sm text-[#5c5c5c] line-through' : 'font-semibold inline-block text-lg'}`}>{item.price}€</p>
                </div>
            </div>
        </Link>
    )
}

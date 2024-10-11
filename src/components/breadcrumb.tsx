import { Link } from '@tanstack/react-router'
import SearchForm from './search-form'
import { IoIosArrowForward, IoIosHome } from 'react-icons/io'

export default function Breadcrumb() {
    return (
        <div className='bg-[#171717] w-full py-8'>
            <div className='relative sm:mt-5 md:mt-0 max-w-[580px] mx-5 sm:m-auto'>
                <SearchForm />
            </div>
            {/* <div className='text-white flex items-center justify-center gap-2 mt-5'>
                <Link to='/'>
                    <IoIosHome className='text-xl' />
                </Link>
                <IoIosArrowForward />
                <Link className='text-primary text-sm font-semibold' to='/shop' search={{
                    categories: 'all'
                }}>
                    Shop
                </Link>
            </div> */}
            {/* <ul className='text-white flex items-center justify-center gap-2 mt-5'>
                <li>
                   
                </li>

                {links.map((link, index) => {
                    return (
                        <li className={`flex items-center justify-center gap-2`} key={index}>
                            
                            <span

                                className={`capitalize text-sm ${index === links.length - 1 ? 'text-primary' : ''}`}
                                key={link}
                            >
                                {link}
                            </span>
                        </li>
                    );
                })}
            </ul> */}

        </div>
    )
}

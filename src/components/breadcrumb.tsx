import { Link, UseNavigateResult } from '@tanstack/react-router'
import { ImSearch } from 'react-icons/im'
import { IoIosArrowForward, IoIosHome } from 'react-icons/io'
import { TProductDetails } from '../utils/types'

type BreadcrumbProps = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    links: string[]
    products: TProductDetails[]
    handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    navigate: UseNavigateResult<"/shop">
}

export default function Breadcrumb({ search, links, setSearch, products, handleSearchSubmit, navigate }: BreadcrumbProps) {
    return (
        <div className='bg-[#171717] w-full py-8'>
            {/* <h2 className='m-auto text-white text-2xl font-bold text-center'>{title}</h2> */}

            <div className='relative sm:mt-5 md:mt-0 max-w-[580px] mx-5 sm:m-auto'>
                <form onSubmit={(e) => handleSearchSubmit(e)} className='flex bg-white h-[55px] rounded-[30px]'>

                    <select id="cars" className='focus:outline-none rounded-[30px] text-sm px-4'>
                        <option value="allCategory">All categories</option>
                        <option value="headphone">Headphone</option>
                        <option value="mobile$tabltes">Mobile and tabltes</option>
                        <option value="laptops">Laptops</option>
                        <option value="microphnes">Microphnes</option>
                    </select>

                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            navigate({ search: (prev) => ({...prev, querySearch: e.target.value}) })
                        }}
                        list="browsers"
                        name="browser"
                        id="browser"
                        placeholder='Search entire store here'
                        className='bg-white text-sm w-full px-1
                        focus:border-slate-100/80 focus-visible:border-none focus-visible:outline-none'

                    />

                    <datalist id="browsers" className='ml-10'>
                        {products?.slice(0, 4).map(item => (
                            <option key={item.id} value={item.name} />
                        ))}

                    </datalist>

                    <button
                        type='submit'
                        className=" m-auto p-4 mt-1 mr-1.5 rounded-[30px] text-white bg-primary">
                        <ImSearch />
                    </button>
                </form>


                {/* <div className="absolute inset-y-0 start-2 flex items-center mx-2 -mt-1 text-sm bg-transparent">
                  
                </div> */}


            </div>
            <ul className='text-white flex items-center justify-center gap-2 mt-5'>
                <li>
                    <Link to='/'>
                        <IoIosHome className='text-xl' />
                    </Link>
                </li>

                {links.map((link, index) => {
                    return (
                        <li className={`flex items-center justify-center gap-2`} key={index}>
                            <IoIosArrowForward />
                            <span

                                className={`capitalize text-sm ${index === links.length - 1 ? 'text-primary' : ''}`}
                                key={link}
                            >
                                {link}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

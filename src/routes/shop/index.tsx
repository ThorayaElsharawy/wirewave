import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router'
import Breadcrumb from '../../components/breadcrumb'
import Section from '../../components/section'
import { RiLayoutGrid2Fill } from 'react-icons/ri'
import { FaListUl } from 'react-icons/fa6'

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md'

import { getproducts, searchProduct } from '../../api/product'
import { useEffect, useState } from 'react'
import { category, itemFilter, TDisplay, TProductDetails, TProductResponse } from '../../utils/types'

import GridProducts from '../../components/grid-products'
import ListProducts from '../../components/list-products'


export const Route = createFileRoute('/shop/')({
  validateSearch: (search: Record<string, unknown>): itemFilter => {
    return {
      categories: (search.categories as string) as category,
      querySearch: search.querySearch as string
    }
  },
  component: Shop,
  loader: getproducts
})

function Shop() {
  const products = Route.useLoaderData()
  const { categories, querySearch } = Route.useSearch()
  const router = useRouter()

  const [display, setDisplay] = useState<TDisplay>('grid')
  const [search, setSearch] = useState(querySearch || '')
  const [filterProducts, setFilterProducts] = useState<TProductDetails[]>(products.items)

  const navigate = useNavigate({ from: Route.fullPath })

  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      let updatedProducts = products.items

      console.log(categories)
      if (categories) {
        updatedProducts = products.items.filter(item => item.expand.category_id.name === categories)
      }

      console.log(search.length > 0)
      if (search.length > 0) {
        const searchResult: TProductResponse = await searchProduct(search)
        updatedProducts = searchResult.items || []
      }

      setFilterProducts(updatedProducts)
    }

    fetchAndFilterProducts()
  }, [search, categories])

  const searchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (filterProducts.length === 1) {
      router.navigate({
        to: '/shop/$name',
        params: { name: filterProducts[0].name },
      });
    } else {
      router.navigate({
        to: '/shop',
        search: { querySearch, categories }
      })
    }
  }

  return (
    <>
      <Breadcrumb links={['shop']} search={search} navigate={navigate} setSearch={setSearch} products={products.items} handleSearchSubmit={searchSubmit} />
      <Section >
        <div className='lg:flex pt-14 h-full'>
          <Sidebar />

          <div className='w-full h-full lg:pl-14 lg:border-l'>

            <ProductHeader totalProducts={filterProducts.length} />

            <div className='sm:flex items-center gap-6 mt-10 border-b pb-5'>

              <DisplayToggle display={display} setDisplay={setDisplay} />
              <Pagination />

            </div>

            {
              display === 'grid' ?
                <GridProducts products={filterProducts} /> :
                <ListProducts products={filterProducts} />
            }

          </div>
        </div>
      </Section>
    </>

  )
}

function ProductHeader({ totalProducts }: { totalProducts: number }) {
  return (
    <div className="flex items-center justify-between">
      <h5 className="uppercase text-sm font-semibold">All products</h5>
      <p className="text-sm font-bold">There are {totalProducts} products.</p>
    </div>
  )
}

type DisplayToggleProps = {
  display: string
  setDisplay: React.Dispatch<React.SetStateAction<TDisplay>>
}

function DisplayToggle({ display, setDisplay }: DisplayToggleProps) {
  return (
    <div className='flex gap-2'>
      <button
        className={`${display === 'grid' ? 'bg-black' : 'bg-[#8e8e8e]'} text-white file:text-xl p-2 rounded-sm`}
        onClick={() => setDisplay('grid')}>
        <RiLayoutGrid2Fill />
      </button>
      <button
        className={`${display === 'list' ? 'bg-black' : 'bg-[#8e8e8e]'} text-white file:text-xl p-2 rounded-sm`}
        onClick={() => setDisplay('list')}>
        <FaListUl />
      </button>

      <div>
        <label htmlFor="sort" className=" text-sm font-medium text-gray-900 inline-block">
          Sort By
        </label>
        <select id="sort" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm inline-block mx-2 p-2">
          <option defaultValue=''>Price: Lowest first</option>
          <option value="US">Price: Highest first</option>
          <option value="CA">Product name: A to Z</option>
        </select>
      </div>
    </div>
  )
}

function Pagination() {
  return (
    <div className='ml-auto text-xl flex gap-3 mt-5 sm:mt-0'>
      <button disabled className='bg-gray-100/80 p-2  rounded-sm hover:bg-gray-300 transition-colors'>
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button disabled className='bg-gray-100/80 p-2 rounded-sm hover:bg-gray-300 transition-colors'>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button className='bg-gray-200 p-2 rounded-sm hover:bg-gray-300 transition-colors'>
        <MdOutlineKeyboardArrowRight />
      </button>
      <button className='bg-gray-200 p-2 rounded-sm hover:bg-gray-300 transition-colors'>
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  )
}

function Sidebar() {
  return (
    <div className='lg:w-[20rem] flex flex-col gap-12 h-full'>
      <div>
        <h5 className='uppercase font-[1000] text-xl'>Enabled filters:</h5>
        <div className='w-[60px] bg-primary h-[2px]'></div>
      </div>

      <div>
        <h5 className='uppercase font-[1000] text-xl'>Color</h5>
        <div className='w-[60px] bg-primary h-[2px]'></div>
        <div>
          <ul className='flex flex-col gap-1 mt-5'>
            <li> <input type="checkbox" name="white" id="white" /> White</li>
            <li> <input type="checkbox" name="black" id="black" /> Black</li>
            <li> <input type="checkbox" name="blue" id="blue" /> Blue</li>
            <li> <input type="checkbox" name="orange" id="orange" /> Orange</li>
          </ul>
        </div>
      </div>

      <div>
        <h5 className='uppercase  font-[1000] text-xl'>Availability</h5>
        <div className='w-[60px] bg-primary h-[2px]'></div>
        <input className='mt-5' type="checkbox" name='instock' id='instock' /> In Stock (13)
      </div>

      <div>
        <h5 className='uppercase font-[1000] text-xl'>Condition</h5>
        <div className='w-[60px] bg-primary h-[2px]'></div>
        <input className='mt-5' type="checkbox" name='new' id='new' /> New (13)
      </div>
    </div>
  )
}

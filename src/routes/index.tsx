import { createFileRoute, Link } from '@tanstack/react-router'
import Hero from '../components/hero'
import Bannar from '../components/bannar'
import Products from '../components/products'
import { getproducts } from '../api/product'
import Section from '../components/section'
import Heading from '../components/heading'
import { MdArrowRight } from 'react-icons/md'

export const Route = createFileRoute('/')({
  component: Home,
  loader: getproducts
})


function Home() {
  const products = Route.useLoaderData()
  return (
    <>
      <Hero />
      <Bannar />
      <Section className='my-10 xl:px-[10rem] relative'>
        <div className='flex items-center justify-between'>
          <Heading className='w-full' title='our product' />
          <Link search={{ categories: 'all' }} to='/shop' className='absolute ml-auto right-[10%] text-[#f0ce16] 
                hover:text-black font-semibold transition-colors'>
            Show all products
            <MdArrowRight className='inline-block text-3xl' />
          </Link>
        </div>

        <Products products={products} />

      </Section>
      {/* <Products /> */}
    </>
  )
}

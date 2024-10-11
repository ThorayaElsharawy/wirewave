import { useQuery } from '@tanstack/react-query'
import React, { useMemo, useState } from 'react'
import { getproducts, searchProduct } from '../api/product'
import { ImSearch } from 'react-icons/im'
import { TProductResponse } from '../utils/types';
import { useNavigate } from '@tanstack/react-router';

export default function SearchForm() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const { data: products } = useQuery<TProductResponse>({
        queryKey: ['products'],
        queryFn: getproducts
    })

    const { data: searchProducts, refetch } = useQuery<TProductResponse>({
        queryKey: ['search', search],
        queryFn: () => searchProduct(search),
        enabled: !!search
    });

    const optionsList = useMemo(() => {
        const source = search.length > 0 ? searchProducts : products;
        return source?.items.slice(0, 4).map(({ id, name }) => <option key={id} value={name} />);
    }, [search, searchProducts, products]);


    const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { data } = await refetch()
        if (data?.items[0]) {
            navigate({
                to: `/shop/${data?.items[0].name}`
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit} className='flex bg-white h-[55px] rounded-[30px]'>
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
                    }}
                    list="browsers"
                    name="browser"
                    id="browser"
                    placeholder='Search entire store here'
                    className='bg-white text-sm w-full px-1
                        focus:border-slate-100/80 focus-visible:border-none focus-visible:outline-none'

                />
                <datalist id="browsers">
                    {optionsList}
                </datalist>

                <button
                    type='submit'
                    className=" m-auto p-4 mt-1 mr-1.5 rounded-[30px] text-white bg-primary">
                    <ImSearch />
                </button>
            </form>
        </div>
    )
}

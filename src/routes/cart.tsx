import { createFileRoute } from '@tanstack/react-router'
import Breadcrumb from '../components/breadcrumb'
import Section from '../components/section'

export const Route = createFileRoute('/cart')({
    component: Cart,
})

function Cart() {
    return (
        <>
            <Section className=''>
                <div className='grid lg:grid-cols-2 items-start mt-10 gap-12 sm:px-7 lg:px-0'>
                    <div className=''>
                        <h2 className='uppercase text-3xl border-b pb-5 text-[#444]'>Billing Details</h2>
                        <form className='mt-5 text-sm flex flex-col gap-5'>
                            <div className='flex gap-6'>
                                <fieldset className='w-full'>
                                    <label htmlFor="firstName" className=''>First Name</label>
                                    <input id='firstName' type="text"
                                        className='border p-2 rounded-sm block mt-1 w-full'
                                    />
                                </fieldset>
                                <fieldset className='w-full'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id='lastName' type="text"
                                        className='border p-2 rounded-sm block mt-1 w-full'
                                    />
                                </fieldset>
                            </div>
                            <fieldset>
                                <label htmlFor="country">Country</label>
                                <input id='country' type="text"
                                    className='border p-2 rounded-sm block mt-1 w-full placeholder:font-light'
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="address">Address</label>
                                <input id='address' type="text"
                                    className='border p-2 rounded-sm block mt-1 w-full placeholder:font-light'
                                    placeholder='Street address'
                                />
                            </fieldset>
                            <fieldset>
                                <input id='address' type="text"
                                    className='border p-2 rounded-sm block mt-1 w-full placeholder:font-light'
                                    placeholder='Apartment, suite, unit etc. (optional)'
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="town_city">Town / City</label>
                                <input id='town_city' type="text"
                                    className='border p-2 rounded-sm block mt-1 w-full'
                                    placeholder='Town / City'
                                />
                            </fieldset>
                            <div className='flex gap-6'>
                                <fieldset className='w-full'>
                                    <label htmlFor="state_country" className=''>State / County</label>
                                    <input id='firstName' type="text"
                                        className='border p-2 rounded-sm block mt-1 w-full'
                                    />
                                </fieldset>
                                <fieldset className='w-full'>
                                    <label htmlFor="lastName">Postcode / Zip</label>
                                    <input id='lastName' type="text"
                                        className='border p-2 rounded-sm block mt-1 w-full placeholder:font-light'
                                        placeholder='Postcode / Zip'
                                    />
                                </fieldset>
                            </div>
                            <div className='flex gap-6'>
                                <fieldset className='w-full'>
                                    <label htmlFor="state_country">Email Address</label>
                                    <input id='state_country' type="email"
                                        className='border p-2 rounded-sm block mt-1 w-full'
                                    />
                                </fieldset>
                                <fieldset className='w-full'>
                                    <label htmlFor="phone">Phone</label>
                                    <input id='phone' type="number"
                                        className='border p-2 rounded-sm block mt-1 w-full placeholder:font-light'
                                        placeholder='Postcode / Zip'
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className='w-full'>
                                    <label htmlFor="note">Order Notes</label>
                                    <textarea id='note'
                                        rows={5}
                                        className='border p-2 rounded-sm block mt-1 w-full placeholder:font-light'
                                        placeholder='Notes about your order, e.g. special notes for delivery.'
                                    />
                                </fieldset>
                            </div>
                        </form>
                    </div>
                    <div className='p-[2rem] bg-[#f2f2f2]'>
                        <h2 className='uppercase text-3xl border-b pb-5 text-[#444]'>Your order</h2>

                        <table className='w-full text-center text-[#777] font-light table-fixed'>
                            <thead>
                                <tr className='border-b uppercase text-sm'>
                                    <th className='py-4'>Product</th>
                                    <th className='py-4'>Total</th>
                                </tr>
                            </thead>
                            <tbody className='text-sm'>
                                <tr className='border-b'>
                                    <td className='py-4'>Vestibulum suscipit ×
                                        <strong>1</strong>
                                    </td>
                                    <td className='py-4'>£165.00</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='py-4'>Vestibulum dictum magna ×
                                        <strong>1</strong>
                                    </td>
                                    <td className='py-4'>£165.00</td>
                                </tr>
                            </tbody>
                            <tfoot className='text-sm'>
                                <tr className='border-b'>
                                    <td className='py-4 uppercase'>Cart Subtotal</td>
                                    <td className='py-4'>£215.00</td>
                                </tr>
                                <tr className='border-b '>
                                    <td className='py-4 uppercase'>Shipping</td>
                                    <td className='py-4'>
                                        <fieldset className=''>
                                            <input id='q_shipping' name='shipping' type="radio" className='' />
                                            <label htmlFor='q_shipping' className=' mx-2'>Quick shipping</label>
                                        </fieldset>
                                        <fieldset>
                                            <input id='f_shipping' name='shipping' type="radio" />
                                            <label htmlFor='f_shipping' className=' mx-2'>Free shipping</label>
                                        </fieldset>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='uppercase py-4 text-xl'>
                                        Order Total
                                    </td>
                                    <td className='text-red-500 py-4 font-semibold text-xl'>
                                        £215.00
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <button className='w-full bg-[#ec4445] py-4 text-white uppercase mt-10 active:bg-primary transition-colors duration-300'>
                            place order
                        </button>
                    </div>
                </div>
            </Section>
        </>
    )
}
import { Link } from "@tanstack/react-router"
import { FaLocationDot } from "react-icons/fa6"
import Section from "./section"


const SIDEHEADER = ['English', 'Currency: EUR', 'About']

export default function SubHeader() {
    // const activePropsStyle = {
    //     style: {
    //         fontWeight: "bold"
    //     }
    // }
    return (
        <>
            <div className='w-full bg-[#171717] relative z-50'>
                <Section className='flex items-center justify-between !py-0 max-lg:py-1'>
                    <ul className='text-slate-100 flex items-center gap-4'>
                        {SIDEHEADER.map(item => (
                            <li key={item}
                                className='block py-4 transition-colors hover:text-yellow-300 cursor-pointer text-xs font-semibold'>
                                {item}
                            </li>
                        ))}

                        {/* <Link to="/profile" className="transition-colors hover:text-yellow-300 cursor-pointer text-xs font-semibold">My Account</Link> */}
                    </ul>


                    <Link to="/cart" className='text-slate-100 font-bold text-xs transition-colors hover:text-yellow-300 flex items-center gap-2 duration-300'>
                        <FaLocationDot className="text-sm" />
                        <span>Store Location</span>
                    </Link>
                </Section>
            </div>

        </>
    )
}

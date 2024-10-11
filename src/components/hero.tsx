import { FaCartShopping } from 'react-icons/fa6'
import Rings from '../design/rings'
import microphone from "../assets/pngwing.com.png"

export default function Hero() {

    return (
        <div className='bg-[#1f1f1f] w-full text-slate-100 relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[5rem] m-auto justify-center px-7 pt-12 md:mt-0'>

                <div className='sm:max-w-[30rem] m-auto md:ml-auto md:my-auto md:mr-0 relative sm:z-10
                   
                    '>
                    <h2 className='text-4xl sm:text-[2.5rem] md:text-[3.5rem] uppercase font-bold md:pb-14'>
                        Neumann
                        <span className='text-[#f0ce16]'>
                            tlm49
                        </span>
                    </h2>
                    <p className='text-xl sm:text-2xl md:text-3xl my-5'>
                        Vocal Optimised Transformerless
                        Microphone
                    </p>
                    <p className='text-base sm:text-lg md:text-xl'>
                        Features the K47 capsule from the legendary U47
                    </p>
                    <button className='uppercase bg-slate-100 text-black p-2 px-5 rounded-3xl
                        flex items-center gap-3 hover:bg-[#f0ce16] transition-colors hover:text-white duration-300 mt-10'>
                        <FaCartShopping />
                        <span >Buy now</span>
                    </button>
                </div>
                <div className='relative z-0'>
                    <img src={microphone}
                        className='h-full '
                        width={500}
                        alt="microphone" />
                </div>
            </div>
            <Rings />
        </div>
    )
}

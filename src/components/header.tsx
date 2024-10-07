import { Link } from '@tanstack/react-router';
import { useState } from 'react'
import Section from './section';
import { FaCartShopping, FaUserLarge } from 'react-icons/fa6';
import { IoLogIn } from 'react-icons/io5';
import Modal from './modal';
import { category } from '../utils/types';
import { useAuth } from '../hooks/useAuth';
import UserAccountBtn from './user-account-btn';

const HEADER: category[] = ['headphones', 'mobiles&tablets', 'laptops', 'microphones']

export default function Header() {
    const [toggleNavigation, setToggleNavigation] = useState(false);
    const [toggleModal, setToggleModal] = useState(false)

    const { isLogged, signOut } = useAuth()

    const handleLogout = () => {
        signOut()
    }


    return (
        <div className='bg-[#1f1f1f]/95 w-full text-slate-100'>
            <div className='relative z-10' >
                <Section className='flex items-center justify-between'>
                    <Link to='/'>
                        <h2 className='text-3xl sm:text-4xl block w-[12rem]'>WireWave.</h2>
                    </Link>
                    <nav
                        className={`${toggleNavigation ? 'flex' : 'hidden'} 
                                lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
                        {HEADER.map(item => (
                            <Link key={item}
                                to='/shop'
                                search={{ categories: item, querySearch: '' }}
                                className='inline-block mx-4 uppercase font-bold text-sm hover:text-yellow-300 transition-colors'>{item}
                            </Link>
                        ))}
                    </nav>

                    <div className='flex gap-3'>
                        {isLogged() ?
                            <UserAccountBtn />
                            :
                            <button onClick={() => setToggleModal(!toggleModal)} 
                            className='
                            border border-white rounded-full
                            text-slate-100 font-bold text-xs transition-colors hover:text-yellow-300 flex items-center gap-2 duration-300'>
                                <IoLogIn className='text-2xl' />
                                <span className='text-sm'>Login</span>
                            </button>
                        }

                        <Link to="/cart" className='text-slate-100 font-bold text-xs transition-colors 
                            hover:text-yellow-300 flex items-center gap-2 duration-300 relative'>
                            <FaCartShopping className="text-xl" />
                            <span className='absolute -top-3 -right-3 bg-red-500 p-0.5 px-1.5 rounded-full'>0</span>
                        </Link>
                    </div>

                </Section>
            </div>

            {toggleModal && (
                <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} />
            )}
        </div>
    )
}

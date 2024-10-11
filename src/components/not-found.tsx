import { Link } from '@tanstack/react-router'
import React from 'react'
import Section from './section'
import Rings from '../design/rings'

export default function NotFound() {
    return (
        <Section className='flex flex-col items-center justify-center mt-20 gap-y-5 mx-auto text-center'>
            <div className='text-[10rem] sm:text-[12rem]'>
                404
            </div>
            <h1 className='text-3xl sm:text-4xl'>Oops! That page can't be found.</h1>
            <p className='text-sm text-[#666666]'>
                Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.
            </p>
            <Link to='/' className='uppercase border-2 p-3 px-4'>Go to home</Link>

        </Section>
    )
}

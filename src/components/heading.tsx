import React from 'react'

type HeadingProps = {
    title: string
    className: string
}

export default function Heading({ title, className }: HeadingProps) {
    return (
        <div className={`${className} relative`}>
            <h5 className='uppercase text-2xl font-bold text-[#101010] pb-4'>{title}</h5>
            <div className='absolute bottom-0 z-20 left-0 w-[10rem] h-[2px] bg-[#f0ce16]'></div>
            <div className='absolute bottom-0 left-0 w-full h-[1px] bg-[#00000012]'></div>
        </div>
    )
}

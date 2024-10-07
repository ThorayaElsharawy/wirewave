import React from 'react'

type SectionProps = {
    className?: string
    children: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
    return (
        <div className={`${className} px-7 lg:px-10 xl:px-[10rem] py-5`}>
            {children}
        </div>
    )
}

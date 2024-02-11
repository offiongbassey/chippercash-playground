import React, { HTMLAttributeReferrerPolicy } from 'react'
import LinkSpan from '../LinkSpan'
import Link from 'next/link'

type CardContextType = {
    title: string;
    desc: string;
    color?: string;
    url?: string;
}

const CardContext = ({ title, desc, color, url }: CardContextType ) => {
  return (
    <div className='flex flex-1 flex-col py-5 md:py-24 px-5 items-start justify-start'>
        <h2 className='text-black-10 text-4xl font-[600] leading-[120%]' >{title}</h2>
        <p className='text-sm text-purple-50 font-[300] mb-10 md:mb-16'>{desc}</p>
        <Link href={typeof url === "string" ? url : "/"}><LinkSpan text="Choose Chipper Cash" variant={color === "purple" ? "purple" : "green"}/></Link>
    </div>
  )
}

export default CardContext

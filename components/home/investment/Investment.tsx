import LinkSpan from '@/components/LinkSpan'
import CardContext from '@/components/card/CardContext'
import CardImage from '@/components/card/CardImage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Investment = () => {
  return (
    <section className='bg-white padding-container max-container'>
            <div className='flex flex-col-reverse md:flex-row justify-start items-center py-10 md:py-10 gap-4 md:gap-20'>
                <CardContext
                    title="Invest in global stocks with $1"
                    short={true}
                    desc="With Chipper Stocks, you can trade fractional shares of global companies like Google, Visa, and Walmart starting with just $1."
                    color='purple'
                    url="/"
                />
                <CardImage title='investment' image='/invest2.png' />
            </div>
            
            {/* Football section */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-14 justify-between items-start mb-20'>
                <div className='flex gap-4 md:gap-6' >
                    <Image
                    src="/football4.png"
                    alt='football1'
                    width={80}
                    height={50}
                    className='rounded-full'
                    />
                    <Image
                    src="/football2.png"
                    alt='football2'
                    width={80}
                    height={50}
                    className='rounded-full'
                    />
                    <Image
                    src="/football3.png"
                    alt='football3'
                    width={80}
                    height={50}
                    className='rounded-full'
                    />
                </div>

                <div className=''>
                    <h2 className='text-lg md:text-2xl font-[600] mb-2'>Football Culture Across Africa</h2>
                    <Link href="/"><LinkSpan text='Take a photographic journey' variant='purple' /></Link>
                </div>
            </div>
    </section>
  )
}

export default Investment

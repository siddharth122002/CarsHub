"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

function Hero() {
    const handleScroll=()=>{

    }
    return (
    <div className="flex flex-col gap-8 pt-36 px-16">
        <h1 className="font-bold text-7xl">Find, book, or rent a car - quickly and easily!</h1>
        <p className="text-3xl">Streamline your car rental experience with our effortless booking process.</p>
        <CustomButton
            title="Explore Cars"
            styles="bg-blue-600 text-white rounded-full mt-4"
            handleClick={handleScroll}
        />
        <div className=' w-full flex justify-end items-end'>
            <div className='relative  w-[90%] h-[590px]'>
                <Image src="/hero.png"
                    alt='hero'
                    fill 
                    className='object-contain'
                />
                <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4  bg-repeat bg-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
                    <Image src="/hero-bg.png"
                        alt='hero'
                        fill 
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
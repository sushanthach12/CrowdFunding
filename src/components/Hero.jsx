"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'

const Hero = () => {

    const [text, count] = useTypewriter({
        words: ['Your home', 'आपका घर'],
        loop: true,
        delaySpeed: 2000,
        deleteSpeed: 100,
    })

    return (
        <motion.section
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-bgImage bg-cover h-[88vh] py-10 snap-center'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-20">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">
                            <span>{text}</span>
                            <Cursor cursorColor="#F7AB0A" />
                        </h1>
                        <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl py-2">for help</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 font-medium">A Little Care Can Change the World!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href={"/campaign"}><button className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 tracking-wide">Start a Fund</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
                </div>
            </div>

        </motion.section>

    )
}

export default Hero
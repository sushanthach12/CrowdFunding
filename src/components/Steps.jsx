"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variants } from '@/framer/variants'

const Steps = () => {

    const controlls = useAnimation();

    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            controlls.start("visible")
        }
        if (!inView) {
            controlls.set("hidden")
        }
    }, [inView])

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controlls}
            variants={variants}
            id='howitworks' className='my-8'>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    How It Works.
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start a Fundraiser in three simple steps</h1>
            </div>
            <div className='flex justify-center mx-auto px-24 py-14 w-full'>
                <div className='px-4 w-[9%]'>
                    <img src='/seperator.jpg' className='w-16' />
                </div>
                <ol className="relative text-gray-500 w-[50%]">
                    <li className="mb-20 ml-6">
                        <div className='flex flex-col px-4 py-2 w-[70%] gap-4'>
                            <h3 className="font-semibold leading-tight text-xl text-blue-700">Start your fundraiser</h3>
                            <p className="text-base">It&apos;ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
                        </div>
                    </li>
                    <li className="mb-16 ml-6">

                        <div className='flex flex-col px-4 py-2 w-[70%] gap-4'>
                            <h3 className="font-semibold leading-tight text-xl text-blue-700">Share your fundraiser</h3>
                            <p className="text-base">All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
                        </div>
                    </li>
                    <li className="mt-16 ml-6">
                        <div className='flex flex-col gap-4 px-4 py-2 w-[70%]'>
                            <h3 className="font-semibold leading-tight text-xl text-blue-700">Withdraw funds</h3>
                            <p className="text-base">The funds raised can be withdrawn without any hassle directly to your bank account.</p>
                        </div>
                    </li>
                </ol>

                <div className='w-fit h-full -ml-24' >
                    <img
                        src="./contact.png"
                        className="w-96 h-[100%] object-cover object-center"
                        alt="Sample image" />
                </div>
            </div>

        </motion.section>
    )
}

export default Steps
"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { variants } from '@/framer/variants';

const About = () => {

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
            id="about" className={`my-8`}>
            <div className="relative overflow-hidden py-24 sm:py-18">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        About Us.
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:pl-24">
                    <div className='flex justify-start'>
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">What is Crowdfunding?</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-700">In its simplest form, Crowdfunding is a practice of giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.</p>
                        </div>
                        <div className={`mx-auto max-w-sm px-4 lg:mx-6 rounded-md`}>
                            <img src='/about_side_image.jpg' className='rounded-xl'/>
                        </div>

                    </div>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-500 sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="#">Social <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Medical <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Educational <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Others <span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">PLATFORM FEE</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">0%</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">DONORS</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">300+</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">FUNDRAISERS</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">1L+</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-700">TRUSTFULL</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">99.9%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}

export default About
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdAccessTime } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'

const CampaignList = ({ title, image, percentComplete, description, currentAmount, goalAmount }) => {

    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mx-auto px-4 py-16 sm:px-6 sm:py-6'>
            <div className=" grid grid-cols-1 items-center shadow-lg rounded-lg lg:w-80 lg:h-fit border border-gray-100">
                <div className="group realtive flex flex-col justify-around">
                    <div className=" h-[11.6rem] w-full overflow-hidden bg-gray-200 group-hover:opacity-75  rounded-t-lg">
                        <img src={image} />
                    </div>

                    <div className='p-4'>
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-lg text-gray-700 font-bold">{title.length > 50 ? title.substring(0, 50) + `...` : title}</h2>
                                <dl className='mt-2 flex gap-x-2 justify-start items-center'>
                                    <dt className='text-gray-500 font-semibold'><BsPersonCircle size={18} /></dt>
                                    <dd className='text-sm text-gray-600 font-semibold'>By Anonymnous</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <div>
                                <p className="mt-1 text-sm text-gray-700">{description}</p>
                            </div>
                        </div>

                        <div className='mt-4'>
                            {/* <div className="flex-start flex h-1.5 w-full bg-blue-gray-50 rounded-md font-sans text-xs font-medium bg-gray-200">
                                <div className={`flex h-full items-baseline justify-center w-[${90}%] bg-indigo-500`}></div>
                            </div> */}
                            {/* <div className="h-1 w-full bg-neutral-200 rounded-md">
                                <div className={`h-1 bg-blue-500 w-[${1}%]`}></div>
                            </div> */}

                            {/* <div className="h-1 relative max-w-xl rounded-md overflow-hidden">
                                <div className="w-full h-1 bg-gray-200 absolute"></div>
                                <div className={`h-1 bg-blue-500 absolute w-[${percentComplete}%]`}></div>
                            </div> */}

                            <div className="h-1 mt-2 relative max-w-xl">
                                <div className="w-full h-1 bg-gray-200 absolute rounded-md"></div>
                                <progress className={`progress progress-primary bg-blue-500 w-[${percentComplete}%] h-1 absolute rounded-md`} value={"0"} max={"100"}></progress>
                            </div>

                            <dl className='flex justify-between mt-2'>
                                <dt className='text-blue-700 font-semibold'>₹ {currentAmount} raised</dt>
                                <dd className='text-gray-400 font-semibold'>₹ {goalAmount}</dd>
                            </dl>

                        </div>

                        <div className='mt-4'>

                            <dl className='flex justify-between'>
                                <dl className='flex justify-start gap-x-1'>

                                    <dt className='text-gray-400 font-semibold text-sm flex justify-center items-center gap-x-1' > <IoPeopleOutline size={19} color='gray' /> <span>Donors:</span></dt>
                                    <dd className='text-gray-600 font-semibold text-sm'>2000</dd>
                                </dl>
                                <dl className='flex justify-start gap-x-1'>
                                    <dt className='text-gray-400 font-semibold text-sm flex justify-center items-center gap-x-1'><MdAccessTime size={18} color='gray' /><span> Due:</span> </dt>
                                    <dd className='text-gray-600 font-semibold text-sm'>2 days</dd>
                                </dl>
                            </dl>

                        </div>


                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CampaignList

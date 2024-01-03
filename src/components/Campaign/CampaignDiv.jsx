"use client"
import React from 'react'
import { motion } from 'framer-motion'

const CampaignDiv = ({children}) => {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-12  lg:max-w-7xl">
                    <motion.h2
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-600 text-center">Campaigns</motion.h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CampaignDiv
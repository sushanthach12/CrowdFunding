import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
            <footer className="bg-gray-50 shadow drop-shadow-lg bottom-0">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center mb-4 sm:mb-0">
                            <a href={"#"}><h3 className='text-3xl text-center text-blue-700 font-courgette font-bold font-cursive'>donate.ly</h3></a>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6  font-semibold">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 font-semibold">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6  font-semibold">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline font-semibold">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span className="block text-sm text-gray-400 sm:text-center font-bold">© 2023 Donte.ly .  All Rights Reserved.</span>
                </div>
            </footer>
    )
}

export default Footer
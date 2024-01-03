"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Courgette } from 'next/font/google'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const courgette = Courgette({ subsets: ['latin', 'latin-ext'], weight: '400' })

const Navbar = () => {
  const { data: session } = useSession();

  const [showSideBarHam, setShowSideBarHam] = useState(false)
  const [showRaiseDrop, setshowRaiseDrop] = useState(false)
  const [showUserDrop, setshowUserDrop] = useState(false)

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-50 py-2`}>

      <div className="mx-auto max-w-screen px-2 sm:px-6 lg:px-8">
        <div className="relative w-inherit flex h-16 items-center justify-evenly ">

          {/* Hamburger */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" onClick={() => setShowSideBarHam(!showSideBarHam)}>

            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white " aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              {(!showSideBarHam) ? <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
                :
                <svg className="block h-4 w-6" viewBox="0 0 100 100" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="100" x2="100" y2="0" stroke-width="8" stroke="blue" />
                  <line x1="0" y1="0" x2="100" y2="100" stroke-width="8" stroke="blue" />
                </svg>
              }
            </button>
          </div>
          {/* Hamburger End */}


          {/* Lg Navbar */}
          <div className="flex items-center justify-center px-8">
            <Link href={"/"}><h3 className='text-3xl text-center text-blue-700 font-courgette font-bold font-cursive'>donate.ly</h3></Link>
          </div>


          <div className="hidden sm:flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                {/* <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a> */}
                <a href="#about" className="text-black hover:text-blue-400 rounded-md px-3 py-2 text-base font-semibold tracking-wide">About</a>

                <span className="reltive inline-block text-black  rounded-md px-3 py-2 text-base font-semibold tracking-wide ">
                  <span className='flex justify-center items-center gap-2 hover:cursor-pointer hover:text-blue-400' onClick={() => setshowRaiseDrop(!showRaiseDrop)}>Raise Funds For <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: showRaiseDrop ? 180 : 0 }}
                  ><BiChevronDown size={18} /></motion.span>
                  </span>

                  {showRaiseDrop &&
                    <motion.div
                      initial={{ y: "-10%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-10 mt-3 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div className="py-1" role="none">
                        <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-400 hover:cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">Individual</Link>
                        <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-400 hover:cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">Charity / Ngo</Link>
                        <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-400 hover:cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">Other cause</Link>

                      </div>
                    </motion.div>}
                </span>
                <a href="#howitworks" className="text-black hover:text-blue-400 rounded-md px-3 py-2 text-base font-semibold tracking-wide">How It Works</a>
                <a href="/campaign" className="text-black hover:text-blue-400 rounded-md px-3 py-2 text-base font-semibold tracking-wide">Campaigns</a>
                <a href="#" className="text-black hover:text-blue-400 rounded-md px-3 py-2 text-base font-semibold tracking-wide">Contact</a>
              </div>
            </div>
          </div>
          {/* Lg Navbar End */}

          <div className=" flex items-center sm:ml-6 sm:pr-0">

            {/* Notification Button */}
            <div className="flex flex-row text-gray-600 space-x-2 focus:outline-none border-r-2 pr-4 border-r-blue-400 hover:cursor-pointer">
              {/* <span className="sr-only">View notifications</span> */}
              <BiSearch size={25} />
              {/* <span className='text-black text-base font-semibold tracking-wide '>Search</span> */}
              {/* <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-none" placeholder="Enter Search..."/> */}
            </div>



            {/* Profile Droop Down */}

            {!session && <div className='flex justify-center items-center sm:ml-6 sm:pr-0'>
              <Link href={"/signin"}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded">Login</button></Link>
            </div>}

            {session && <div className="relative">

              <div className='flex gap-x-2 justify-center items-center ml-3 sm:pr-0 hover:cursor-pointer' onClick={() => setshowUserDrop(!showUserDrop)}>
                <img className="h-8 w-8 rounded-full" src={session?.user?.image} alt="" />
                <span className="text-sm text-gray-900 font-semibold">{session?.user?.name}</span>
              </div>


              {showUserDrop &&
                <motion.div
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className=" absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                  <span href="#" className="block px-4 py-2 text-sm text-gray-400 border-b-2" role="menuitem" tabIndex="-1" id="user-menu-item-0">{session?.user?.email}</span>
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer" role="menuitem" tabIndex="-1" id="user-menu-item-0" onClick={()=> setshowUserDrop(!showUserDrop)}>Dashboard</Link>
                  <span href="#" className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer" role="menuitem" tabIndex="-1" id="user-menu-item-1" onClick={()=> setshowUserDrop(!showUserDrop)}>Settings</span>
                  <span href="#" className="block px-4 py-2 text-sm text-red-500 hover:cursor-pointer" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={() => signOut({ redirect: true })}>Sign out</span>
                </motion.div>}
            </div>}

            {/* Profile Droop Down End */}

          </div>
        </div>
      </div>


      {/* Mobile Side bar */}

      <motion.div
        animate={showSideBarHam ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.4 }}

        className={`sm:hidden ${showSideBarHam ? '' : 'hidden'}`} id="mobile-menu">
        <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="text-black hover:text-white rounded-md px-3 py-2 text-base font-medium" >Dashboard</a>
          <a href="#" className="text-black  hover:text-blue-300 rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" className="text-black  hover:text-white rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" className="text-black  hover:text-white rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </motion.div>

    </motion.nav>

  )
}

export default Navbar
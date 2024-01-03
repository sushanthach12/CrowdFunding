"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

import { FcGoogle } from 'react-icons/fc'

const GoogleButton = () => {
    
    const handleGoogleLogin = async () => {
        const res = await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_HOST}` })
    }
    return (
        <form action={handleGoogleLogin}>
            <button type="submit" className="flex w-full justify-center rounded-md border-2 border-gray-50 bg-white px-3 py-2 text-sm font-semibold leading-6 text-black shadow-md shadow-gray-200 hover:bg-gray-50 items-center gap-2"> <FcGoogle size={20} /> Sign in with Google</button>
        </form>
    )
}

export default GoogleButton
"use client"
import Dashboard from '@/components/Dashboard/Dashboard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { data: session } = useSession()
    const router = useRouter()

    if (!session) {
        router.replace('/signin')
        return
    }
    return (
        <div>
            <Dashboard session={session}/>
        </div>
    )
}

export default page
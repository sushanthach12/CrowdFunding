
import { useSession } from "next-auth/react"

export const setSession = async(user) => {
    const {data: session, update} = useSession()

    const up = await update(user)
}
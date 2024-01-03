import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export const postUser = async (credentials) => {
    const router = useRouter()
    const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    const response = await res.json();
    console.log(response);
    if (response.Success) {
        router.push('/')
    }
}
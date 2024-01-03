import SignToken from "@/utils/SignInToken";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authoptions = {
    pages: {
        signIn: '/signin'
    },
    providers: [
        // CredentialsProvider({
        //     id: "credentials-login",
        //     async authorize(credentials, req) {
        //         const user = {
        //             "email": credentials?.email,
        //             "password": credentials?.password
        //         }
        //         const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/login`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-type': 'application/json'
        //             },
        //             body: JSON.stringify({ email: credentials?.email })
        //         })
        //         const response = await res.json();
        //         console.log(response.Success);

        //         if(user) {
        //             return user
        //         }else{
        //             return null
        //         }
        //     }
        // }),
        // CredentialsProvider({
        //     id: "credentials-signup",
        //     async authorize(credentials, req) {
        //         console.log(credentials)
        //         const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/signup`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-type': 'application/json'
        //             },
        //             body: JSON.stringify({ email: credentials?.email })
        //         })
        //         const userExists = await res.json()
        //         if (userExists.Success) {
        //             return null
        //         }
        //         const user = {
        //             "username": credentials?.username,
        //             "email": credentials?.email,
        //             "password": credentials?.password
        //         }
        //         if (user) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // }),
        GoogleProvider({
            id: "google",
            checks: 'both',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            },

            async authorize(credentials, req) {
                return true;
            }
        })
    ],

    secret: process.env.NEXT_PUBLIC_JWT_SECRET,

    callbacks: {
        async jwt({ token, user, account }) {
            if (account | user) {
                const TOKEN = await SignToken(user?.email);
                user.accessToken = TOKEN;
            }
            return {...token, ...user};
        },

        async session({ session, token, trigger, newSession }) {

            if (trigger === "update" && newSession?.user) {
                session.user = newSession.user
            }
            session.user = token;
            return session;
        }
    },

    events: {
        async signIn(message) {
            const res = await fetch(`http://localhost:5000/api/auth/googleLogin`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: message?.user.name,
                    email: message?.user?.email,
                    password: message?.user?.id,
                    image: message?.user?.image
                })
            });
            const response = await res.json()
            message.user.accessToken = response.AuthToken;
        }
    }
}

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST }
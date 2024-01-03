
import { NextResponse } from "next/server";
import { CryptoJS } from "cryptojs";
import User from "@/models/User";
import { serialize } from "cookie";


export async function POST(req) {

    try {
        
        const postBody = await req.json()

        let user = await User.findOne({ email: postBody.email });
        if (!user) {
            const hashedPassword = CryptoJS.AES.encrypt(postBody.password, process.env.AES_SEC).toString()

            user = await User.create({
                name: postBody.name,
                email: postBody.email,
                password: hashedPassword,
                image: postBody.image
            })

            const data = {
                user: {
                    id: user.id
                }
            }

            const authToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

            const serialized = serialize("auth", authToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });

            return NextResponse.json({ "Success": true, AuthToken: authToken, isAdmin: user.isAdmin, User: user }, {
                status: 200,
                headers: { 'Set-Cookie': serialized }
            });
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.AES_SEC);
        const password = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (password !== postBody.password) {
            return NextResponse.json({ error: "Please enter correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });
        const serialized = serialize("auth", authToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
        });

        return NextResponse.json({ "Success": true, AuthToken: authToken, isAdmin: user.isAdmin, User: user }, {
            status: 200,
            headers: { 'Set-Cookie': serialized }
        });

    } catch (err) {
        return NextResponse.json("Internal Server error")
    }
}


import connectDb from "@/libs/mongodb/connectDB";
import User from "@/models/User";
import { CryptoJS } from "cryptojs"
import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb"

const URI = process.env.MONGO_URI;

async function connectMongo() {

    try {
        const client = new MongoClient(URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
    } finally {
        return client
    }
}

export async function POST(request) {
    try {
        const client = await connectMongo()
        const postBody = await request.json();
        if (error) {
            return NextResponse.json({ Error: 'application Error' })
        }

        let user = await client.db('crowdfunding').collection('users').findOne({ email: postBody.email });
        console.log(postBody)
        console.log('Signup', postBody)
        if (user) {
            return NextResponse.json({ error: "Sorry a user with this email already exists" })
        }

        user = await client.db('crowdfunding').collection('users').create({
            name: postBody.username,
            email: postBody.email,
            password: CryptoJS.AES.encrypt(postBody.password, process.env.AES_SEC).toString()
        })

        console.log(user)
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = JWT.sign(data, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

        return NextResponse.json({ Success: true, AuthToken: authToken, User: user });

    } catch (error) {
        return NextResponse.json({ Error: 'Internal Server Error' })
    }
}
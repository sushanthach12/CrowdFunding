
import connectDb from "@/libs/mongodb/connectDB";
import User from "@/models/User";
import { CryptoJS } from "cryptojs"
import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb"

const URI = process.env.MONGO_URI;


const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectMongo() {

    try {
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
    } finally {
        await client.close();
    }
}


export async function POST(request) {
    try {
        await connectMongo()
        const postBody = await request.json();
        if (error) {
            return NextResponse.json({ Error: 'application Error' })
        }

        let user = await client.db('crowdfunding').collection('users').findOne({ email: postBody.email });
        if (!user) {
            return NextResponse.json({ Error: "Please Login with correct credentials" })
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.AES_SEC);
        const password = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (password !== postBody.password) {
            return NextResponse.json({ Error: "Please enter correct credentials" })
        }

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
import mongoose from "mongoose";
import { NextResponse } from "next/server";
mongoose.set('strictQuery', false);

const connectDb = async (req, res, next) => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected.')
        return NextResponse.next()
    }
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> {
        console.log('Connected')
    }).catch(error => {
        throw new Error(error)
    })
}


export default connectDb;



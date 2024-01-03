import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const postBody = await request.json();
    console.log(postBody);
    const cookieStore = cookies();

    cookies().set('userid', 'lee', { secure: true })
}

export async function GET(request) {
    const cookieStore = cookies()
    const userid = cookieStore.get('auth')

    return NextResponse.json({ UserId: userid })
}
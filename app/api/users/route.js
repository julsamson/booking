import { NextResponse } from "next/server";
import { db } from '@/lib/db'

export async function POST(req, res){
   try {
    const body = await req.json();
    const { username, password, email, room} = body;

    //check if the user exist

    const existingUser = await db.Owner.findUnique({
        where: { email: email}
    });

    if(existingUser) {
        return NextResponse.json({ user: null, message: "user with that email already exits"}, { status: 409 })
    }


    return NextResponse.json(body)
   } catch (error) {
    
   }
}
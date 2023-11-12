import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { Client } from "@vercel/postgres";

export async function connect() {
    try {

        const client = new Client({
            connectionString: process.env.POSTGRES_URL,
            // Other connection options if needed
        });

        await client.connect();

        console.log("Connected to PostgreSQL database");

        // You can return the connected client if you want to use it in other parts of your code
        return client;

    } catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
}
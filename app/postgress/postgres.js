import { Pool } from "pg";
import { client } from '@vercel/postgres'


const pool = new Pool ({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.POSTGRES_URL,
})

export async function connect() {
    try {
      const client = await pool.connect();
      console.log("Connected to PostgreSQL database");
  
      // You can return the connected client if you want to use it in other parts of your code
      return client;
    } catch (error) {
      console.log("Something went wrong");
      console.error(error);
      throw error; // Re-throw the error to be caught by the calling function
    }
  }
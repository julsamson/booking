import { Pool } from "pg";

const bcrypt = require('bcrypt');


const pool = new Pool ({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.POSTGRES_URL,
})

// export async function connect() {
//     try {
//       const client = await pool.connect();
//       console.log("Connected to PostgreSQL database");
  
//       // You can return the connected client if you want to use it in other parts of your code
//       return client;
//     } catch (error) {
//       console.log("Something went wrong");
//       console.error(error);
//       throw error; // Re-throw the error to be caught by the calling function
//     }
//   }



//function to register a new user

async function registerUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const query = {
    text: 'INSERT INTO users(username, password) VALUES($1, $2) RETURNING *',
    values: [username, hashedPassword],
  };

  const result = await pool.query(query);
  
  return result.rows[0];

}

//function to verify a user

async function loginUser(username, password) {
  const query = {
     text: 'SELECT * FROM users WHERE username = $1',
     values: [username],
  };
 
  const result = await pool.query(query);
 
  if (result.rows.length === 0) {
     throw new Error('User not found');
  }

  const user = result.rows[0];
 
  const isPasswordValid = await bcrypt.compare(password, user.password);
 
  if (!isPasswordValid) {
     throw new Error('Invalid password');
  }
 
  return user;
 }
 
 // function to retrieve a user by ID
 
 async function getUserById(id) {
  const query = {
     text: 'SELECT * FROM users WHERE id = $1',
     values: [id],
  };
 
  const result = await pool.query(query);
 
  if (result.rows.length === 0) {
     throw new Error('User not found');
  }
 
  return result.rows[0];
 }
 
 // function to update a user
 
 async function updateUser(id, username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
   
  const query = {
     text: 'UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *',
     values: [username, hashedPassword, id],
  };
 
  const result = await pool.query(query);
 
  if (result.rows.length === 0) {
     throw new Error('User not found');
  }
 
  return result.rows[0];
 }
 
 // function to delete a user
 
 async function deleteUser(id) {
  const query = {
     text: 'DELETE FROM users WHERE id = $1 RETURNING *',
     values: [id],
  };
 
  const result = await pool.query(query);
 
  if (result.rows.length === 0) {
     throw new Error('User not found');
  }
 
  return result.rows[0];
 }

module.exports = {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
};


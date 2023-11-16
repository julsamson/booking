"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Axios } from 'axios'



export default function LoginPage() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const onLogin = async () => {
  }

  return (

    <div>
      <form onSubmit={onLogin} className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
        <h1>Login</h1>
        <hr />
        <label htmlFor="email">Email:</label>
        <input
          className='p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
          type="email"
          id='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='Email'
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className='p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600 text-black'
          type="password"
          id='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='Password'
          required
        />

        <button type='submit' className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
          Login
        </button>
        <Link href="/signup">visit Signup page</Link>
      </form>
    </div>
  )
}

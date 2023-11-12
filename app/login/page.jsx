"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Axios } from 'axios'


export default function LoginPage() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const onSignup = async () => {

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">Username:</label>
      <input
        className='p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
        type="text"
        id='username'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder='UserName'
      />
      <label htmlFor="email">Email:</label>
      <input
        className='p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
        type="email"
        id='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='Email'
      />
      <label htmlFor="password">Password:</label>
      <input
        className='p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
        type="password"
        id='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='Password'
      />
      <label htmlFor="room">Room:</label>
      <input
        className='p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
        type="number"
        id='room'
        value={user.room}
        onChange={(e) => setUser({ ...user, room: e.target.value })}
        placeholder='Room'
      />

      <button onClick={onSignup} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
        Signup here
      </button>
      <Link href="/login">visit login page</Link>

    </div>
  )
}

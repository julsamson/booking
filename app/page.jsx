import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // <div className='flex justify-center items-center h-screen'>
    //   <div className='relative w-64 h-64'>
    //     {/* back card */}
    //     <div className='absolute w-full h-full bg-blue-500'>
    //       <div className='p-4 text-white'>
    //         <p>Back card id</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='flex justify-center items-center h-screen'>
      <div>
        <span className="relative flex h-64 w-64 justify-center items-center">
          <span className="animate-ping absolute inline-flex h-40 w-40 rounded-3xl bg-gray-400 opacity-100"></span>
          <span className="relative inline-flex rounded-md h-64 w-64 bg-sky-500 bg-[url('/image/julian.jpg')] bg-center bg-cover text-red-500 items-center justify-center">
            <span className='block space-y-10 '>
              <h2 className='p-2 rounded-lg cursor-pointer'>
                <Link href="/" className="animated-button1 rounded-lg">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Admin
                </Link>
              </h2>
              <h2 className='p-2 rounded-lg cursor-pointer'>
                <Link href="/" className="animated-button1 rounded-lg">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  client
                </Link>
              </h2>
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}

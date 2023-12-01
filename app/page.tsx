'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Loading from './components/Loading'

export default function Home() {

  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Loading/>
    );
  }

  if (!session) {
    redirect('/signin');
    return null; // Ensure to return null after redirect
  }
  
  return (
    <html lang="en">
      <body>
        <Header/>
        {/* remove navigation to test  vv*/}
        <Navigation/>
        <div className="flex flex-col items-center justify-center p-8 pt-20">
          <div className='text-white'>Email: {session?.user?.email}</div>
          <button className='bg-white text-black p-2 px-4 mt-5 rounded-full hover:bg-[#6b7ced]' onClick={() => signOut()}>Logout</button>
        
          <div className="w-screen bg-gray-200 p-12 flex flex-col sm:flex-row items-start justify-between">
            
            {/* turn them into buttons */}
            <div className="rounded-xl p-2 text-lg font-bold bg-blue-600 mb-2 sm:mb-0 sm:mr-4 sm:self-end">Explore</div>
            <div className="rounded-xl p-1 text-sm text-right bg-pink-300 sm:self-start">See more</div>
          </div>







      <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
        <div className="h-1 w-3/4 bg-white rounded-full"></div>
      </div>


      <div className="w-full h-72 p-6 bg-neutral-800 rounded-lg shadow-lg flex flex-row space-x-3">


        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" >
          <img src="" alt="" />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" >
          <img src="" alt="" />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" >
          <img src="" alt="" />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" >
          <img src="" alt="" />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" >
          <img src="" alt="" />
        </div>
      </div>


        
        
        
        
        </div>
      </body>
    </html>
  )
}

Home.requireAuth = true
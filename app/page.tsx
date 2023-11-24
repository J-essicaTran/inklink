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
  
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/signin');
  //   },
  // });

  return (
    <html lang="en">
      <body>
        <Header/>
        <Navigation/>
        <div className="flex flex-col items-center justify-center p-8 pt-20">
          {/* <div className='text-white'>Email: {session?.data?.user?.email }</div> */}
          <div className='text-white'>Email: {session?.user?.email }</div>
          <button className='bg-white text-black p-2 px-4 mt-5 rounded-full hover:bg-[#6b7ced]' onClick={() => signOut()}>Logout</button>
        </div>
      </body>
    </html>
  )
}

Home.requireAuth = true
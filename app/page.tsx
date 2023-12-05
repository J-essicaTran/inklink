'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
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
    <div>
      <Header/>
      <Navigation/> 
      <div className="flex flex-col items-center justify-center my-10 select-none">
        <div className='text-white'>
          Email: {session?.user?.email}
        </div>
        
        <div>
          <div className="w-full rounded-lg bg-neutral-800 p-12 flex flex-col sm:flex-row items-start justify-between">
            <button type="button" className="border-2 border-purple-500 rounded-full px-5 py-2 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
            <span>Explore</span>
            </button>
            <button type="button" className="border-2 border-purple-500 rounded-full px-3 py-1 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
            <span>See More</span>
            </button>          
          </div>

          <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
            <div className="h-1 w-full bg-white rounded-full"></div>
          </div>
          
          <div className="w-full bg-neutral-800 p-5 rounded-lg shadow-lg flex flex-col sm:flex-row sm:flex-wrap justify-between gap-5">
            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>     
          </div>
        </div>
        
        <div className="mt-5">
          <div className="w-full rounded-lg bg-neutral-800 p-12 flex flex-col sm:flex-row items-start justify-between">
            <button type="button" className="border-2 border-purple-500 rounded-full px-5 py-2 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
            <span>Your Journals</span>
            </button>
            <button type="button" className="border-2 border-purple-500 rounded-full px-3 py-1 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
            <span>See More</span>
            </button>          
          </div>

          <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
            <div className="h-1 w-full bg-white rounded-full"></div>
          </div>

          <div className="w-full bg-neutral-800 p-5 rounded-lg shadow-lg flex flex-col sm:flex-row sm:flex-wrap justify-between gap-5">
            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-purple-500">Title</h5>
                <p className="mb-3 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                    See more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.requireAuth = true
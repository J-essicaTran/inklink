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
      <div className="flex flex-col items-center justify-center my-10">
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
          
          <div className="w-full bg-neutral-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row sm:flex-wrap justify-between">
            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>

            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>

            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>

            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
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

          <div className="w-full bg-neutral-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row sm:flex-wrap justify-between">
            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>

            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>

            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>

            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
              <div className='absolute bottom-4 left-2 flex items-end'>
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:
                  </div>
                  <div className="self-start m-0 text-xs">Description:</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.requireAuth = true
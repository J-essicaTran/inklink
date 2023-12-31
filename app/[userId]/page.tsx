'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { firestoreDB } from '../firebase';
import { doc, getDoc, DocumentData } from "firebase/firestore"
import Header from '../components/Header'
import UserInfo from '../components/UserInfo'

function Profile({params} : {params:any}) {

    const [userInfo, setUserInfo] = useState<DocumentData | undefined>();
    
    useEffect(() => {
        console.log(params.userId.replace('%40', '@'));
        if(params) {
            getUserInfo(params.userId.replace('%40', '@'));
        }
    }, [params])

    const getUserInfo = async (email: string) => {
        const docRef = doc(firestoreDB, "users", email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserInfo(docSnap.data());
        }
        else {
            console.log("No such document!");
        }
    }

    return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex-col">
          <div className="flex flex-col w-full max-sm:h-full p-5">

            <div className="w-fit flex items-center mb-5 pl-5 pr-20 py-5 bg-neutral-800 rounded-lg">
              <div className="bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5">
                  <img className="w-12" src="/logo.png" alt="logo" />
              </div>
              
              <div>
                {userInfo?
                  <UserInfo userInfo={userInfo} />
                : null}
              </div>
            </div>

            <div className="w-full h-11 mb-1 rounded-lg border-2 border-purple-700 bg-purple-700 px-5 py-2 text-purple-100">
              <span>Your Journals</span>
            </div>         

            <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
              <div className="h-1 w-full bg-white rounded-full"></div>
            </div>

            <div className="w-full h-full bg-neutral-800 p-5 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between gap-5 overflow-y-auto">
              <div className="w-full sm:max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-purple-500">
                    Title
                  </h5>
                  <p className="mb-3 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  <div className="flex justify-between select-none">
                    <Link href="view-journal" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                      See more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold text-center border-2 border-red-500 rounded-lg px-3 py-2 text-red-500 hover:bg-red-700 hover:text-white">Delete Journal</a> */}
                  </div>
                </div>
              </div>

              <div className="w-full sm:max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-purple-500">
                    Title
                  </h5>
                  <p className="mb-3 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  <div className="flex justify-between select-none">
                    <Link href="view-journal" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                      See more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold text-center border-2 border-red-500 rounded-lg px-3 py-2 text-red-500 hover:bg-red-700 hover:text-white">Delete Journal</a> */}
                  </div>
                </div>
              </div>

              <div className="w-full sm:max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-purple-500">
                    Title
                  </h5>
                  <p className="mb-3 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  <div className="flex justify-between select-none">
                    <Link href="view-journal" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                      See more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold text-center border-2 border-red-500 rounded-lg px-3 py-2 text-red-500 hover:bg-red-700 hover:text-white">Delete Journal</a> */}
                  </div>
                </div>
              </div>

              <div className="w-full sm:max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-purple-500">
                    Title
                  </h5>
                  <p className="mb-3 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  <div className="flex justify-between select-none">
                    <Link href="view-journal" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                      See more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold text-center border-2 border-red-500 rounded-lg px-3 py-2 text-red-500 hover:bg-red-700 hover:text-white">Delete Journal</a> */}
                  </div>
                </div>
              </div>

              <div className="w-full sm:max-w-[18rem] rounded-lg shadow bg-neutral-700 border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                <div className="bg-neutral-800 h-48 rounded-t-lg"></div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-purple-500">
                    Title
                  </h5>
                  <p className="mb-3 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  <div className="flex justify-between select-none">
                    <Link href="view-journal" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                      See more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold text-center border-2 border-red-500 rounded-lg px-3 py-2 text-red-500 hover:bg-red-700 hover:text-white">Delete Journal</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
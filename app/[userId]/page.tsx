'use client'
import React, { useEffect, useState } from 'react'
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
        <div>
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

          <div className="w-full rounded-lg bg-neutral-800 p-12 flex flex-col sm:flex-row items-start justify-between">
            <button type="button" className="border-2 border-purple-500 rounded-full px-5 py-2 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
            <span>Your Journals</span>
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

export default Profile
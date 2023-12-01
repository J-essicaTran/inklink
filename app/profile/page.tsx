import Link from "next/link"

function Profile() {
  return (
    <div>
      
      <div className="p-1 pb-3 flex flex-row">
        <div className="self-center flex-grow">
          <button className="pl-1">
            <img src="./name.png" alt="InkLink" />
          </button>
        </div>

        {/* change to explorer page icon - make sure it takes us to the explorer page  */}
        <Link href="/" className="mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./profile_icon.png" alt="profile icon" />
        </Link>

        {/* should be sign out goes to main page for now */}
        <Link href="/" className="ml-2 mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./exit_icon.png" alt="exit icon" />
        </Link>

      </div>


      <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
            <div className="h-1 w-full bg-white rounded-full"></div>
      </div>



      <div className="w-screen bg-neutral p-12 flex items-center">

        <div className="rounded-full h-20 w-20 bg-white flex-shrink-0 mr-6">
          {/* idk how to add a picture here  */}
        </div>

        <div>
          <h2 className="text-xl font-bold text-purple-500">Username
            {/* i also don't know how to make sure that we get the person's actual usernameentered here */}
          </h2>
        </div>

      </div>



          <div className="w-full bg-neutral-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row sm:flex-wrap justify-between">
            
            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
             
              <div className='absolute bottom-4 left-2 flex items-end'>
                
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:</div>
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
                    Title:</div>
                  <div className="self-start m-0 text-xs">Description:</div>

                </div>
              </div>

            </div>            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
             
              <div className='absolute bottom-4 left-2 flex items-end'>
                
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:</div>
                  <div className="self-start m-0 text-xs">Description:</div>

                </div>
              </div>

            </div>            <div className="flex self-center w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md relative z-10 mb-4 sm:mb-0 sm:mr-4">
              <img src="" alt="" />
             
              <div className='absolute bottom-4 left-2 flex items-end'>
                
                <div className='flex flex-col'>
                  <div className="self-start m-0 text-sm">
                    {/* the 'Title' placeholder gets replaced with actual title  */}
                    Title:</div>
                  <div className="self-start m-0 text-xs">Description:</div>

                </div>
              </div>

            </div>

          </div>

    </div>
  )
}

export default Profile
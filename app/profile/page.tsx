
function Profile() {
  return (
    <div>
      <div className="p-1 pb-3 flex flex-row">
        <div className="self-center flex-grow">
          <button className="pl-1">
            <img src="./name.png" alt="InkLink" />
          </button>
        </div>

        <button type="button" className="mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./profile_icon.png" alt="profile icon" />
        </button>


        {/* change to explorer page icon - make sure it takes us to the explorer page  */}
        <button type="button" className="ml-2 mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./exit_icon.png" alt="exit icon" />
        </button>

      </div>


      <div className="h-2 w-full bg-pink-600 flex justify-center content-center rounded-full">
        <div className="h-1 w-full bg-white rounded-full"> </div>
      </div>



      <div className="w-screen bg-gray-200 p-12 flex items-center">

        <div className="rounded-full h-20 w-20 bg-white flex-shrink-0 mr-6">
          {/* idk how to add a picture here  */}
        </div>

        <div>
          <h2 className="text-xl font-bold">Username
            {/* i also don't know how to make sure that we get the person's actual usernameentered here */}
          </h2>
        </div>

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
  )
}

export default Profile
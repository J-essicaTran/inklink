'use client';
import Logo from './../components/Logo'

function ViewJournal() {
  return (
    <div className="h-screen w-screen p-2 m-0">
      <div className="p-1 pb-3 flex flex-row">
        <div className="self-center flex-grow">
          <Logo/>
        </div>

        <button type="button" className="mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./profile_icon.png" alt="profile icon" />
        </button>

        <button type="button" className="ml-2 mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./exit_icon.png" alt="exit icon" />
        </button>

      </div>

      <div className="h-2 w-full bg-pink-600 flex items-center rounded-full">
        <div className="h-1 w-full bg-white rounded-full"> </div>
      </div>

      <div className="pt-4 pb-4">
        <button type="button" className="border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
          <span>Journal Name</span>
        </button>
      </div>


      <div className="flex gap-5 w-full h-96 p-6 bg-neutral-800 rounded-lg shadow-lg">
        <div className="w-5/12 h-full">
          <div className="h-full bg-neutral-700 p-16 text-center rounded-lg border-2 border-gray-300 hover:border-pink-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
            <img src="" alt="" className=""/>
          </div>

        </div>
        <div className="w-full h-full">

          <div className="p-1 h-60 w-10/12 border rounded-md py-2 px-4 bg-transparent  border-gray-300 text-gray-100">
            <span>Placeholder...</span>
          </div>

          <div className="p-2 m-2 flex flex-row ">
            <span> Group Size: </span>
            <div className="ml-2 w-1/12 h-10 border rounded-md py-2 px-4 flex justify-center bg-transparent border-gray-300 text-gray-100">
              <span>5+</span>
            </div>
          </div>

        </div>
      </div>

      <div className=" pt-8 pb-4">
        <button type="button" className="border-2 border-purple-600 rounded-full px-3 py-2 text-purple-300 cursor-default hover:bg-purple-600 hover:text-purple-200">
          <span>Journal Media</span>
        </button>
      </div>

      {/* Photo Upload Boxes */}

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

export default ViewJournal
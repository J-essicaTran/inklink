import Header from "../components/Header";

function ViewJournal() {
  return (
    <div>
      <Header />
      <div className="h-screen p-2 m-0">
        <div className="pt-4 pb-1">
          <div className="border-2 border-purple-500 rounded-md px-3 py-2 cursor-default bg-purple-500 text-purple-100">
            Journal Name
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full h-full md:h-96 p-6 bg-neutral-800 rounded-lg shadow-lg">
          <div className="w-full md:w-1/3 h-full">
            <div className="h-full bg-neutral-700 p-16 text-center rounded-lg border-2 border-gray-300 hover:border-pink-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" className="" />
            </div>
          </div>

          <div className="w-full h-full">
            <div className="w-full h-60 md:w-10/12 md:h-60 border rounded-md py-2 px-4 bg-transparent  border-gray-300 text-gray-100">
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
          <button
            type="button"
            className="border-2 border-purple-600 rounded-full px-3 py-2 text-purple-300 cursor-default hover:bg-purple-600 hover:text-purple-200"
          >
            <span>Journal Media</span>
          </button>
        </div>

        {/* Photo Upload Boxes */}

        <div className="w-full h-full md:h-60 md:p-6 pt-8 bg-neutral-800 rounded-lg shadow-lg flex justify-center md:justify-normal overflow-y-auto md:overflow-x-auto">
          <div className="w-fit grid grid-cols-2 gap-8 md:gap-0 md:flex md:flex-row md:space-x-3">
            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg  border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewJournal;

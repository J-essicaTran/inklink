import Header from "../components/Header"

function CreateJournal() {
  return (
    <div>
      <Header />
      <div className="h-screen p-2 m-0">
        <div className="pt-4 pb-1">
          <div className="border-2 border-purple-500 rounded-md px-3 py-2 cursor-default bg-purple-500 text-purple-100">
            New Journal
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full h-full md:h-96 p-6 bg-neutral-800 rounded-lg shadow-lg">
          <div className="w-full md:w-1/3 h-full">
            <div className="h-full bg-neutral-700 p-16 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <span className="text-gray-200 text-2xl">Journal Image</span>
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span className="text-gray-200">Drag and drop your files here</span>
                <span className="text-gray-100 text-sm">(or click to select)</span>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className="p-1">
              <input
                type="text" className="w-96 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100 focus:outline-none focus:border-pink-500"
                placeholder="Journal Name"
              />
            </div>

            <div className="p-1">
              <textarea
                className="w-full h-60 md:w-10/12 md:h-60 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100 focus:outline-none focus:border-pink-500 resize-none"
                placeholder="Description"
              />
            </div>

            <div className="p-1">
              <span> Group Size: </span>
              <input
                type="text" className="w-1/12 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

        </div>

        <div className=" pt-8 pb-4">
          <button type="button" className="border-2 border-purple-600 rounded-full px-3 py-2 text-purple-300 cursor-default hover:bg-purple-600 hover:text-purple-200">
            Add Media
          </button>
        </div>

        {/* Photo Upload Boxes */}

        <div className= "w-full h-full md:h-60 md:p-6 pt-8 bg-neutral-800 rounded-lg shadow-lg flex justify-center md:justify-normal overflow-y-auto md:overflow-x-auto">
          <div className="w-fit grid grid-cols-2 gap-8 md:gap-0 md:flex md:flex-row md:space-x-3">
            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            <div className="w-60 h-60 md:w-96 md:h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
              <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                <svg className="m-16 md:m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input type="file" id="fileInput" className="hidden" multiple />
            </div>

            {/* Can add more or remove */}
          </div>
        </div>


        <div className="p-3 flex flex-row-reverse">
          <button type="button" className="ml-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
            Publish
          </button>
          <button type="button" className="ml-2 border-2 border-gray-600 rounded-full px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-gray-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateJournal
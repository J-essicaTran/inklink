'use client';
import { useState } from "react";

function CreateJournal() {
  const [thumbnail, setThumbnail] = useState('');
  const [journalName, setJournalName] = useState('');
  const [description, setDescription] = useState('');
  const [groupSize, setGroupSize] = useState('');

  return (
    <div className="h-screen w-screen p-2 m-0">
      {/* Header/Navbar??  are we putting nav on the top or right? top seems better I thinks*/}
      <div className="p-1 pb-3 flex flex-row ">
        <div className="self-center flex-grow">
          <button className="pl-1">
            <img src="./name.png" alt="InkLink" />
          </button>
        </div>

        <button type="button" className="mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./profile_icon.png" alt="profile icon" />
        </button>

        <button type="button" className="ml-2 mr-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          <img src="./exit_icon.png" alt="exit icon" /> 
        </button>

      </div>

      <div className="h-2 w-full bg-pink-600 flex justify-center content-center rounded-full">
        <div className="h-1 w-full bg-white rounded-full"> </div>
      </div>

      <div className="pt-4 pb-4">
        <button type="button" className="border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-default hover:bg-purple-500 hover:text-purple-200">
          New Journal
        </button>
      </div>


      <div className="flex gap-5 w-full h-96 p-6 bg-neutral-800 rounded-lg shadow-lg">
        <div className="w-5/12 h-full">
          <div className="h-full bg-neutral-700 p-16 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
            <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
              <span className="text-gray-200 text-2xl">Journal Image</span>
              <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <span className="text-gray-200">Drag and drop your files here</span>
              <span className="text-gray-100 text-sm">(or click to select)</span>
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

        </div>
        <div className="w-full h-full">
          <div className="p-1">
            <input
              type="text" className="w-96 border  rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100  focus:outline-none focus:border-pink-500"
              placeholder="Journal Name"
              onChange={(e) => setJournalName(e.target.value)}
            />
          </div>

          <div className="p-1">
            <textarea
              className="h-60 w-10/12 border rounded-md py-2 px-4 bg-transparent  border-gray-300 text-gray-100  focus:outline-none focus:border-pink-500"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="p-1">
            <span> Group Size: </span>
            <input
              type="text" className="w-1/12 border rounded-md py-2 px-4 bg-transparent border-gray-300 text-gray-100  focus:outline-none focus:border-pink-500"
              onChange={(e) => setGroupSize(e.target.value)}
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

      <div className="w-full h-56 p-6 bg-neutral-800 rounded-lg shadow-lg flex flex-row space-x-3">
        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
          <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
            <svg className="m-7 w-12 h-12  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
          <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
            <svg className="m-7 w-12 h-12  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
          <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
            <svg className="m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
          <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
            <svg className="m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>

        <div className="w-full h-full bg-neutral-700 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
          <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
            <svg className="m-7 w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </label>
          <input type="file" id="fileInput" className="hidden" multiple />
        </div>
      </div>


      <div className="p-3 flex flex-row-reverse">
        <button type="button" className="ml-2 border-2 border-gray-600 rounded-full px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-gray-200">
          Cancel
        </button>
        <button type="button" onClick={() => console.log(journalName, description, groupSize)} className="ml-2 border-2 border-purple-500 rounded-full px-3 py-2 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-purple-200">
          Publish
        </button>
      </div>
    </div>
  )
}

export default CreateJournal
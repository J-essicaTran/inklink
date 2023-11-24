import React from 'react'

function Loading() {
  return (
    <div className="flex h-screen min-h-full flex-1 flex-col items-center justify-center bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF]">
        <div className="w-full rounded-xl shadow dark:border dark:border-white dark:bg-[#222527] sm:max-w-md md:mt-0 xl:p-3">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-center justify-center">
                <h1 className="text-4xl font-thin text-white">INK</h1>
                <img className="-ml-2 w-[4.5rem]" src="./logo.png" alt="logo" />
                <h1 className="-ml-2 text-4xl font-thin text-white">LINK</h1>
              </div>
            </div>

            <div className="mt-10 text-white">
              <p className="text-lg">Loading...</p>
              <p className="text-sm mt-2">If you are having issues loading the app <span className=" font-semibold text-[#4D5ECF] underline">try clearing your cookies</span> and <span className="font-semibold text-[#4D5ECF] underline">refreshing the page.</span></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Loading
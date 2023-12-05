"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    redirect("/signin");
    return null; // Ensure to return null after redirect
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="h-full w-full flex flex-col items-center my-1">
        <div className="text-white">Email: {session?.user?.email}</div>

        <div className="flex flex-col w-full max-sm:h-full p-5">
          <div className="w-full h-11 mb-1 rounded-lg border-2 border-purple-700 bg-purple-700 px-5 py-2 text-purple-100">
            <span>Explore</span>
          </div>

          <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
            <div className="h-1 w-full bg-white rounded-full"></div>
          </div>

          <div className="w-full h-full md:h-72 md:p-2 pt-2 bg-neutral-800 rounded-lg shadow-lg flex justify-center md:justify-normal overflow-y-auto md:overflow-x-auto">
            <div className="w-fit grid grid-cols-2 gap-8 md:gap-0 md:flex md:flex-row ">
              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
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

        <div className="flex flex-col w-full max-sm:h-full p-5">
          <div className="w-full h-11 mb-1 rounded-lg border-2 border-purple-700 bg-purple-700 px-5 py-2 text-purple-100">
            <span>Your Journals</span>
          </div>

          <div className="h-2 w-full bg-pink-600 flex justify-center items-center rounded-full">
            <div className="h-1 w-full bg-white rounded-full"></div>
          </div>

          <div className="w-full h-full md:h-72 md:p-6 pt-8 bg-neutral-800 rounded-lg shadow-lg flex justify-center md:justify-normal overflow-y-auto md:overflow-x-auto">
            <div className="w-fit grid grid-cols-2 gap-8 md:gap-0 md:flex md:flex-row">
              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
                    <div className="self-start m-0 text-sm">
                      {/* the 'Title' placeholder gets replaced with actual title  */}
                      Title:
                    </div>
                    <div className="self-start m-0 text-xs">Description:</div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-neutral-700 p-8 rounded-lg border-2 border-gray-300 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md mb-4 sm:mb-0 sm:mr-4">
                <img src="" alt="" />
                <div className="absolute bottom-4 left-2 flex items-end">
                  <div className="flex flex-col">
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

        <Navigation />
      </div>
    </div>
  );
}

Home.requireAuth = true;

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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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

"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiSearch, HiOutlineUserCircle } from "react-icons/hi";
import { PiSignOutBold } from "react-icons/pi";
import { FiPlusCircle } from "react-icons/fi";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    redirect("/signin");
    return null; // Ensure to return null after redirect
  }
  return (
    <div className="p-5 flex flex-col md:flex-row justify-between md:items-center bg-[#222527]">
      <div className="hidden md:flex">
        <Link href="/">
          <div className="flex items-center justify-center">
            <h1 className="text-white text-4xl font-thin">INK</h1>
            <img
              className="-ml-1 w-14 cursor-pointer"
              src="/logo.png"
              alt="logo"
            />
            <h1 className="-ml-1 text-white text-4xl font-thin">LINK</h1>
          </div>
        </Link>
      </div>

      {/* Mobile view for logo and buttons */}
      <div className="pl-4 flex justify-between md:hidden">
        <div className="w-full">
          <Link href="/">
            <div className="pt-2 pb-5 items-center justify-center">
              <img
                className="-ml-1 w-14 cursor-pointer"
                src="/logo.png"
                alt="logo"
              />
            </div>
          </Link>
        </div>

        <div className="pt-4 w-full flex justify-end">
          <button
            onClick={() => signOut()}
            className="flex h-10 bg-[#BA6CEB] hover:bg-[#b051eb] py-1.5 px-4 rounded-full"
          >
            <PiSignOutBold className="text-[25px]" />
          </button>

          <Link href="/create-journal">
            <div className="flex items-center bg-white hover:bg-zinc-100 border-solid border-2 border-[#BA6CEB] text-[#BA6CEB] py-1.5 px-4 ml-5 rounded-full">
              <FiPlusCircle className="text-[25px]" />
            </div>
          </Link>

          <button
            onClick={() => router.push("/" + session?.user?.email)}
            className="flex h-10 bg-white hover:bg-zinc-100 border-solid border-2 border-[#BA6CEB] text-[#BA6CEB] py-1.5 px-4 ml-5 rounded-full"
          >
            <HiOutlineUserCircle className="text-[25px]" />
          </button>
        </div>
      </div>
      {/* End of Mobile View */}

      <div className="relative max-md:w-full text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white border-solid border-2 border-[#BA6CEB] h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full md:w-72 lg:w-96"
        />
        <button onClick={() => router.push('/search-user')} type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          <HiSearch className="text-[25px] text-gray-500" />
        </button>
      </div>

      <div className="hidden md:flex items-center">
        <button
          onClick={() => signOut()}
          className="flex bg-[#BA6CEB] hover:bg-[#b051eb] py-2 px-4 rounded-full"
        >
          <PiSignOutBold className="text-[25px]" />
          <p className="pl-1 font-semibold text-white">Sign Out</p>
        </button>

        <Link href="/create-journal">
          <div className="flex items-center bg-white hover:bg-zinc-100 border-solid border-2 border-[#BA6CEB] text-[#BA6CEB] py-1.5 px-4 ml-5 rounded-full">
            <FiPlusCircle className="text-[25px]" />
            <p className="pl-1 font-semibold">Create Journal</p>
          </div>
        </Link>

        <button
          onClick={() => router.push("/" + session?.user?.email)}
          className="flex items-center bg-white hover:bg-zinc-100 border-solid border-2 border-[#BA6CEB] text-[#BA6CEB] py-1.5 px-4 ml-5 rounded-full"
        >
          <HiOutlineUserCircle className=" text-[25px]" />
          <p className="pl-1 font-semibold">Profile</p>
        </button>
      </div>
    </div>
  );
}

export default Header;

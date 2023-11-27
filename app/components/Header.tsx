import React from 'react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { HiSearch, HiOutlineUserCircle } from "react-icons/hi";

function Header() {
  return (
    <div className='flex justify-between items-center p-5 bg-[#222527]'> 
      <Link href="/">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-4xl font-thin">INK</h1>
          <img className="-ml-1 w-14 cursor-pointer" src="/logo.png" alt="logo" />
          <h1 className="-ml-1 text-white text-4xl font-thin">LINK</h1>
        </div>
      </Link>

      <div className="relative text-gray-600">
        <input type="search" name="search" placeholder="Search" className="bg-white border-solid border-2 border-[#BA6CEB] h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full sm:w-64 md:w-72 lg:w-96"/>
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          <HiSearch className='text-[25px] text-gray-500'/>
        </button>
      </div>

      <div className="flex items-center">
        <button onClick={() => signOut()} className='bg-[#BA6CEB] hover:bg-[#b051eb] text-white font-semibold p-2 px-4 rounded-full'>Sign Out</button>
        <div className="flex items-center bg-white border-solid border-2 border-[#BA6CEB] text-[#BA6CEB] py-1.5 px-4 ml-5 rounded-full">
          <HiOutlineUserCircle className=" text-[25px]"/>
          <p className="pl-1 font-semibold">Account</p>
        </div>
      </div>
    </div>
  )
}

export default Header
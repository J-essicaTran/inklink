import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiSearch, HiBell, HiChat } from "react-icons/hi";

function Header() {
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        
        <Link href="/">
          <Image src='/logo.png' alt='logo'
          width={70} height={70}
          className='hover:bg-gray-200 p-2
          rounded-full cursor-pointer'/>
        </Link>

        <button className='bg-black text-white p-2 px-4 rounded-full'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>Create</button>

        <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-gray-500'/>
            <input type="text" placeholder='Search' className='bg-transparent outline-none'/>
        </div>

        <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
        
        <HiBell className='text-[40px] text-gray-500'/>
        <HiChat className='text-[40px] text-gray-500'/>
        <Image src='/pfp.jpg' alt='user-image'
        width={50} height={50}
        className='hover:bg-gray-200 p-2
        rounded-full cursor-pointer'/>
    </div>
  )
}

export default Header
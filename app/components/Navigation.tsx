import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <div className="flex justify-center gap-3 pt-5">
      <Link href="/" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">Home</Link>
      <Link href="/profile" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">Profile</Link>
      <Link href="/create-journal" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">Create Journal</Link>
      <Link href="/view-journal" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">View Journal</Link>
      <Link href="/view-journal-image" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">View Journal Image</Link>      
      <Link href="/search-user" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">Search User</Link>
      <Link href="/admin" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">Admin</Link>
      <Link href="/admin-view-user" className="bg-white text-black p-2 px-4 rounded-full hover:bg-[#6b7ced]">Admin View User</Link>
    </div>
  )
}

export default Navigation
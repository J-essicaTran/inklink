import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <div className="flex justify-center gap-3 pt-5">
      <Link href="/" className="bg-black text-white p-2 px-4 rounded-full">Home</Link>
      <Link href="/signup" className="bg-black text-white p-2 px-4 rounded-full">Signup</Link>
      <Link href="/signin" className="bg-black text-white p-2 px-4 rounded-full">Signin</Link>
      <Link href="/profile" className="bg-black text-white p-2 px-4 rounded-full">Profile</Link>
      <Link href="/create-journal" className="bg-black text-white p-2 px-4 rounded-full">Create Journal</Link>
      <Link href="/view-journal" className="bg-black text-white p-2 px-4 rounded-full">View Journal</Link>
      <Link href="/view-journal-image" className="bg-black text-white p-2 px-4 rounded-full">View Journal Image</Link>      
      <Link href="/search-user" className="bg-black text-white p-2 px-4 rounded-full">Search User</Link>
      <Link href="/admin" className="bg-black text-white p-2 px-4 rounded-full">Admin</Link>
    </div>
  )
}

export default Navigation
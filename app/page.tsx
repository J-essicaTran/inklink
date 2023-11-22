import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center gap-3 pt-5">
      <Link href="/" className="bg-black text-white p-2 px-4 rounded-full">Home</Link>
      <Link href="/register" className="bg-black text-white p-2 px-4 rounded-full">Register</Link>
      <Link href="/login" className="bg-black text-white p-2 px-4 rounded-full">Login</Link>
      <Link href="/profile" className="bg-black text-white p-2 px-4 rounded-full">Profile</Link>
      <Link href="/create-journal" className="bg-black text-white p-2 px-4 rounded-full">Create Journal</Link>
      <Link href="/view-journal" className="bg-black text-white p-2 px-4 rounded-full">View Journal</Link>
      <Link href="/view-journal-image" className="bg-black text-white p-2 px-4 rounded-full">View Journal Image</Link>      
      <Link href="/search-user" className="bg-black text-white p-2 px-4 rounded-full">Search User</Link>
      <Link href="/admin" className="bg-black text-white p-2 px-4 rounded-full">Admin</Link>
    </div>
  )
}

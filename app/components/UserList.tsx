'use client'
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestoreDB } from '../firebase';
import { FaUserPlus } from "react-icons/fa";

function UserList() {

    const [data, loading, error] = useCollection(collection(firestoreDB, 'users'));

    if(loading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return <p>Error: {error.message}</p>;
    }

  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.docs.map((doc) => (
            <div key={doc.id} className="flex flex-col mb-5 p-5 bg-neutral-800 rounded-lg border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                <div className="flex mb-10">
                    <div className="border-2 border-white bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5 flex-shrink-0">
                        <img className="w-12 h-12 object-cover" src="/logo.png" alt="logo" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold text-purple-500">{doc.data().username}</p>
                        <p>{doc.data().email}</p>
                    </div>
                </div>
                <button className="flex items-center ml-auto w-fit bg-[#BA6CEB] hover:bg-[#b051eb] py-1.5 px-8 rounded-full">
                    <FaUserPlus className="mr-2"/>
                    <p className="text-white font-semibold">Follow</p>
                </button>
            </div>
        ))}
    </div>
  )
}

export default UserList
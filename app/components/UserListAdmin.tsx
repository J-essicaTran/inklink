"use client";
import { useRouter } from "next/navigation";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestoreDB } from "../firebase";
import { GrView } from "react-icons/gr";

function UserListAdmin() {
  const [data, loading, error] = useCollection(
    collection(firestoreDB, "users")
  );
  const router = useRouter();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Ensure data is not undefined before processing
  if (!data) {
    return <p>No data available</p>;
  }

  // Sort the data.docs array alphabetically by the username property
  const sortedDocs = data.docs.slice().sort((a, b) => {
    const usernameA = a.data().username.toLowerCase();
    const usernameB = b.data().username.toLowerCase();
    return usernameA.localeCompare(usernameB);
  });

  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {sortedDocs.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col p-5 bg-neutral-800 rounded-lg border-2 border-white hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
        >
          <button onClick={() => router.push("/" + doc.data().email)}>
            <div className="flex mb-10">
              <div className="border-2 border-white bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF] rounded-full p-4 mr-5 flex-shrink-0">
                <img
                  className="w-12 h-12 object-cover"
                  src="/logo.png"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-3xl font-bold text-purple-500">
                  {doc.data().username}
                </p>
                <p>{doc.data().email}</p>
              </div>
            </div>
            <div className="flex items-center ml-auto w-fit bg-[#BA6CEB] hover:bg-[#b051eb] py-1.5 px-8 rounded-full cursor-pointer">
              <GrView className="mr-2" />
              <p className="text-white font-semibold">View</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserListAdmin;

'use client'
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, firestoreDB } from '../firebase';

function UserList() {

    const [data, loading, error] = useCollection(collection(firestoreDB, 'users'));

    if(loading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return <p>Error: {error.message}</p>;
    }

  return (
    <div>
        {data?.docs.map((doc) => (
            <div key={doc.id}>
                <h2>{doc.data().username}</h2>
                <p>Email: {doc.data().email}</p>
            </div>
        ))}
    </div>
  )
}

export default UserList
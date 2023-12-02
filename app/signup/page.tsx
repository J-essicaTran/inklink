'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth, db, firestoreDB } from '../firebase';
import Logo from './../components/Logo'
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // note: USERNAME WON'T SHOW UP IN AUTHENTICATION PAGE OF FIREBASE!
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const router = useRouter();

  const signup = () => {
    // The ".then" block  runs after successful creation of account
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User account created successfully
        const user = userCredential.user;
        const uid = user.uid;
        console.log('User UID:', uid);
        console.log('Username:', username);
        console.log('User Email:', email);
        console.log('User Password:', password);
        
        // Add the user to the REALTIME DATABASE
        // AddUserToDB(uid, email);

        // Add the user to the FIRESTORE DATABASE
        AddUserToFirestoreDB(uid, email, username);
    })
  };

// Called after successful user signup
// function AddUserToDB(uid: string, email: string) {
//   set(ref(db, 'users/' + uid), {
//     email: email,
//     profile_pic: null
//   });
// }

// Called after successful user signup
function AddUserToFirestoreDB(uid: string, email: string, username: string) {
  // Usage: setDoc(doc(DATABASE, COLLECTION_NAME, DOCUMENT_NAME))
  setDoc(doc(firestoreDB, 'users', uid), {
    email: email,
    username: username
  });
}

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center h-screen bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF]">
      <div className="w-full rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-3 bg-[#222527] border-white">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <div className="flex items-center justify-center">
              <h1 className="text-white text-4xl font-thin">INK</h1>
              <img className="-ml-2" src="./logo.png" alt="logo" width={75} height={75}/>
              <h1 className="text-white text-4xl -ml-2 font-thin">LINK</h1>
            </div> */}
            <Logo />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email Address"
                    className="block w-full rounded-xl border-0 bg-white/5 py-1.5 pl-4 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 placeholder-white/25"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                </div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                    className="block w-full rounded-xl border-0 bg-white/5 py-1.5 pl-4 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 placeholder-white/25"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className="block w-full rounded-xl border-0 bg-white/5 py-1.5 pl-4 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 placeholder-white/25"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                </div>
                <div className="mt-2">
                  <input
                    id="passwordAgain"
                    name="passwordAgain"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    required
                    placeholder="Confirm Password"
                    className="block w-full rounded-xl border-0 bg-white/5 py-1.5 pl-4 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 placeholder-white/25"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                  onClick={() => signup()}
                  className="disabled:opacity-40 flex w-full justify-center rounded-md bg-[#4D5ECF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6b7ced] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D5ECF]"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-400">
              Already a member?{' '}
              <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-[#4D5ECF] hover:text-[#6b7ced]">
                Sign In
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
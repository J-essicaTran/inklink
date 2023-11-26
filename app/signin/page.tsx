'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from './../components/Logo'

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <div className="flex min-h-full h-screen items-center justify-center bg-gradient-to-b from-[#BA6CEB] to-[#4D5ECF]">
      <div className="w-full rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-3 dark:bg-[#222527] dark:border-white">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <div className="flex items-center justify-center">
              <h1 className="text-white text-4xl font-thin">INK</h1>
              <img className="-ml-2" src="./logo.png" alt="logo" width={75} height={75}/>
              <h1 className="text-white text-4xl -ml-2 font-thin">LINK</h1>
            </div> */}
            <Logo/>
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
                    className="block w-full rounded-xl border-0 bg-white/5 py-1.5 pl-4 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 dark:placeholder-white/25"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  {/* <div className="text-sm">
                    <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
                      Forgot password?
                    </div>
                  </div> */}
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
                    className="block w-full rounded-xl border-0 bg-white/5 py-1.5 pl-4 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 dark:placeholder-white/25"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
                  disabled={!email || !password}
                  className="disabled:opacity-40 flex w-full justify-center rounded-md bg-[#4D5ECF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6b7ced] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D5ECF]"
                >
                  Sign In
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-400">
              Not a member?{' '}
              <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-[#4D5ECF] hover:text-[#6b7ced]">
                Sign Up
              </button>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Signin
import React from 'react'

function Logo() {
  return (
    <div className="flex items-center justify-center">
        <h1 className="text-white text-4xl font-thin">INK</h1>
        <img className="-ml-2 w-[4.5rem] cursor-pointer" src="/logo.png" alt="logo" />
        <h1 className="-ml-2 text-white text-4xl font-thin">LINK</h1>
    </div>
  )
}

export default Logo
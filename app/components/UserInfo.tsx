import React from 'react'

function UserInfo({userInfo} : {userInfo:any}) {
  return (
    <div>
        <p className="text-3xl font-bold text-purple-500">{userInfo.username}</p>
        <p>{userInfo.email}</p>
    </div>
  )
}

export default UserInfo
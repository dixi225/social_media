import React from 'react'
import Avatar from './Avatar'

const Follower = () => {
  return (
    <div className='flex space-x-10 my-5 items-center'>
        <Avatar/>
        <h2>Bruce</h2>
        <h1 className='font-bold text-cyan-600' >Unfollow</h1>
    </div>
  )
}

export default Follower
import React from 'react'
import Follower from './Follower'

const Followers = () => {
  return (
    <div>
        <h1 className='ml-3 text-sm font-semibold'>You are following</h1>
        <Follower/>
        <Follower/>
        <Follower/>
        <Follower/>
    </div>
  )
}

export default Followers
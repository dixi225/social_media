import React from 'react'
import Postcontainer from './Postcontainer'
import Followers from './Followers'
import Tofollow from './Tofollow'

const Feed = () => {
  return (
    <div className='flex container'>
      <div>
        <Postcontainer/>
      </div>
      <div className=' h-fit overscroll-y-none' >
        <Followers/>
        <Tofollow/>
      </div>
    </div>
  )
}

export default Feed
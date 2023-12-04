import React from 'react'
import { AVATAR_URL } from '../constants/constants'

const Avatar = () => {
  return (
    <div className='w-10 hover:cursor-pointer'>
    <img src={AVATAR_URL}/>   
    </div>
  )
}

export default Avatar
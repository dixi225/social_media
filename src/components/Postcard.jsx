import React from 'react'
import { AVATAR_URL, DUMMY_POSTIMAGE_URL } from '../constants/constants'
import likesrc from '../../assets/like.png'

const Postcard = () => {
  return <>
    <div className=' flex flex-col'>
    <div className="flex space-x-3 items-center my-3">
        <img className='w-10 h-max' src={AVATAR_URL} alt="" />
        <h2>Harsh Dixit</h2>
    </div>
    <div className=' w-1/2'>
        <img  src={DUMMY_POSTIMAGE_URL} alt="" />
    </div>
    <div className='flex m-4 items-center space-x-2'>
        <div className=' font-semibold'>4</div>
        <img className='w-6' src={likesrc} alt="" />
    </div>
    <div>
        <h1 className=' ml-3 font-medium text-xs'>One Shall Stand , One Shall Fall!!!!</h1>
    </div>
  </div>
  </>
  

}

export default Postcard
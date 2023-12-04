import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex container justify-between items-center my-2'>
        <div className='p-5'>
            <Link to='/'><h1 className=' font-bold'>Social media</h1></Link>
        </div>
        <div className='p-6'>
         <Link to='/profile/123'>
         <Avatar/>
          </Link>     
        </div>
    </div>
  )
}

export default Navbar
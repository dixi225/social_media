import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Signup.scss"
import axiosClient from '../../utils/axiosClient'

const Signup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const result=await axiosClient.post('/auth/signup',{
        name,
        email,
        password
      })
      console.log(result);
    }
     catch (error) {
      console.log(error);
    }
  }
   return <>
    <div className="Signup">
      <h1 className='heading'>Sign up</h1> 
      <div className="Signup-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className='name' id='name' >Name</label>
          <input type="text" onChange={e=>setName(e.target.value)}/>
          <label htmlFor="email" className='email' id='email' >Email</label>
          <input type="email" onChange={e=>setEmail(e.target.value)}/>
          <label htmlFor="password" className='password' id='password' >Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)} />   
          <input className='submit' type="submit" />   
        </form>
        <p className='loginLink'>Already have an account? <Link to={'/login'}>Log in</Link></p>
      </div>
  
    </div>
      
    </>
}

export default Signup
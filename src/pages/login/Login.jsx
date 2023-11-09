import React, { useState } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import axiosClient from '../../utils/axiosClient'
import { setItem } from '../../utils/localStorageManager'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const result=await axiosClient.post('/auth/login',{
        email,
        password
      })
      setItem('accessToken',result.accessToken)
    }
     catch (error) {
      console.log(error);
    }
  }
  return <>
  <div className="Login">
    <h1 className='heading'>Login</h1> 
    <div className="Login-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='email' id='email'>Email</label>
        <input type="email" onChange={e=>setEmail(e.target.value)} />
        <label htmlFor="password" className='password' id='password'>Password</label>
        <input type="password" onChange={e=>setPassword(e.target.value)} />   
        <input className='submit' type="submit" />   
      </form>
      <p className='signupLink'>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
    </div>
  </div>
    
  </>
  
}

export default Login
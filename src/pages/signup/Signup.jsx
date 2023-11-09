import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.scss"

const Signup = () => {
   return <>
    <div className="Signup">
      <h1 className='heading'>Sign up</h1> 
      <div className="Signup-box">
        <form>
          <label htmlFor="name" className='name' id='name'>Name</label>
          <input type="text" />
          <label htmlFor="email" className='email' id='email'>Email</label>
          <input type="email" />
          <label htmlFor="password" className='password' id='password'>Password</label>
          <input type="password" />   
          <input className='submit' type="submit" />   
        </form>
        <p className='loginLink'>Already have an account? <Link to={'/login'}>Log in</Link></p>
      </div>
  
    </div>
      
    </>
}

export default Signup
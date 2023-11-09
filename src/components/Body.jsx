import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../pages/login/login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/home',
      element:<Home/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
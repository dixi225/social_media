import React, { useEffect } from 'react'
import axiosClient from '../../utils/axiosClient'

const Home = () => {
  useEffect(()=>{
      fetchData()
  },[])
  const  fetchData=async()=>{
    const data=axiosClient.get('/posts/all')
    console.log(data);
  }
  return (

    <div>
      Home
    </div>
  )
}

export default Home
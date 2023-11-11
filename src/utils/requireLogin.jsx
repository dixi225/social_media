import React from 'react'
import { getItem } from './localStorageManager'

const requireLogin = () => {
    const user=getItem('accessToken')
  return (user)
}

export default requireLogin
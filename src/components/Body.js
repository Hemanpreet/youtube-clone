import React from 'react'
import SideComponent from './SideComponent'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='flex'>
        <SideComponent/>
        <Outlet/>
    </div>
  )
}

export default Body
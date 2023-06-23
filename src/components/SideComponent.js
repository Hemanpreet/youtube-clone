import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const SideComponent = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;//called early return
  return (
    <div className="p-5 shadow-lg w-48">
        <ul className="font-bold">
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <div className='font-bold pt-5'>Subsciptions</div>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <div className='font-bold pt-5'>Watch Later</div>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default SideComponent
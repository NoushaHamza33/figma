import React from 'react'
import { NavLink} from 'react-router-dom'
import path from '../../Router/Path'
import { Icon } from '@iconify/react';


function Header() {
  return (
    <div>
        <div className='flex flex-row justify-between m-5 items-center '>
        <div>
            <img src="Img/Logo.png" alt="" />
        </div>
        <div className='flex flex-row space-x-4'>
        <nav className='flex gap-x-4 text-sm justify-center items-center '>
            <NavLink to={path.home}>Home</NavLink>
            <NavLink to={path.features}>Features</NavLink>
            <NavLink to={path.community}>Community</NavLink>
            <NavLink to={path.blog}>Blog</NavLink>
            <NavLink to={path.pricing}>Pricing</NavLink>
            
          </nav>
          <div>
          <button type="button" className='flex flex-row items-center space-x-2 px-7 py-3 border-2 bg-green-600 text-white'><span>Register Now</span> <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem"/></button>
         
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Header
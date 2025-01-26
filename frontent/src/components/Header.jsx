import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
       <div className='d-flex justify-content-between align-items-center px-5 py-3 bg-white' >
         <img src="/assets/site-logo.png" alt="GOQii Logo" style={{width:'100px'}} />
         <ul className='d-flex m-0'>
        <NavLink to='/'>
            <li className='mx-3'>Home</li>
        </NavLink>
        <NavLink to='/AddUser'>
            <li className='mx-3'>Add User</li>
        </NavLink>
        <NavLink to={'/Users'}>
            <li className='mx-3'> Users</li>
        </NavLink>
         </ul>
        </div>
        <hr className='m-0' />
    </>
  )
}

export default Header
import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='m-[45px]'>
        <ul className='list-style-none flex flex-row  text-[20px]'>
          <div className='ml-[50px]'> <li>Walmart Restocking Management</li></div>
          <div className='ml-[60%] flex flex-row gap-4'>
            <li><Link to="./">Home</Link></li>
            <li><Link to="./Login">Login</Link></li>
            <li><Link to="./Register">Register</Link></li>  
          </div>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
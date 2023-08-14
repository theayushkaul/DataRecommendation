import React, { useState } from 'react';
import dropdown from '../Assets/image.png';
import collapse from '../Assets/icons8-collapse-arrow-100.png'
import Bell from "../Assets/bell.svg"
import { Link } from 'react-router-dom';
export default function Navbar({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 px-5 lg:px-20 poppins w-full bg-slate-100">
        <Link to="/">Home</Link>
        {user ?
          <>
            <div className='flex items-center'>
              <div className='mr-2 cursor-pointer'><img src={Bell} alt="" /></div>
              <div className='flex items-center rounded py-1 px-4 border-0 border-solid lg:border border-gray-800'>
                <img src="https://source.unsplash.com/random/?sky" alt="" className='w-8 h-8 rounded-full lg:rounded' />
                <div className='mx-2 hidden lg:block '>
                  <div className='text-xs'>Welcome back,</div>
                  <div className='font-semibold' style={{ color: "#1A1558" }}>Ayush Kaul</div>
                </div>
                <img src={!sidebarOpen ? dropdown : collapse} alt="" className='h-4 w-4 ml-3 cursor-pointer' onClick={toggleSidebar} />
              </div>
            </div>
          </> : <div className='flex items-center gap-4'>
            <div className='py-4'><Link to="/login">Login</Link></div>
            <div className='py-4'><Link to="/register">Register</Link></div>
          </div>
        }
        <div className={sidebarOpen ? 'w-4/5 lg:w-1/5 top-0 flex justify-center fixed py-10 bg-slate-100 left-0 shadow-2xl h-screen' : 'hidden'}>
              <div className="flex items-center flex-col gap-5">
                <div className='rounded py-3 px-4 text-2xl outfit' style={{ border: "solid 1px gray" }}>Dashboard</div>
                <div className='poppins text-xl cursor-pointer mt-8' style={{ color: "#1A1558" }}><Link to="/profile">My Profile</Link></div>
                <div className='poppins text-xl cursor-pointer mb-10' style={{ color: "#1A1558" }}><Link to="/connections">My Connections</Link></div>
                <div className='outfit cursor-pointer'>Log Out</div>
              </div>
            </div>
      </div>
    </>
  )
}

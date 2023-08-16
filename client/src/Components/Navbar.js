import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../Context/context";
import profileIcon from '../Assets/image.png';
import collapseIcon from '../Assets/icons8-collapse-arrow-100.png';

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 px-5 lg:px-20 atiFont w-full bg-[#EAF2D7]">
        <Link to="/">Walmart Restocking</Link>
        {user ? (
          <div className='flex items-center'>
            <div className='flex items-center rounded py-1 px-4 border-0 border-solid lg:border border-gray-800'>
              <img src="https://source.unsplash.com/random/?sky" alt="" className='w-8 h-8 rounded-full lg:rounded' />
              <div className='mx-2 hidden lg:block '>
                <div className='text-xs'>Welcome back,</div>
                <div className='font-semibold' style={{ color: "#1A1558" }}>{user.name}</div>
              </div>
              <img src={!sidebarOpen ? profileIcon : collapseIcon} alt="" className='h-4 w-4 ml-3 cursor-pointer' onClick={toggleSidebar} />
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-4'>
            <div className='py-4'><Link to="/login">Login</Link></div>
            <div className='py-4'><Link to="/register">Register</Link></div>
          </div>
        )}
        {sidebarOpen && (
          <div className="absolute z-10 top-20 right-20 bg-[#E0ECC4] shadow-xl rounded-lg">
            <div className='py-4 px-4 w-48 flex flex-col gap-5 items-start'>
              <div className="poppins cursor-pointer">
                <Link to="/profile" onClick={toggleSidebar}>Edit Profile</Link>
              </div>
              <div className="poppins cursor-pointer">
                <Link to="/uploadExcel" onClick={toggleSidebar}>Upload</Link>
              </div>
              <div className="poppins cursor-pointer">
                <Link to="/uploadExcel">Upload Data</Link>
              </div>
              <button className="outfit bg-red-400 text-white rounded-lg px-4 hover:bg-red-600 w-full" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


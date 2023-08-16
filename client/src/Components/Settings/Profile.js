import EditEmail from './EditEmail'
import EditName from './EditName'
import EditPassword from './EditPassword'
import React, { useContext } from 'react';
import { Context } from "../../Context/context";
export default function Profile() {
  const {user} = useContext(Context)
  return (
    <div className='w-full pt-8'>
      <div className='w-4/5 bg-[#EAF2D7] text-[#153f14] h-60 p-6 rounded-xl mx-auto text-2xl goblin' style={{ zIndex: "-1" }}>My Profile</div>
      <div className='bg-white p-8 w-9/12 rounded-xl mx-auto shadow-xl mb-10 outfit' style={{ marginTop: "-150px" }}>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className="flex justify-between items-center mb-8" style={{flex:"2"}}>
            <img src="https://source.unsplash.com/random/?sky" alt="" className='w-16 h-16 sm:w-28 sm:h-28 rounded-full' />
          </div>
          <div className='rounded-md py-6 px-4 shadow-md' style={{ border: "1px solid gray",flex:"8" }}>
            <div>
              <div className='text-gray-600 text-sm'>Your Name</div>
              <div className="flex justify-between">
                <div>{user.name}</div>
                <EditName />
              </div>
            </div>
            <div className='mt-6'>
              <div className='text-gray-600 text-sm'>Email</div>
              <div className="flex justify-between">
                <div>{user.email}</div>
                <EditEmail />
              </div>
            </div>
            <div className='mt-6'>
              <div className='text-gray-600 text-sm'>Password</div>
              <div className="flex justify-between">
                <div>******</div>
                <EditPassword />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

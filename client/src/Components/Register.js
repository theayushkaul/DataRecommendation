import React from 'react'
import Navbar from './Navbar';

const Register = () => {

    return (
        <div className='bg-[#a9ca96] h-[100vh]'>
            <Navbar></Navbar>
            <div className="flex justify-center bg-[#a9ca96] items-center outfit">
                <div className="bg-white w-10/12 md:w-2/5 p-6 rounded-xl">
                    <span className="text-4xl">Register</span>
                    <form className="flex flex-col mt-6">
                        <label>Name</label>
                        <input className="focus:outline-none" type="text" placeholder="Enter your name..." />
                        <label className="mt-6">Email</label>
                        <input className="focus:outline-none" type="text" placeholder="Enter your email..." />
                        <label className="mt-6">Phone No.</label>
                        <input className="focus:outline-none" type="text" placeholder="Enter your phone number..." />
                        <label className="mt-6">Password</label>
                        <input className="focus:outline-none" type="password" placeholder="Enter a strong password..." />
                        <button className="bg-gray-400 rounded-full mx-auto px-5 py-1 mt-6" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Register
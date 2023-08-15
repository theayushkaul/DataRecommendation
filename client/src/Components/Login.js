import React, { useState } from 'react'
import Navbar from './Navbar';

const Login = () => {
    {
        const [navbar, setnavbar] = useState('true')
        const SubmitHandle = () => {
            setnavbar(false);
        }

        return (
            <div className='bg-[#a9ca96] h-[100vh]'> <Navbar navbar={navbar} />
                <div className="flex mt-[10%] justify-center align-center  outfit">
                    <div className="bg-white w-10/12 md:w-2/5 p-6  rounded-xl">
                        <span className="text-4xl">Login</span>
                        <form className="flex flex-col mt-6">
                            <label>Email</label>
                            <input className="focus:outline-none" type="text" placeholder="Enter your email..." />
                            <label className="mt-6">Password</label>
                            <input className="focus:outline-none" type="password" placeholder="Enter your password..." />
                            <button className="bg-gray-400 rounded-full mx-auto px-5 py-1 mt-6" type="submit" onSubmit={SubmitHandle}>Login</button>
                        </form>
                    </div>
                </div>
            </div>);
    }
}

export default Login
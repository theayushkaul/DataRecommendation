<<<<<<< HEAD
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
=======
import React, { useContext, useRef,useState } from 'react'
import { Context } from "../Context/context";
import axios from "axios";
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            setError(true);
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
            <div className="flex justify-center outfit bg-[#E0ECC4] h-[87vh] items-center">
                <div className="bg-white w-10/12 md:w-2/5 p-6 rounded-xl">
                    <span className="text-4xl">Login</span>
                    <form className="flex flex-col mt-6"  onSubmit={(e) => { handleSubmit(e) }}>
                        <label>Email</label>
                        <input className="focus:outline-none" type="text" placeholder="Enter your email..." ref={emailRef} />
                        <label className="mt-6">Password</label>
                        <input className="focus:outline-none" type="password" placeholder="Enter your password..." ref={passwordRef} />
                        <button className="bg-gray-400 rounded-full mx-auto px-5 py-1 mt-6" type="submit" disabled={isFetching}>Login</button>
                        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
                    </form>
                </div>
            </div>
)
>>>>>>> 4d0b9a692084253cb6b75fc986ee705f1f488e87
}

export default Login
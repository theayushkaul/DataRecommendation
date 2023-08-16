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
}

export default Login
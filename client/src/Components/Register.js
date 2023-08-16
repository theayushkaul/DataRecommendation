import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/auth/register", {
            name,
            email,
            password
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
      };
    return (
            <div className="flex justify-center bg-[#E0ECC4] h-[87vh] items-center outfit">
                <div className="bg-white w-10/12 md:w-2/5 p-6 rounded-xl">
                    <span className="text-4xl">Register</span>
                    <form className="flex flex-col mt-6" onSubmit={(e)=>{handleSubmit(e)}}>
                        <label>Name</label>
                        <input className="focus:outline-none" type="text" placeholder="Enter your name..." onChange={e=>setName(e.target.value)} />
                        <label className="mt-6">Email</label>
                        <input className="focus:outline-none" type="text" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
                        <label className="mt-6">Password</label>
                        <input className="focus:outline-none" type="password" placeholder="Enter a strong password..." onChange={e=>setPassword(e.target.value)}/>
                        <button className="bg-gray-400 rounded-full mx-auto px-5 py-1 mt-6" type="submit">Register</button>
                        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
                    </form>
                </div>
            </div>
    );

}

export default Register
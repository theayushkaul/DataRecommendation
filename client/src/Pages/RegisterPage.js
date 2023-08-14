export default function Register() {
    return (
      <div className="flex bg-slate-200 justify-center items-center h-screen outfit">
        <div className="bg-white w-10/12 md:w-2/5 p-6 rounded-xl">
        <span className="text-4xl">Register</span>
        <form className="flex flex-col mt-6">
        <label>Name</label>
          <input className="focus:outline-none" type="text" placeholder="Enter your name..."/>
          <label className="mt-6">Email</label>
          <input className="focus:outline-none" type="text" placeholder="Enter your email..."/>
          <label className="mt-6">Phone No.</label>
          <input className="focus:outline-none" type="text" placeholder="Enter your phone number..."/>
          <label className="mt-6">Password</label>
          <input className="focus:outline-none" type="password" placeholder="Enter a strong password..."/>
          <button className="bg-gray-400 rounded-full mx-auto px-5 py-1 mt-6" type="submit">Register</button>
        </form>
        </div>
      </div>
    );
  }
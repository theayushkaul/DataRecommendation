export default function Login() {
    return (
      <div className="flex bg-slate-200 justify-center items-center h-screen outfit">
        <div className="bg-white w-10/12 md:w-2/5 p-6 rounded-xl">
        <span className="text-4xl">Login</span>
        <form className="flex flex-col mt-6">
          <label>Email</label>
          <input className="focus:outline-none" type="text" placeholder="Enter your email..."/>
          <label className="mt-6">Password</label>
          <input className="focus:outline-none" type="password" placeholder="Enter your password..."/>
          <button className="bg-gray-400 rounded-full mx-auto px-5 py-1 mt-6" type="submit">Login</button>
        </form>
        </div>
      </div>
    );
  }
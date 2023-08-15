import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
// import Upload from './Upload'
import stock from '../Assets/stock.jpeg'
import stock2 from '../Assets/stock2.jpeg'
import visualize from '../Assets/visualize.jpeg'
import predict from '../Assets/predict.webp'
import manage from '../Assets/manage.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=" w-full h-auto py-10 bg-[#a9ca96]">
      <Navbar />
      <div className=" ml-[25%] flex text-[100px] justify-center align-center w-[55vw] h-[140px] border-[2px] border-solid border-black rounded-[50px] ">
        <div className='justify-center items-center'>WALMART</div>
      </div>
      <div className='flex flex-row ml-[25%] mt-2'>
        <div className='w-[30vw] h-[35vh] border-[2px] bg-black text-white border-solid border-black m-3 rounded-l-[30px] rounded-b-[30px]'>
          <div className='px-10 pt-[28%]'>Welcome to the sleek and savvy data managemenet platform
            for walmart restocking! Dive into our data visualization world and revolutionize your restoking experience
          </div>
        </div>
        <img src={stock} className='w-[22vw] h-[35vh] border-[2px] border-solid border-black m-3 rounded-tr-[80px] rounded-bl-[80px]' alt="" />
      </div>
      <div className='flex flex-row ml-[25%] mt-2'>
        <img src={stock2} className='w-[22vw] h-[22vh] border-[2px] border-solid border-black m-3 rounded-tl-[200px] rounded-r-[80px]' alt="" />
        <div className='w-[30vw] h-[22vh] border-[2px] bg-black text-white border-solid border-black m-3 rounded-[80px]'>
          <div className='px-10 pt-[28%]'>
          </div>
        </div>
      </div>
      <div className='flex flex-row ml-[25%] mt-[80px]'>
        <div className='font-bold text-[35px] ml-8 w-[25vw]'>GET STARTED <br />
          WITH<br />
          CONFIDENCE</div>
        <div className='w-[30vw] p-4 mt-3 '>
          Don't Know where to begin? Fear not, for our
          innovative restocking management platform will
          provide you with an effortless user experience. Login
          or register now to start making informed decisions
          with ease
        </div>
      </div>
      <div className='flex flex-col mx-[25%] mt-[80px] w-[55vw] h-[50vh] bg-[#86c95e] rounded-[20px]'>
        <div className='flex flex-col p-4'>
          <span className='text-[28px] font-medium'>Visualize</span>
          <span className='text-[12px]'>Unlock critical insights with data</span>
        </div>
        <div className='pl-5'>
          <img src={visualize} className='w-[800px] h-[200px] rounded-[10px]' alt="" />
        </div>
      </div>
      <div className='flex flex-row mx-[25%] w-[55vw]'>
        <div className='flex flex-col  mt-[50px] w-[28vw] h-[50vh] bg-[#86c95e] rounded-[20px]'>
          <div className='flex flex-col p-4'>
            <span className='text-[28px] font-medium'>Manage</span>
            <span className='text-[12px]'>Take control of Restolking</span>
          </div>
          <div className='px-4'>
            <img src={manage} className='w-[380px] h-[220px] rounded-[10px]' alt="" />
          </div>
        </div>
        <Link to="/Prediction"><div className='flex flex-col ml-2 mt-[50px]  w-[28vw] h-[50vh] bg-[#86c95e] rounded-[20px]'>
          <div className='flex flex-col p-4'>
            <span className='text-[28px] font-medium'>Predict</span>
            <span className='text-[12px]'>Be proactive, drive success</span>
          </div>
          <div className='px-4'>
            <img src={predict} className='w-[380px] h-[220px] rounded-[10px]' alt="" />
          </div>
        </div>
        </Link>
      </div>
      <div className=" flex ml-[35%] mt-[80px] justify-center items-center w-[35vw] h-[140px] ">
        <div className='flex flex-col justify-between items-center'>
          <div className='flex items-center font-bold text-[30px]  '>Ready, Set, Go</div>
          <div className='flex mt-5 text-[15px] w-[25vw]'>Don't let restocking woes pull you down! Transform your
            buisness with Walmart's Data Visualization and
            Management platform, Sign up today and elevate your
            restocking game!
          </div>
          <div className=''>
            <button className='bg-black text-[white] mx-3 mt-3 mb-5 w-20 rounded-[10px]'><Link to="/Login">Login</Link></button>
            <button className='bg-black text-[white] mx-3 mt-3 mb-5 w-20 rounded-[10px]'><Link to="/register">Register</Link></button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home
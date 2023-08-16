import React from 'react'
import stock from '../Assets/stock.png'
import stock2 from '../Assets/stock2.png'
import visualize from '../Assets/visualize.png'
import predict from '../Assets/predict.png'
import manage from '../Assets/manage.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=" w-full h-auto py-10 bg-[#EAF2D7]">
      <div className=" ml-[25%] flex text-[100px] justify-center align-center w-[55vw] h-[140px] border-[2px] border-solid border-black rounded-[50px] ">
        <div className='justify-center items-center goblin'>WALMART</div>
      </div>
      <div className='flex flex-row ml-[25%] mt-2'>
        <div className='w-[30vw] h-[35vh] border-[2px] bg-black text-white border-solid border-black m-3 rounded-l-[30px] rounded-b-[30px]'>
          <div className='px-10 pt-[28%] atiFont'>Welcome to the sleek and savvy data managemenet platform
            for walmart restocking! Dive into our data visualization world and revolutionize your restoking experience
          </div>
        </div>
        <img src={stock} className='w-[22vw] h-[35vh] m-3' alt="" />
      </div>
      <div className='flex flex-row ml-[25%] mt-2'>
        <img src={stock2} className='w-[22vw] h-[22vh] m-3' alt="" />
        <div className='w-[30vw] h-[22vh] border-[2px] bg-black text-white border-solid border-black m-3 rounded-[80px]'>
          <div className='px-10 pt-[28%]'>
          </div>
        </div>
      </div>
      <div className='flex flex-row ml-[25%] mt-[80px]'>
        <div className='font-bold text-[35px] ml-8 w-[25vw] goblin'>Get Started <br />
          With<br />
          Confidence</div>
        <div className='w-[30vw] p-4 mt-3 atiFont'>
          Don't Know where to begin? Fear not, for our
          innovative restocking management platform will
          provide you with an effortless user experience. Login
          or register now to start making informed decisions
          with ease
        </div>
      </div>
      <div className='flex flex-col mx-[25%] mt-[80px] w-[55vw] h-[50vh] bg-[#E0ECC4] rounded-[20px]'>
        <div className='flex flex-col p-4'>
          <span className='text-[28px] font-medium goblin'>Visualize</span>
          <span className='text-[12px] atiFont'>Unlock critical insights with data</span>
        </div>
        <div className='pl-5'>
          <img src={visualize} className='w-[800px] h-[200px] rounded-[10px]' alt="" />
        </div>
      </div>
      <div className='flex flex-row mx-[25%] w-[55vw]'>
      <div className='flex flex-col  mt-[50px] w-[28vw] h-[50vh] bg-[#E0ECC4] rounded-[20px]'>
          <div className='flex flex-col p-4'>
            <span className='text-[28px] font-medium goblin'>Manage</span>
            <span className='text-[12px] atiFont'>Take control of Restolking</span>
          </div>
          <div className='px-4'>
            <img src={manage} className='w-[380px] h-[220px] rounded-[10px]' alt="" />
          </div>
        </div>
        <Link to="/prediction"><div className='flex flex-col ml-2 mt-[50px]  w-[28vw] h-[50vh] bg-[#E0ECC4] rounded-[20px]'>
          <div className='flex flex-col p-4'>
            <span className='text-[28px] font-medium goblin'>Predict</span>
            <span className='text-[12px] atiFont'>Be proactive, drive success</span>
          </div>
          <div className='px-4'>
            <img src={predict} className='w-[380px] h-[220px] rounded-[10px]' alt="" />
          </div>
        </div>
        </Link>
      </div>
      <div className=" flex ml-[35%] mt-[80px] justify-center items-center w-[35vw] h-[140px] ">
        <div className='flex flex-col justify-between items-center'>
          <div className='flex items-center font-bold text-[30px]  goblin'>Ready, Set, Go</div>
          <div className='flex mt-5 text-[15px] w-[25vw] atiFont'>Don't let restocking woes pull you down! Transform your
            buisness with Walmart's Data Visualization and
            Management platform, Sign up today and elevate your
            restocking game!
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home
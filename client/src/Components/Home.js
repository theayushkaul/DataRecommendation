import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
// import Upload from './Upload'


const Home = () => {
  return (
    <div className=" w-full h-[100vh] bg-[#a9ca96]">
      <Navbar />
      <div className=" mx-[15%] flex text-[80px] justify-center align-center w-[65vw] h-[100px] border-[2px] border-solid border-black rounded-[50px] ">
        <div className='border-[2px] border-solid border-black justify-center items-center'>WALMART</div>
      </div>
      <div className='flex flex-row w-[65vw] mx-[15%] mt-2'>
        <div className='w-[30vw] h-[25vh] border-[2px] border-solid border-black m-3 rounded-l-[30px] rounded-b-[30px]'>
          <div className='p-2 pt-[20%]'>Welcome to the sleek and savvy data managemenet platform
            for walmart restocking! Dive into our data visualization world and revolutionize your restoking experience</div>
        </div>
        <div className='w-[14vw]'></div>
      </div>
    </div>
  )
}

export default Home
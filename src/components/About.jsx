import React from 'react'

function About() {
  return (
    <div className='   w-full  min-h-screen  bg-gray-200 ' id="about">
 <div className=" flex justify-center items-center py-4 "><h1 className='text-7xl font-bold text-gray-700  uppercase '>About me </h1></div>
 <div className="container mx-auto py-4  px-10">
  <div className="flex justify-between px-32 border  py-12 border-gray-300 hover:bg-white ">
    <h1 className='text-yellow-600 font-bold   text-4xl'>Email</h1>
    <h1 className='text-gray-800 text-4xl '>email01@gmail.com</h1>
  </div>
  <div className="flex justify-between px-32 border  py-12 border-gray-300 mt-4 hover:bg-white  ">
    <h1 className='text-yellow-600 font-bold   text-4xl'>Adress</h1>
    <h1 className='text-gray-800 text-4xl '>Adress1</h1>
  </div>
  <div className="flex justify-between px-32 border  py-12 border-gray-300 mt-4  hover:bg-white ">
    <h1 className='text-yellow-600 font-bold   text-4xl'>Phone</h1>
    <h1 className='text-gray-800 text-4xl '>000000000</h1>
  </div>
 </div>
    </div>
  )
}

export default About
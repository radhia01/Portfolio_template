import React from 'react'

function Contact() {
  return (
    <div className='   w-full  min-h-screen  bg-gray-200 ' id="contact">
 <div className=" flex justify-center items-center py-4 "><h1 className='text-7xl font-bold text-black  uppercase '>Contact me </h1></div>
         <div className=" container mx-auto py-10 px-20 ">
<div className=" grid grid-cols-2  gap-4"> 
    
     <div className="   flex flex-col ">
                <label className="text-yellow-500 font-bold text-lg">Name</label>
                <input type="text"  className='bg-white border border-gray-300 h-20 w-full '/>
    </div>
  <div className=" flex flex-col ">
                <label className="text-yellow-500 font-bold text-lg">Email</label>
                <input type="text"  className='bg-white border border-gray-300 h-20 w-full '/>
</div>
</div>
            <div className="mt-4 flex flex-col ">
                <label className="text-yellow-500 font-bold text-lg">Message</label>
            <textarea rows="12" className='bg-white  w-full '/>
         </div>
         <div className="flex justify-center mt-4"> <button className='w-32'>Send </button></div>
         </div>

        
    </div>
  )
}

export default Contact
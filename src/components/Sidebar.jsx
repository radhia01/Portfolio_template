import {React,useState} from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft ,AiFillCaretRight} from "react-icons/ai";
import { CiHome } from "react-icons/ci";

import { VscProject } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import { CiCircleInfo } from "react-icons/ci";
function Sidebar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
    const [openSidebar, setopenSidebar] = useState(true)
    const [hovered, setHovered] = useState(false)
  
  
  return (
    <div className={`bg-white ${!openSidebar ? "w-0" : "w-72"} transition-width duration-300 ease-in-out hover:bg-yellow-600 hover:text-white `}
    
    
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
 

    <button className='absolute top-1 left-2  flex  bg-transparent border-none text-yellow-500 h-6 items-center text-center text-sm hover:border-white focus:outline-none' onClick={()=>setopenSidebar(!openSidebar)}>{openSidebar?<AiFillCaretRight className='text-lg'/>:<AiFillCaretLeft className='text-lg'/>}</button>

  <ul className='py-4  px-2 mt-12'>
    <li className=' py-2 mb-4 px-4  justify-start      hover:shadow-md  hover:border hover:border-white  hover:text-gray-800 transition-all duration-200'>
  <Link  href="" onClick={() => scrollToSection('home')} className={`flex text-xl   font-bold  ${hovered?"text-white":"text-yellow-600"} hover:text-gray-500  uppercase `}><CiHome className='mr-1 mt-1  text-gray-600'/>home</Link></li>
  <li className=' py-2 mb-4 px-4  justify-start      hover:shadow-md  hover:border hover:border-white  hover:text-gray-800 transition-all duration-200'>
  <Link  href="" onClick={() => scrollToSection('about')}  className={`flex text-xl   font-bold  ${hovered?"text-white":"text-yellow-600"} hover:text-gray-500  uppercase `}> <CiCircleInfo className='mr-1 mt-1 text-gray-600 '/>about</Link></li>
    <li className=' py-2 mb-4 px-4  justify-start      hover:shadow-md  hover:border hover:border-white  hover:text-gray-800 transition-all duration-200'>
  <Link  href="" onClick={() => scrollToSection('skills')}  className={`flex text-xl   font-bold  ${hovered?"text-white":"text-yellow-600"} hover:text-gray-500  uppercase `}> <GiSkills className='mr-1 mt-1 text-gray-600'/>skills</Link></li>
    <li className=' py-2 mb-4 px-4  justify-start      hover:shadow-md  hover:border hover:border-white  hover:text-gray-800 transition-all duration-200'>
  <Link  href="" onClick={() => scrollToSection('projects')}  className={`flex text-xl   font-bold  ${hovered?"text-white":"text-yellow-600"} hover:text-gray-500  uppercase `}> <VscProject className='mr-1 mt-1 text-gray-600'/>Work</Link></li>
    <li className=' py-2 mb-4 px-4  justify-start      hover:shadow-md  hover:border hover:border-white  hover:text-gray-800 transition-all duration-200'>
  <Link  href="" onClick={() => scrollToSection('contact')}  className={`flex text-xl   font-bold  ${hovered?"text-white":"text-yellow-600"} hover:text-gray-500  uppercase `}><TiContacts className='mr-1 mt-1 text-gray-600 ' />contact</Link></li>
    
  </ul>



    </div>
  )
}

export default Sidebar
import React from 'react'
import react from "../assets/react.png"
import php from "../assets/php.png"
import html from "../assets/html.png"
import nextjs from "../assets/nextjs.png"
import github from "../assets/github.png"
import nodejs from "../assets/nodejs.png"
import bootstrap from "../assets/Bootstrap.png"
import css from "../assets/css.png"
function Skills() {
  const skills=[
    {
      id:1,
      
      logo:react
    },
    {
      id:2,
      
      logo:php
    },
    {
      id:3,
      
      logo:bootstrap
    },
    {
      id:4,
      
      logo:github
    },
    {
      id:5,
      
      logo:nodejs
    },
    {
      id:6,
      
      logo:nextjs
    },
    {
      id:7,
      
      logo:html
    },
    {
      id:8,
      
      logo:css
    }
  ]
  return (
    <div className='w-full min-h-screen bg-gray-200' id="skills">
      <div className=" flex justify-center items-center py-4 "><h1 className='text-7xl font-bold text-gray-700  uppercase '>skills</h1></div>
<div className="grid grid-cols-4 gap-8 py-4 px-7">
  {skills.map(skill=>{
    return ( <div key={skill.id} className='bg-white      h-72 w-72  text-lg  shadow text-black py-1 rounded-lg m-2  hover:text-4xl hover:scale-125 hover:border-2 hover:border-yellow-500  '>
                  <img  className="h-full w-full object-cover"src={skill.logo} />
    </div>)
   
  })}
</div>


    </div>
  )
}

export default Skills
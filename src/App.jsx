import { useState } from 'react'
import './App.css'

 import Home from './components/Home'
import Sidebar from './components/Sidebar'
import {Route,Routes} from "react-router-dom"
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  
  return (
    <div className='    flex  relative  h-screen  w-screen  overflow-hidden '>
      
          <Sidebar />
          <div className="w-full h-full overflow-y-auto ">
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          
          </div>
          
    </div>
  )
}

export default App

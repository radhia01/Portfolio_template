import React from 'react'

function Home() {
  const stats=[
    { id:1,
      number:+5,
      text:"Years of experience"},
      { id:1,
        number:+45,
        text:"projects completed"},
        { id:1,
          number:+15,
          text:"soft skills"}
      
  ]
  return (
    <div className='py-8 px-6 w-full min-h-screen bg-black flex flex-col justify-center items-center' id="home">
      {/* Titre principal */}
      <div>
        <h1 className='uppercase text-7xl font-bold text-white'>software engineer</h1>
      </div>

      {/* Description */}
      <div className="px-56 py-10 mt-8">
        <h1 className='text-gray-500 text-2xl text-center'>
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </h1>
      </div>

      {/* Statistiques */}
      <div className="flex py-12 space-x-14">
        {stats.map(element=>{
          return (
            <div key={element.id} className="flex flex-col text-center">
            <h1 className='text-6xl font-bold text-white'>{element.number}</h1>
            <span className='uppercase text-sm font-bold text-gray-500'>{element.text}</span>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home

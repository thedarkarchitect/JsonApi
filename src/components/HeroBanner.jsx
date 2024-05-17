import React from 'react'

const HeroBanner = () => {
  return (
    <div className='w-full'>
      <div className="relative">
        <img className="rounded-lg lg:h-[700px] sm:h-[300px] md:h-[400px] w-full" src="./src/assets/hero 1.png"/>
        <div className='absolute inset-0 flex '>
            <p>here we go</p>
        </div>
      </div>
      
    </div>
    
  )
}

export default HeroBanner
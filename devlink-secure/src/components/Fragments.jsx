import React from 'react'

export const Fragments = () => {
  const dotCount = 20

  // Random dot positions
  const dots = Array.from({ length: dotCount }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100
  }))

  return (
    <div className='relative text-white w-[370px] rounded md:w-[1800px] h-[100vh] overflow-hidden bg-black'>
      <span className='absolute top-4 left-4 z-10'></span>

      {/* Glowing Lines */}
      <svg className='absolute inset-0 w-full h-full z-0 pointer-events-none'>
        {dots.map((dotA, i) =>
          dots.map((dotB, j) =>
            i < j ? (
              <line
                key={`${i}-${j}`}
                x1={`${dotA.left}%`}
                y1={`${dotA.top}%`}
                x2={`${dotB.left}%`}
                y2={`${dotB.top}%`}
                stroke='cyan'
                strokeWidth='0.5'
                strokeOpacity='0.3'
              />
            ) : null
          )
        )}
      </svg>

      {/* Glowing Dots */}
      {dots.map(dot => (
        <div
          key={dot.id}
          className='absolute w-2 h-2 bg-teal-600 rounded-full animate-pulse z-10'
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            boxShadow: '0 0 12px rgba(0,255,255,0.8)'
          }}
        />
      ))}
    </div>
  )
}

export const AboutContainers = () => {
  return (
    <>
      <div className='grid grid-cols-3 w-full h-60 space-x-3 p-3 bg-[#313030] rounded'> 

        <div className='border-2 border-white rounded'>this is the first div</div>
        <div className='border-2 border-white rounded'>this is the second div</div>
        <div className='border-2 border-white rounded'>this is the third div</div>
      </div>
    </>
  )
}

export const FeaturesContainer = () => {
  
  return(
    <>
      <div className='w-full flex justify-center space-x-68 p-3 feature-cont'>

        <div className='h-[450px] w-90 bg-red-700'>This is the first div</div>
        <div className='h-[450px] w-90 bg-blue-700'>This is the second div</div>
        <div className='h-[450px] w-90 bg-green-700'>This is the third div</div>
        
      </div>
    </>
  )
}

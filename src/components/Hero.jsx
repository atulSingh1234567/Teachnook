import React from 'react'

export default function Hero() {
  return (
    <div className='relative h-[440px] flex w-full'>
      <div className='flex mt-20 px-28 flex-col items-evenly w-[50%]'>
          <span className='text-[60px] w-44 text-blue-600 font-semibold'>Promote.</span>
          <span className='text-[60px] w-44 text-blue-500 font-semibold'>Lead.</span>
          <span className='text-[60px] text-blue-400 font-semibold'>Show the way.</span>
      </div>
      <div className='relative w-[50%]'>
        <img className='absolute top-2 min-w-[20%] w-[300px] shadow-lg shadow-black rounded-lg' src="student1.jpg" alt="Future leadership" />
        <img className='absolute bottom-6 left-28 shadow-lg shadow-black w-[350px] min-w-[20%] rounded-lg' src="student2.jpg" alt="Future leadership" />
        <img className='absolute right-10 top-4 shadow-lg shadow-black w-[350px] min-w-[20%] rounded-lg' src="student3.jpg" alt="Future leadership" />
      </div>
    </div>
  )
}

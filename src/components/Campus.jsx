import React from 'react'

function Campus() {
  return (
    <div className='flex flex-col p-8 bg-gray-100'>
      <h1 className='text-[40px] mb-4 font-semibold'><span className='text-gray-400'>Why Campus Ambassador</span><span className='text-gray-600'> ?</span></h1>
      <div className='flex justify-center gap-8'>
        <div className='w-[400px] text-gray-400 text-xl tracking-wide'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est omnis nisi facere autem distinctio quo! Quisquam vitae, qui voluptate cupiditate necessitatibus fugiat adipisci quo consequatur assumenda culpa consequuntur soluta voluptatem ducimus nisi explicabo!
        </div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/cUve_9uRy-Y?start=0`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
        <h1 className='mt-8 text-[40px] mb-4 font-semibold text-gray-400'>Why Represent Teachnook <span className='text-gray-600'>?</span></h1>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex gap-4 w-[80%] items-center bg-white rounded-lg border p-2'>
          <img src="student1.jpg" alt="" className='w-44' />
          <p className='text-gray-400 text-xl tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde sit incidunt?</p>
        </div>
        <div className='flex gap-4 w-[80%] items-center bg-white rounded-lg border p-2'>
          <img src="student1.jpg" alt="" className='w-44' />
          <p className='text-gray-400 text-xl tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde sit incidunt?</p>
        </div>
        <div className='flex gap-4 w-[80%] items-center bg-white rounded-lg border p-2'>
          <img src="student1.jpg" alt="" className='w-44' />
          <p className='text-gray-400 text-xl tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde sit incidunt?</p>
        </div>
        <div className='flex gap-4 w-[80%] items-center bg-white rounded-lg border p-2'>
          <img src="student1.jpg" alt="" className='w-44' />
          <p className='text-gray-400 text-xl tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde sit incidunt?</p>
        </div>
      </div>
    </div>
  )
}

export default Campus

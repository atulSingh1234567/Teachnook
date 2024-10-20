import React from 'react'

function About() {
  return (
    <div id='about' className='flex flex-col gap-4 items-center pl-8'>
      <h1 className='mt-8 text-[40px] w-full mb-4 font-semibold text-blue-400'>About Teachnook</h1>
      <div className='text-xl tracking-wide text-justify w-[80%] text-gray-400'>
      We are here to make you strive towards excellence through our in-demand courses with a carefully curated curriculum. In the digital era, in any domain, there are 100s of candidates for a single position. We don’t want you to lag behind and hence we focus on upskilling by providing hands-on experience with live projects to make you industry ready.
      </div>
      <div className='text-xl tracking-wide text-justify w-[80%] text-gray-400'>
      We are a comprehensive e-learning programme with a carefully curated curriculum which help students develop skills right from scratch and in advancing their career through guidance from industry experts who are passionate about that field and discover skills that are in demand. Our aim is to provide students with an ace up their sleeves in today’s cut-throat world with flexible ,virtual courses designed to explore various domains ,and fostering personal as well as professional skills through engaging in different group activities.
      </div>
      <div className='w-full flex flex-col gap-8 mt-4'>
        <h1 className='text-xl text-center text-blue-400 font-semibold'>We Collaborate With +75 Leading Companies</h1>
        <div className='flex justify-evenly '>
           <img src="https://teachnook.com/assets/MainPage/HomePage/google.png" alt="" />
           <img src="https://teachnook.com/assets/MainPage/HomePage/microsoft.png" alt="" />
           <img src="https://teachnook.com/assets/MainPage/HomePage/tcs.png" alt="" />
           <img src="https://teachnook.com/assets/MainPage/HomePage/infosys.png" alt="" />
           <img src="https://teachnook.com/assets/MainPage/HomePage/adobe.png" alt="" />
        </div>
        <h1 className='text-center mt-8 text-xl text-blue-400 font-semibold'>Completion Certificates</h1>
        <div className='flex justify-center gap-4'>
        <img src="course.jpeg" alt="" className='w-[400px] rounded-lg border border-gray-400 shadow'/>
        <img src="internship.jpeg" alt="" className='w-[400px] rounded-lg border border-gray-400 shadow' />
        </div>
      </div>
    </div>
  )
}

export default About

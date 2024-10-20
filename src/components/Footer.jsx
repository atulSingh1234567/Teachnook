import React from 'react'

function Footer() {
  return (
    <div className='w-full flex justify-between px-8 mt-8 p-4 bg-blue-600'>
      <div className='w-[15%] flex flex-col'>
        <img src="https://teachnook.com/assets/MainPage/Footer/TeachNook-logo.svg" alt="" />
        <p className='pl-1 mt-4 w-[100%] text-white font-semibold whitespace-pre-wrap text-justify indent-px'>Stay connected with us! Follow and subscribe to our social media platforms for regular updates on learning new skills. Happy Learning!</p>
        <span className='flex gap-4 mt-4'>
          <a href="">@</a>
          <a href="">@</a>
          <a href="">@</a>
        </span>
      </div>
      <div className='flex flex-col text-white font-semibold'>
         <h1 className='font-bold text-orange-400 text-xl'>Quick links</h1>
         <a href="#about" className='mb-2'>About Us</a>
         <a className='mb-2' href="https://blog.teachnook.com/">Blog</a>
         <a href="https://teachnook.com/contactus">Contact Us</a>
      </div>
      <div className='flex flex-col text-white font-semibold'>
         <h1 className='font-bold text-orange-400 text-xl'>Community</h1>
         <a href="https://teachnook.com/TermsAndConditions" className='mb-2'>Terms & Conditions</a>
         <a className='mb-2' href="https://teachnook.com/PrivacyPolicy">Privacy Policy</a>
      </div>
      <div className='flex flex-col text-white font-semibold'>
         <h1 className='font-bold text-orange-400 text-xl'>More</h1>
         <a className='mb-2' href="https://teachnook.com/growthcommunity">Growth Community</a>
      </div>
    </div>
  )
}

export default Footer

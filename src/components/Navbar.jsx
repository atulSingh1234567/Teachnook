import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {



    return (
        <motion.div className='flex gap-12 bg-white wrap overflow-hidden'
            initial={{ x: '40%' }} // Start position outside the screen (right side)
            animate={{ x: '-40%' }} // End position outside the screen (left side)
            transition={{
                duration: 10, // Adjust the speed of the animation
                ease: 'linear', // Smooth linear motion
                repeat: Infinity, // Infinite loop
                repeatType: 'mirror' // Makes it loop seamlessly
            }}>

            <motion.div className='flex w-full items-center gap-2'>
                <img className='w-10' src="https://teachnook.com/assets/MNC/top.svg" alt="" />
                <p className='text-xl'>We are now <span className='text-blue-600 font-semibold'>LinkedIn Top Startup 2023</span></p>
            </motion.div>
            <motion.div className='flex w-full items-center gap-2'>
                <img className='w-10' src="https://teachnook.com/assets/MNC/top.svg" alt="" />
                <p className='text-xl'>We are now <span className='text-blue-600 font-semibold'>LinkedIn Top Startup 2023</span></p>
            </motion.div>
            <motion.div className='flex w-full items-center gap-2'>
                <img className='w-10' src="https://teachnook.com/assets/MNC/top.svg" alt="" />
                <p className='text-xl'>We are now <span className='text-blue-600 font-semibold'>LinkedIn Top Startup 2023</span></p>
            </motion.div>
        </motion.div>
    )
}

export default Navbar

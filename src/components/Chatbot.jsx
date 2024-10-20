import React, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

export default function Chatbot() {
    const [input, setInput] = useState('what is ai');
    const [clicked, setClicked] = useState(false)
    const [received , setReceived] = useState('')
    useEffect(() => {
        if (clicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [clicked]);

    const searchedText = function(){
        try {
            axios.post('http://localhost:8001/api/v1/askme' , {message:input})
            .then(
                (response)=>{
                    const res = response.data.data;
                    setReceived(formatResponse(res))
                }
            )
        } catch (error) {
            
        }
    }

    // formating the response
    function formatResponse(response) {
        // Helper function to bold key elements (like dates, names, keywords)
        function applyBold(text) {
            // Example regex to match dates (years) and other common important patterns
            const regexPatterns = [
                '\\d{4}', // Match years (e.g., 1998, 2024)
                'Google', // Example for a common keyword (adjust for other names)
                'AI', 'technology', 'mission', 'algorithm', 'data', // More generic terms
                '[A-Z][a-z]+ [A-Z][a-z]+', // Match capitalized names (e.g., Larry Page, Sergey Brin)
            ];
    
            regexPatterns.forEach(pattern => {
                const regex = new RegExp(`(${pattern})`, 'g');
                text = text.replace(regex, '**$1**'); // Apply bold using markdown-style asterisks
            });
    
            return text;
        }
    
        // Helper function to add new lines after sentences or important breaks
        function addNewLines(text) {
            // Insert new lines after periods, question marks, or exclamation marks
            text = text.replace(/([.?!])\s*(?=[A-Z])/g, '$1\n\n');
            
            // Add new lines after colons for clarification
            text = text.replace(/(:)\s*/g, '$1\n\n');
            
            // Optional: Add more rules based on your needs, like detecting topic changes
            return text;
        }
    
        // Step 1: Apply bold to key concepts and important terms
        let formattedText = applyBold(response);
    
        // Step 2: Add new lines for clarity after punctuation and logical breaks
        formattedText = addNewLines(formattedText);
    
        return formattedText;
    }

    const variables = {
        initial: {
            width: '0%',
            height: '0%',
            opacity: 0
        },
        animate: {
            width: '98%',
            height: '80%',
            opacity: 1,
            transition: {
                duration:1
            }
        },
        exit: {
            width: '0%',
            height: '0%',
            transition: {
                duration: 1
            }
        }
    }


    const chatAppear = () => {
        setClicked(prev => !prev)
    }

    return (
        <>
            <motion.div variants={variables}
                initial='initial'
                animate={clicked ? 'animate' : 'initial'}
                exit='exit' className={`fixed flex flex-col gap-4 bottom-4 bg-white rounded-xl p-4 px-6 shadow-2xl right-4`}>
                <h1 className={`text-xl ${!clicked ? 'hidden' : ''} font-bold text-blue-700`}>You must be having questions. Go on....</h1>
                <input type="text" value={input} name='asked' onChange={(e) => setInput(e.target.value)} className='bg-gray-100 text-gray-400 focus:outline-none px-4 w- h-10 rounded-xl' />
                <button onClick={searchedText} className='absolute right-8 top-[60px] px-3 h-10 rounded-xl font-bold text-white bg-red-600'>Ask</button>
                <div className='text-black'>
                    {received}
                </div>
            </motion.div>
            <button onClick={chatAppear} className='fixed bottom-5 right-4'><img src="ask.png" alt="" /></button>
        </>
    )
}

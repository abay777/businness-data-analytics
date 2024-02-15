import React from 'react'
import { ReactTyped } from 'react-typed'

export const Hero:React.FC = () => {
  return (
   <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col  justify-center'>
            <p className='text-[#d1d930] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-7xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center  ' >
                <p className='md:text-4xl sm:text-3xl text-xl font-bold '>
                    Fast , Flexible Financing for
                </p>
                <ReactTyped 
                className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 ' 
                strings={['BTB','BTC','SASS']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                /> 
            </div>
            <p className='md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms</p>
            <button className='bg-[#d1d930] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-white'>Get started</button>
        </div>
   </div>
  )
}

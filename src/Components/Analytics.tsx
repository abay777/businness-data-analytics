import React from 'react'
import Laptop from '../assets/laptop.jpg'
export const Analytics:React.FC = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4'  src={Laptop} alt="laptop image of data" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#d1d930] font-bold stroke-black'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quaerat tempora nulla fugit odio soluta error iusto autem eligendi aliquid blanditiis itaque maxime inventore quo, dolor provident. 
                  Esse, reiciendis quod?
                </p>
                <button className='bg-black text-[#d1d930] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#d1d930] hover:text-black'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

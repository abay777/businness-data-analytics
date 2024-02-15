import React from 'react'

export const NewsLetter:React.FC = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='mx-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full' >
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#d1d930] w-[200px] rounded-md font-medium  my-6 mx-auto ml-4 py-3 text-black hover:bg-white'>Notify ME</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#d1d930]'>Privacy policy.</span> </p>
            </div>

        </div>

    </div>
  )
}

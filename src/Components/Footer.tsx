import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from  'react-icons/fa'

export const Footer:React.FC = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className="w-full text-3xl font-bold text-[#d1d930]">React.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ratione eos vero eaque autem omnis sed, aliquam eveniet voluptate animi.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-between mt-4'>
        <div>
          <h6 className='font-medium text-gray-400 '>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 '>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 '>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 '>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

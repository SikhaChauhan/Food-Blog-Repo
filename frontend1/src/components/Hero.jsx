import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className='px-5 mb-10 xl:px-10 md:w-1/2'>
        <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>A blog template made for food <span className='text-orange-400'>Influencers</span></h1>
        <form action='/search' className='relative flex items-center p-4 bg-white rounded' method=''>
            <IoMdSearch className='w-5 h-5 mr-2 text-neutral-300'/>
            <input className='outline-none w-full placeholder:text-[#1b2629]' name='query' type='search' placeholder='Search for the Recipe' id='search' required/>
        </form>
    </div>
  )
}

export default Hero
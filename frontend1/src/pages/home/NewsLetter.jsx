import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center w-full p-10 mx-auto md:w-2/3'>
      <h3 className='text-4xl font-semibold text-center text-secondary'>Sign up for my weekly newsletter!</h3>
      <p className='mt-6 text-lg font-light leading-normal text-center text-gray-600'>
        Weekly emails with my latest recipes, cooking tips and tricks and product recommendations! <br/> You'll be set up in minutes.
      </p>

      <div className='flex flex-col items-center justify-center w-full gap-4 mt-6 mb-20 md:flex-row md:px-8'>
        <input className='flex flex-grow px-4 py-4 text-gray-400 rounded outline-none placeholder:text-[#1b2629]' type='text' placeholder='Name' />
        <input className='flex flex-grow px-4 py-4 text-gray-400 rounded outline-none placeholder:text-[#1b2629]' type='text' placeholder='Email Address' />
        <button className='w-full px-8 py-4 text-base font-semibold text-center transition duration-200 ease-in border hover:bg-btnColor text-secondary hover:text-white border-[#9c702a] focus:outline-none rounded-lg'>Get Started</button>
      </div>
    </div>
  )
}

export default NewsLetter

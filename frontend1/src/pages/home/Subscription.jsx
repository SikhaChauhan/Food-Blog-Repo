import React from 'react'

const Subscription = () => {
  return (
    <div className='py-16 bg-white rounded-t-md'>
        <div className='max-w-screen-xl px-6 mx-auto mb-20 lg:px-8'>
            <div className='flex flex-col items-center justify-between gap-20 md:flex-row'>
                <div className='md:w-1/2'>
                    <h3 className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>Subscribe to our newsletter.</h3>
                    <p className='mt-4 text-lg leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Unde quod at veritatis possimus dicta natus!</p>
                </div>

                <div className='flex flex-col gap-4 mt-6 sm:w-1/2 sm:flex-row'>
                    <label htmlFor='email-address' className='sr-only'>
                        Email Address
                    </label>
                    <input 
                    id='email-address' 
                    name='email' 
                    type='email'
                    autoComplete='email' 
                    required
                    className='flex-auto border-0 rounded-md bg-primary px-3.5 py-4 text-white shadow-sm:text-sm sm:leading-6 focus:outline-btnColor'
                    placeholder='Enter your email'/>

                    <button type='submit' className='flex-none px-8 py-4 text-sm font-semibold text-white rounded-md shadow-sm bg-btnColor hover:bg-white hover:text-btnColor hover:border-btnColor hover:border'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div> 
        {/* <hr/> */}
    </div>
  )
}

export default Subscription

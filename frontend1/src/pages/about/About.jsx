import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'

const About = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center w-full py-20'> 
            <div className='px-5 mb-10 xl:px-10 md:w-1/2'>
                <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>About</h1>
                <p className='mx-auto mb-20 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sunt nam quo reprehenderit necessitatibus corrupti dicta,<br/> maiores veniam, adipisci id nesciunt quasi numquam sint odit?</p>
            </div>
        </div>
        <article
        class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] mb-3 bg-cover bg-center bg-no-repeat"
        >
        <div
            class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
            class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
                Let us find your

                <strong class="block font-extrabold text-rose-500"> Forever Home. </strong>
            </h1>

            <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
                <a
                href="/"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                Get Started
                </a>

                {/* <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                Learn More
                </a> */}
            </div>
            </div>
        </div>
        </article>
        
        <div className='container px-6 py-40 mx-auto'>
            <div className='relative flex flex-col items-center justify-between h-auto p-8 bg-white rounded-lg shadow-2xl md:flex-row w-100 md:h-64'>
                <div className='w-8/12 text-2xl'>
                    <FaQuoteLeft className='float-left mr-2'/>
                    <span className='flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab, ea quidem quia ducimus id maiores nihil dicta reprehenderit aut!</span>
                </div>
                <div>
                    <span>Call now</span>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default About

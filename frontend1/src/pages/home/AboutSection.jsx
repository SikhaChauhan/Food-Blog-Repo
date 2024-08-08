import React from 'react'
import FeaturedImg from '../../assets/featured.webp'


const AboutSection = () => {
    return (
        <div className='flex flex-col items-center justify-between gap-12 px-5 my-4 overflow-hidden md:flex-row sm:my-20 md:gap-20 lg:px-10'>
    
          <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Vegan foodie who loves to experiment with recipes</h2>
            <p className='mt-4 text-xl text-[#5c5c5c]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, 
              dolores praesentium? Nam, molestiae labore quasi veritatis quo eligendi.
               Explicabo, nostrum nisi dolores ab, tenetur quam cum amet minima atque id,
                iure et hic architecto!</p>
              <div className='lg:mt-0 lg:flex-shrink-0'>
                  <div className='inline-flex mt-12'>
                    <button className='w-full px-8 py-4 text-base font-semibold text-center transition duration-200 ease-in border hover:bg-btnColor text-secondary hover:text-white border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
                  </div>
              </div>
          </div>

          <div className='relative'>
            <div className='absolute px-3 py-1 tracking-wider uppercase bg-white rounded-md top-4 left-5 text-secondary'>Featured Recipe</div>
            <img src={FeaturedImg} alt='Featured Image' className='rounded-md'/>
          </div>
        </div>
      )
}

export default AboutSection

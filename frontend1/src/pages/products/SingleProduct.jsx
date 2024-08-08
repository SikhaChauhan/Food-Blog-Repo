// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleProduct = () => {

//     const item = useLoaderData();
//     console.log(item);

//     const extractNumber = (timeString) => {
//         let timeArray = timeString.split(" ");
//         return parseInt(timeArray[0]);
//     }
    
//     let prepTimeMinutes = extractNumber(item?.more.prep_time);
//     let cookTimeMinutes = extractNumber(item?.more.prep_time);

//     const totalTimeMinutes = prepTimeMinutes + cookTimeMinutes;
//   return (
//     <section className='items-center justify-center min-h-dvh md:flex md:bg-eggshell'>
//        <article>
//             <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
//                 <picture>
//                     <img src={item.thumbnail_image} alt='thumbnail_image' className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto'/>
//                 </picture>

//                 <div>
//                     <h1 className='mt-12 text-4xl text-secondary'>{item.name}</h1>
//                     <p className='mt-6'>An easy and quick dish, perfect for any meal. This classic omelette combines 
//                         beaten eggs cooked to perfection, optionally filled with your choice of cheese,
//                         vegetables, or meats.</p>

//                         <article className='p-5 mt-6 bg-rose-50 rounded-xl'>
//                             <h2 className='ml-2 text-xl font-semibold'>Preparation time</h2>
//                             <ul className='mt-3 ml-8 text-lg list-disc marker:text-orange-500'>
//                                 <li className='pl-3'>
//                                     <p>
//                                         <span>Total:</span> <span>{totalTimeMinutes} minutes</span>
//                                     </p>
//                                 </li>
                                
//                                 <li className='pl-3 mt-3'>
//                                     <p>
//                                         <span>Preparation:</span> <span>{item?.more.prep_time}</span>
//                                     </p>
//                                 </li>

//                                 <li className='pl-3 mt-3'>
//                                     <p>
//                                         <span>Cooking:</span> <span>{item?.more.cook_time}</span>
//                                     </p>
//                                 </li>
//                             </ul>
//                         </article>
//                 </div>
//             </div>
//        </article>
//     </section>
//   )
// }

// export default SingleProduct

import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const item = useLoaderData();
    useEffect(()=>{
        window.scrollTo(0,0);
    })

    const extractNumber = (timeString) => {
        if (!timeString) return 0; // handle undefined or null values
        let timeArray = timeString.split(" ");
        return parseInt(timeArray[0]) || 0; // fallback to 0 if parsing fails
    };
    
    let prepTimeMinutes = extractNumber(item?.more?.prep_time);
    let cookTimeMinutes = extractNumber(item?.more?.cook_time);

    const totalTimeMinutes = prepTimeMinutes + cookTimeMinutes;

    return (
        <section className="items-center justify-center min-h-dvh md:flex md:bg-eggshell">
            <article>
                <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
                    <picture>
                        <img 
                            src={item?.thumbnail_image} 
                            alt={item?.name || 'thumbnail_image'} 
                            className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
                        />
                    </picture>

                    <div className='px-8'>
                        <h1 className="mt-12 text-4xl text-secondary">{item?.name}</h1>
                        <p className="mt-6">
                            An easy and quick dish, perfect for any meal. This classic omelette combines 
                            beaten eggs cooked to perfection, optionally filled with your choice of cheese,
                            vegetables, or meats.
                        </p>

                        <article className="p-5 mt-6 bg-rose-50 rounded-xl">
                            <h3 className="ml-2 text-xl font-semibold">Preparation time</h3>
                            <ul className="mt-3 ml-8 text-lg list-disc marker:text-orange-500">
                                <li className="pl-3">
                                    <p>
                                        <span>Total:</span> <span>{totalTimeMinutes} minutes</span>
                                    </p>
                                </li>
                                
                                <li className="pl-3 mt-3">
                                    <p>
                                        <span>Preparation:</span> <span>{item?.more?.prep_time || 'N/A'}</span>
                                    </p>
                                </li>

                                <li className="pl-3 mt-3">
                                    <p>
                                        <span>Cooking:</span> <span>{item?.more?.cook_time || 'N/A'}</span>
                                    </p>
                                </li>
                            </ul>
                        </article>
                    </div>

                    <div className='mt-5'>
                        <h2 className="ml-4 text-xl font-semibold">Ingredients</h2>
                        <ul className='mt-4 ml-8 list-disc marker:text-blue-500 text-secondary marker:align-middle'>
                            {
                                item?.ingredients.map((ingredient, index) => (
                                    <li key={index} className='pl-4 mt-2'>
                                        <span>{ingredient?.name} : </span>
                                        <span>{ingredient?.quantity}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='mt-5'>
                        <h2 className="ml-4 text-xl font-semibold">Instructions</h2>
                        <ul className='mt-4 ml-8 list-disc marker:text-blue-500 text-secondary marker:align-middle'>
                            {
                                item?.ingredients.map((ingredient, index) => (
                                    <li key={index} className='pl-4 mt-2'>
                                        <span>{ingredient?.name} : </span>
                                        <span>{ingredient?.quantity}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                            
                    <div className='w-full h-px mx-auto mt-5 bg-light-gray'></div>
                    <div className='mt-8'>
                        <h3 className='ml-3 text-3xl font-fancy text-nutmeg'>Nutrition</h3>
                        <p className='mt-4 ml-6'>The table below shows nutritional values per serving without the additional fillings.</p>
                        <ul className='mt-6'>
                            <li>
                                <div className='flex'>
                                    <p className='w-full ml-8 mr-auto text-lg'>Calories</p>
                                    <p className='w-full mr-auto text-lg font-bold text-nutmeg'>277kcal</p>
                                </div>
                            </li>
                            <div className='w-full h-px mx-auto mt-3 bg-light-gray'></div>
                            <li>
                                <div className='flex mt-3'>
                                    <p className='w-full ml-8 mr-auto text-lg'>Carbs</p>
                                    <p className='w-full mr-auto text-lg font-bold text-nutmeg'>0g</p>
                                </div>
                            </li>
                            <div className='w-full h-px mx-auto mt-3 bg-light-gray'></div>
                            <li>
                                <div className='flex mt-3'>
                                    <p className='w-full ml-8 mr-auto text-lg'>Protein</p>
                                    <p className='w-full mr-auto text-lg font-bold text-nutmeg'>20g</p>
                                </div>
                            </li>
                            <div className='w-full h-px mx-auto mt-3 bg-light-gray'></div>
                            <li>
                                <div className='flex mt-3'>
                                    <p className='w-full ml-8 mr-auto text-lg'>Fat</p>
                                    <p className='w-full mr-auto text-lg font-bold text-nutmeg'>22g</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default SingleProduct;


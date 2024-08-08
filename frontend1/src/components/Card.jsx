// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaRegClock } from "react-icons/fa6";

// const Card = ({item}) => {

//     const categoryStyles = {
//         Entrees: {backgroundColor:"#f0f5c4" , color:"#59871f"},
//         Breakfast: {backgroundColor:"#efedfa" , color:"#3c3a8f"},
//         Lunch: {backgroundColor:"#e5f7f3" , color:"#1f8787"},
//         Desserts: {backgroundColor:"#e8f5fa" , color:"#397a9e"},
//         Sides: {backgroundColor:"#feefc9" , color:"#616400"},
//         Drinks: {backgroundColor:"#ffeae3" , color:"#f0493e"},
//         default: {backgroundColor: "#fff", color: "#000"}
//     }

//     const getCategoryStyle = (category)=>{
//         return categoryStyles[category] || categoryStyles.default;
//     }
//     const category_Style = getCategoryStyle(item?.category)
    
//   return (
//     <div className='container flex justify-center mx-auto md:justify-start'>
//       <div className='max-w-sm'>
//         <div className='relative transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-xl'>
//             <img src={item?.thumbnail_image} alt='thumbnail_image' className='rounded-t-lg'/>
//             <div className='px-5 py-6 bg-white rounded-lg'>
//                 <Link to={`/items/${item._id}`}>
//                     <h1 className='mb-8 text-2xl font-bold text-gray-700 hover:text-gray-900 hover:cursor-pointer'>{item?.name}</h1>
//                 </Link>

//                 <div className='flex flex-wrap items-center justify-between'>
//                     <button className={`mt-6 py-2 px-4 font-mono rounded-lg shadow-md hover:shadow-lg transition duration-300`} 
//                     style = {
//                         {
//                             backgroundColor: category_Style.backgroundColor,
//                             color: category_Style.color
//                         }}>{item?.category}</button>
                    
//                     <div className='flex items-center py-2 mt-6'>
//                         <FaRegClock />
//                         <span className='ml-1'>{item?.more.prep_time}</span>
//                     </div>
//                 </div>
//             </div>
//             <div className='absolute px-2 py-2 bg-white rounded-lg right-2 top-2'>
//                 <span className='font-medium'>
//                     {item?.more.difficulty}
//                 </span>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa6';

const Card = ({ item }) => {
    console.log(item); // Log the item to check its structure

    const categoryStyles = {
        Entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
        Breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
        Lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
        Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
        Sides: { backgroundColor: "#feefc9", color: "#616400" },
        Drinks: { backgroundColor: "#ffeae3", color: "#f0493e" },
        default: { backgroundColor: "#fff", color: "#000" }
    };

    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default;
    };

    const category_Style = getCategoryStyle(item?.category);

    return (
        <div className='container flex justify-center mx-auto md:justify-start'>
            <div className='max-w-sm'>
                <div className='relative transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-xl'>
                    <img src={item?.thumbnail_image} alt='thumbnail_image' className='rounded-t-lg' />
                    <div className='px-5 py-6 bg-white rounded-lg'>
                        <Link to={`/items/${item._id}`}>
                            <h1 className='mb-8 text-2xl font-bold text-gray-700 hover:text-gray-900 hover:cursor-pointer'>{item?.name}</h1>
                        </Link>

                        <div className='flex flex-wrap items-center justify-between'>
                            <button className={`mt-6 py-2 px-4 font-mono rounded-lg shadow-md hover:shadow-lg transition duration-300`} 
                            style={{
                                backgroundColor: category_Style.backgroundColor,
                                color: category_Style.color
                            }}>
                                {item?.category}
                            </button>
                            
                            <div className='flex items-center py-2 mt-6'>
                                <FaRegClock />
                                <span className='ml-1'>{item?.more.prep_time}</span>
                            </div>
                        </div>
                    </div>
                    <div className='absolute px-2 py-2 bg-white rounded-lg right-2 top-2'>
                        <span className='font-medium'>
                            {item?.more.difficulty}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


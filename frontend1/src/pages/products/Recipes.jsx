// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import CategoryWrapper from '../category/CategoryWrapper';
// import Card from '../../components/Card';

// const Recipes = () => {
//     const [items, setItems] = useState([]);
//     useEffect(()=>{
//         const getLatestItems = async () =>{
//             const response = await axios.get('http://localhost:3000/api/all-items');
//             setItems(response.data);
//         }
//         getLatestItems();
//     },[])
//   return (
//     <div className='px-6 py-20 lg:px-12'>
//         <h1 className='mb-8 text-3xl font-semibold text-center text-secondary sm:text-5xl sm:leading-relaxed'>All Recipes</h1>
//         <CategoryWrapper/>
//         <ul className='grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//             {
//                 items.map((item)=>{
//                     <Card key={item._id} item={item}/>
//                 })
//             }
//         </ul>
//     </div>
//   )
// }

// export default Recipes

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';

const Recipes = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getLatestItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/all-items');
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        getLatestItems();
    }, []);

    return (
        <div className='px-6 py-20 lg:px-12'>
            <h1 className='mb-8 text-3xl font-semibold text-center text-secondary sm:text-5xl sm:leading-relaxed'>All Recipes</h1>
            <CategoryWrapper />
            <ul className='grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    items.map((item) => (
                        <Card key={item._id} item={item} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Recipes;


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryWrapper from './CategoryWrapper';
import Card from "../../components/Card"
import axios from 'axios';

const CategoryPage = () => {
    const {category} = useParams();
    console.log(category);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
      const fetchCategoryData = async () =>{
        setLoading(true);
        try{
          const response = await axios.get(`http://localhost:3000/api/categories/${category}`);
          setItems(response.data);
        }
        catch(err){
          setError(err.message || "Error loading category!");
        }
      }
      fetchCategoryData();
  },[category]);
  
  return (
    <div className='px-6 py-20 lg:px-12'>
      <h1 className='py-10 text-3xl font-semibold text-center capitalize text-secondary sm:text-6xl sm:leading-relaxed'>{category}</h1>
      <CategoryWrapper/>

      <ul className='grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          items && items?.map(item =>(
            <Card item={item} key={item._id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryPage

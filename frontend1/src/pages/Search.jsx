import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';

const Search = () => {
    const { searchText } = useParams();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        
        if (queryParam) {
            setQuery(queryParam);
        }
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/items`, {
                    params: { q: query }
                });
                setResults(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
        
        
    }, [query]);
    const handleSearch = (e) =>{
        setQuery(e.target.value);
    }
  return (
    <div className='px-6 py-20 lg:px-12'>
      <h1 className='py-10 text-3xl font-semibold text-center text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
        <div className='relative flex items-center p-4 mx-auto bg-white rounded md:max-w-3xl'>
            {/* <form> */}
                <IoSearchOutline className='w-5 h-5 mr-2 text-neutral-300'/>
                <input className='w-full outline-none placeholder:text-[#1b2629]' value={query} onChange={handleSearch} name="query" type='search' placeholder='Search for a recipe' id='search' required=""/>
            {/* </form> */}
        </div>
        
        {loading && <div>Loading...</div>}
        {error && <div>Unknown Error Occurred...</div>}
        <ul className='grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                results && results.map((item)=>(
                    <Card item={item} key={item._id}></Card>
                ))
            }
        </ul>
    </div>
  )
}

export default Search;



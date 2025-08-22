import React, { useState } from 'react'

const SearchBar = ({fetchWeather}) => {
  const [city, setCity] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim()) {
      fetchWeather(city);
      setCity("");    

    }}
  return (
      <form className='flex' onSubmit={handleSubmit} >
        <input
          type="text" 
          placeholder='Enter City' 
          value={city} 
          onChange={(e) => setCity(e.target.value)
          }
          className='flex-1 border-r-0 p-2 border border-gray-300 outline-none rounded-l-lg'
          />

          <button className='bg-blue-500 border cursor-pointer p-2 rounded-r-lg hover:bg-blue-700 border-l-0' type='submit'>Search</button>
      </form>
  );
};

export default SearchBar

import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import WeatherCard from './component/WeatherCard';
import SearchBar from './component/SearchBar'
import video from './video.mp4';

function App() {
  const [weather, setWeather] =useState(null);
  const [loading, setLoading] =useState(false);
  const [error, setError] =    useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
      setLoading(true);
      setError('');
      try{
        const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await axios.get(url);
        console.log(response.data);
        setWeather(response.data);
      } catch (err) {
        if(err.response && err.response.status === 404 ) {
          setError('City Not Found. Please try again.');
        } else {
          setError('An error occured. Please try again later.');
        }
        setWeather(null);
      } finally {
        setLoading(false);
      }    
  }
  
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden'>
   <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-1"></div>

      <div className='bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10'>
        <h1 className='text-3xl font-bold text-center mb-6'>
          Weather App
        </h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className='text-center mt-4'>Loading...</p>}
        {error && <p className='text-center mt-4 text-red-500'>{error}</p>}
        {weather && <WeatherCard weather = {weather} />}
      </div>
    </div>
    )
}

export default App;

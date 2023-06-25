import React, { useEffect } from 'react'
import { useState } from 'react';
import requests from '../utils/Requests';

function Header() {
  function changeImage(category){
    document.getElementById('div-bg').style.backgroundImage = 'url("https://source.unsplash.com/320x240/?' + category + '")';
  }

  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

    function truncateString(str,index){
        if(str?.length > index)
        {
            return str.slice(0,index) + "...."
        }
        else{
            return str;
        }
    }

    async function getmoviedata(){
      const data = await fetch(requests.requestTrending);
      const json = await data.json();
      setMovies(json?.results);
      console.log(movies);
    }
  
    useEffect(()=>{
        getmoviedata();
    },[]);

  return (
    <>
    <div className='w-full h-[600px] text-white'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
      <img
        className='w-full h-full object-cover hover:'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
            Play
          </button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>
          Released: {movie?.release_date}
        </p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  </div>
      </>

  )
}

export default Header
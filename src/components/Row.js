import React, { useEffect, useRef, useState } from 'react';
import requests from '../utils/Requests';
import Movie from './Movie';
import axios from 'axios';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, movieType }) {
  let scrl = useRef(null);

  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const [movies,setMovies]=useState([]);

  useEffect(() => {
        async function fetchData(){
            const requests = await axios.get(movieType);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [movieType]);


  async function getMovieData(movieType){
        const data = await fetch(requests.movieType);
        const json = await data.json();
        setMovies(json?.results);
        console.log(movies);
  }

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollEnd(scrl.current.scrollLeft);
    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className='my-10'>
      <h2 className='m-5 text-2xl text-white'>{title}</h2>
      <div className='flex'>
      <div className="flex row">
        {scrollX !== 0 && (
          <button
            className="bg-gray-700 font-bold w-16 h-36 p-2 ml-2  text-white opacity-40 hover:opacity-100 rounded-full"
            onClick={() => slide(-100)}
          >
            L
          </button>
        )}
        <div 
        className="flex list-none overflow-x-hidden max-w-[100%] scroll-smooth overflow-y-hidden" 
        onScroll={scrollCheck} 
        ref={scrl}>
          {movies.map(movie => (
                <img
                    className='h-28 w-48 m-2'
                    key={movie.id}
                    src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
        </div>
        {!scrollEnd && (
          <button
            className="bg-gray-700 font-bold w-16 h-36 p-2 ml-2  text-white opacity-40 hover:opacity-100 rounded-full"
            onClick={() => slide(+100)}
          >
            R
          </button>
        )}
      </div>
      </div>
  );
}

export default Row;



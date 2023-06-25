import React from 'react'

function Movie({item}) {
    console.log(item);
  return (
      <img
        className=''
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
  )
}

export default Movie
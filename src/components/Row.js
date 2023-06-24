import React, { useRef, useState } from 'react';

function Row({ title, movieType }) {
  let scrl = useRef(null);

  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

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
    <div>
      <h2 className='ml-5 text-2xl text-white'>{title}</h2>
      <div className="flex row">
        {scrollX !== 0 && (
          <button
            className="bg-black font-bold w-16 h-8 p-2 ml-2 my-5 text-white opacity-40 hover:opacity-100 rounded-full"
            onClick={() => slide(-100)}
          >
            L
          </button>
        )}
        <div 
        className="flex list-none overflow-x-hidden max-w-[100%] scroll-smooth overflow-y-hidden" 
        onScroll={scrollCheck} 
        ref={scrl}>
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
                <img
        className="p-2 ml-2 my-5 rounded-md h-60"
        src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
        alt="Jupiter's Legacy"
        />
        </div>
        {!scrollEnd && (
          <button
            className="bg-black font-bold w-16 h-8 p-2 ml-2 my-5 text-white opacity-40 hover:opacity-100 rounded-full"
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



import React from 'react'

function Header() {

    function truncateString(str,index){
        if(str.length > index)
        {
            return str.slice(0,index) + "...."
        }
        else{
            return str;
        }
    }

    const str = "Angsty and awkward fifteen year old Ginny Miller often feels more mature than her thirty year old mother thirresistible and dynamic Georgia Miller rhdlnksvjhj sdbjkvbjjhbhiohobjvbjkhiovhiobvbjk cvbhvhhfohiofhiohiofhiofioio "

  return (
    <header className="banner">
      <div 
      className="h-48 ml-8 p-36 max-sm:ml-0">
        <h1 
        className="text-[3rem] font-extrabold pb-1 max-sm:text-[1.4rem]">Ginny &amp; Georgia</h1>
        <div 
        className="text-[16px] h-20 leading-5 max-w-sm pt-4 max-sm:grid max-sm:grid-flow-row">
          <button 
          className="m-2 border-none rounded-sm bg-white cursor-pointer font-bold text-black outline-none py-2 px-8">
            Play</button>
          <button 
          className="m-2 border-none rounded-sm bg-white cursor-pointer font-bold text-black outline-none py-2 px-8">
            My List</button>
        </div>
        <h1 className="text-base h-20 leading-5 max-w-xs pt-4 w-80  max-sm:mt-10 max-sm: max-sm:max-w-lg max-sm:h-32">
          {truncateString(str,80)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>


  )
}

export default Header
import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return (
        <div 
        className="flex justify-between bg-black h-14 p-2">
             <Link 
             to='/'>
            <img 
            className="left-5 w-20 m-2"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
            alt="" />
            </Link>

            <div className="right-5 flex ">
                <Link 
                to="/login">
                <button 
                className="bg-red-600 text-sm text-white m-2 px-1 pb-1 rounded-sm font-semibold"
                >Login</button>
                </Link>

                <Link 
                to="/signup">
                <button 
                className="bg-red-600 text-sm text-white m-2 px-1 pb-1 rounded-sm font-semibold"
                >Sign Up</button>
                </Link>
 
            </div>
        </div>
    )
}

export default Nav
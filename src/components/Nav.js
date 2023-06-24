import React from "react";

function Nav(){
    return (
        <div className="flex justify-between bg-black h-14 p-2">
            <img 
            className="left-5 w-20 m-2"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />

            <div className="right-5 flex ">
                <button className="bg-red-600 text-sm text-white m-2 px-1 pb-2 rounded-sm "
                >Login</button>
                <button className="bg-red-600 text-sm text-white m-2 px-1 pb-2 rounded-sm "
                >Sign Up</button>
            </div>
        </div>
    )
}

export default Nav
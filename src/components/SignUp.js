import React from 'react'

function SignUp() {

    const login = () => {
        console.log('Sign in button was click');
      }
    
      const emailupdate =(e)=>{
        const updatedemail = e.target.value;
        // console.log({email});
      }
    
      const passwordupdate=(e)=>{
        const updatedpassword = e.target.value;
        // console.log({password});
      }

      const nameupdate=(e)=>{
        const updatedname = e.target.value;
      }

  return (
    <div className=" main ">
      <div className='back'>
    <div className=" login-body__form grid place-items-center min-h-screen">
      <h1 
      className='text-white text-3xl font-bold mb-8'
      >Sign Up</h1>
      <div className="login-body__input mb-8">

        <input type="text" placeholder="Email or phone number"
        className='bg-gray-700 rounded-md text-white text-lg py-2 px-4 w-86' 
        onChange={emailupdate}/>
      </div>
      <div className="login-body__input mb-8">

        <input type="text" placeholder="Enter Your Name"
        className='bg-gray-700 rounded-md text-white text-lg py-2 px-4 w-86' 
        onChange={nameupdate}/>
      </div>
      <div className="login-body__input  mb-8">
        <input type="password" placeholder="Add Your Password" 
        onChange={passwordupdate}
        className='bg-gray-700 rounded-md text-white text-lg py-2 px-4 w-86'/>
      </div>
      <div className="login-body__input  mb-8">
        <input type="password" placeholder="Re-Enter Your Password" 
        onChange={passwordupdate}
        className='bg-gray-700 rounded-md text-white text-lg py-2 px-4 w-86'/>
      </div>
      <button className="login-body__submit-btn bg-red-600 rounded-md text-white text-lg font-bold py-2 px-4 w-full mt-8">
        Sign Up</button>
      <div 
      className="login-body__options  grid text-sm font-medium grid-cols-2 mt-4 mb-10">
        <span 
        className='flex items-center justify-start cursor-pointer text-gray-500 mx-2'>
          Remember me</span>
        <span 
        className="flex items-center justify-start cursor-pointer text-gray-500 mx-2">Need help?</span>
      </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
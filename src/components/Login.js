import React, { useState } from 'react'
import { firebaseAuth } from '../firebase/firebase';

function Login() {

  const [email,setEmail]=useState();
  const [password,setpassword]=useState();

  const login = () => {
    console.log('Sign in button was click');
  }

  const emailupdate =(e)=>{
    const updatedemail = e.target.value;
    setEmail(updatedemail);
    // console.log({email});
  }

  const passwordupdate=(e)=>{
    const updatedpassword = e.target.value;
    setpassword(updatedpassword);
    // console.log({password});
  }

  const sendtofirebase =()=>{
    firebaseAuth.signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log({user});
    })
    .catch((error)=>{
      console.log(error);
    });
  }


  return (
    <div 
    className=" main ">
      <div 
      className='back'>
    <div 
    className=" login-body__form grid place-items-center min-h-screen">
      <h1 
      className='text-white text-3xl font-bold mb-8'
      >Sign In</h1>
      <div 
      className="login-body__input mb-8">

        <input 
        type="text" 
        placeholder="Email or phone number"
        className='bg-gray-700 rounded-md text-white text-lg py-2 px-4 w-86' 
        onChange={emailupdate}/>
      </div>
      <div 
      className="login-body__input  mb-8">
        <input 
        type="password" 
        placeholder="Password" 
        onChange={passwordupdate}
        className='bg-gray-700 rounded-md text-white text-lg py-2 px-4 w-86'/>
      </div>
      <button 
      className="login-body__submit-btn bg-red-600 rounded-md text-white text-lg font-bold py-2 px-4 w-full mt-8" onClick={sendtofirebase}>
        Sign In</button>
      <div 
      className="login-body__options  grid text-sm font-medium grid-cols-2  mt-10">
        <span 
        className='flex items-center justify-start cursor-pointer text-gray-500'>
          Remember me</span>
        <span 
        className="login-body__need-help flex items-center text-gray-500 justify-end cursor-pointer">Need help?</span>
      </div>
      <div 
      className="login-body__footer">
        <div 
        className="login-body__fb flex items-center text-sm justify-center">
          <img 
          className='h-8'
          src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" 
          alt="fb" />

          <span 
          className='text-black bg-white font-bold p-1'>
            Login with Facebook</span>
        </div>
        <div 
        className="login-body__new-to-nl login-body__new-to-nl text-gray-600 text-lg font-medium mt-4 ml-20">

          <span 
          className='text-gray-500 ml-1 cursor-pointer '>
            New to Netflix ?</span>

          <span 
          className="login-body__sign-up text-gray-500">
            Sign up now.</span>
        </div>
        <div 
        className="login-body__google_captcha  text-gray-600 text-sm mt-4">

          This page is protected by Google reCAPTCHA to ensure you're not a bot.

          <span 
          className="login-body__learn-more text-blue-500 cursor-pointer">
            Learn more.</span>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
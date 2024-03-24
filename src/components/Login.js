import React from 'react'
import Header from './Header';
import { useState } from 'react';

  const Login = () => {
  const [isSignInForm , setIsSignInForm] =useState(true);
  const toggleSignInForm=()=>{
       setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">  
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg "
        alt="logo"
        />
        </div>
        <form className= "w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-50">
          
          <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
          <input
            
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
          
          <input type='text' placeholder='Email address' className='p-2 my-2 w-full  rounded-lg bg-gray-600'></input>
          <input type="password" placeholder='Password' className='p-2 my-2 w-full rounded-lg bg-gray-600'></input>
           
           <button className='p-4 my-6 bg-red-600 rounded-lg w-full'>
           {isSignInForm?"Sign In":"Sign Up"} 
           </button>
          
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm 
             ?"New to Netfkix sign up Now"
             :"Already registered? Sign In Now"},
          </p>
        </form>
      
    </div>
  )
}

export default Login;
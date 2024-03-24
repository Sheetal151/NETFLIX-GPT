import React, { useRef } from 'react'
import Header from './Header';
import { useState } from 'react';
import { checkValidData } from '../utils/Validate';
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,  updateProfile,
} from "firebase/auth";
import {  USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
//import {  useNavigate } from 'react-router-dom';

  const Login = () => {
  const [isSignInForm , setIsSignInForm] =useState(true);
  const [errorMessage, setErrorMessage]=useState(null);
  //const navigate=useNavigate();
  const dispatch = useDispatch();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null)

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
       createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        )
        .then((userCredential) => {
        
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
          //console.log(user);
         // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    
    else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
     )
      .then((userCredential) => {
         //Signed in
         const user = userCredential.user;
        // console.log(user);

       // navigate("/browse");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      })
    }
  }

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
        <form 
         onSubmit={(e) => e.preventDefault()}
         className= "w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-50 ">
          
          <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
          
          <input
            ref={email}
           type='text' placeholder='Email address' className='p-2 my-2 w-full  rounded-lg bg-gray-600'></input>
          <input
           ref={password}
           type="password" placeholder='Password' className='p-2 my-2 w-full rounded-lg bg-gray-600'></input>

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
           <button className='p-4 my-6 bg-red-600 rounded-lg w-full'
           onClick={handleButtonClick} >
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
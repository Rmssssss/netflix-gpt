import React, { useState } from 'react' 
import Header from './Header'


const Login = () => {

         const[signInForm,setSignInForm]=useState(true);

        const toggleSignInForm = () => {
        setSignInForm(!signInForm);
    }
  return (
    <div>
    <Header/>
        <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" />
      </div>
      <form 
      className='absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80'>

        <h1 className='font-bold text-3xl py-4'>{signInForm? "Sign In": "Sign Up"}</h1>

        
       {!signInForm && (<input 
         type='text'
          placeholder='FullName' 
          className='my-4 p-2 w-full bg-gray-700'>
        </input>)}

        <input 
         type='text'
          placeholder='Email Address' 
          className='my-4 p-2 w-full bg-gray-700'>
        </input>

        <input
         type='password'
          placeholder='Password'
           className='my-4 p-2 w-full bg-gray-700'>
        </input>

        <button 
        className='my-6 p-4 bg-red-700 w-full rounded-lg'>
        {signInForm? "Sign In": "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' 
        onClick={toggleSignInForm}>
               {signInForm? " New to Netflix?  Sign In Now":
                "Already A User? Sign In Now"}
          </p>
      </form>

     
    </div>
  );
};

export default Login

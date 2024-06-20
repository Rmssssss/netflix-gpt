import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate=useNavigate();

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //Validate the fiorm data over here

    // checkValiData();
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
     
    );
    // console.log(message);
    setErrorMessage(message);
    if (message) return;
    ///line 30 meaning is if password or email is not valid then simply return from here don't go ahead

    if (!signInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          navigate("/browse"); 
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  //Login over here where we created the form and the background image over here
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
     
         {/* over here this thing only worls when sign up forms appear */}
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName"
            className="my-4 p-2 w-full bg-gray-700"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 p-2 w-full bg-gray-700"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-gray-700"
        ></input>

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="my-6 p-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? " New to Netflix?  Sign In Now"
            : "Already A User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

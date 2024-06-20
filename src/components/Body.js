import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import { auth } from '../utils/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { remove } from 'firebase/database';


const Body = () => {

  const dispatch=useDispatch();


     const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },

      ]);
   
        useEffect(()=>{

          onAuthStateChanged(auth, (user) => {
            if (user) {
            
              const {uid,email,userName} = user.uid;
              dispatch(addUser({uid:uid,email:email,userName:userName}));

              // ...
            } else {
              // User is signed out
              // ...

              dispatch(removeUser());
            }
          });
          
        },[]);

  return (
    <div>
  <RouterProvider router={appRouter}></RouterProvider>


    </div>
  )
}

export default Body

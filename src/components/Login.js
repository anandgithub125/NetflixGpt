import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validiate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { photoAvtar, backgroundImg } from "../utils/constent";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [err, setErr] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch()

  // console.log(checkValidation);
  const formHandler = () => {
    const emailValue = email.current?.value || "";
  const passwordValue = password.current?.value || "";
  const nameValue = name.current?.value || "";
    const message = checkValidation(
      emailValue,
      passwordValue,
      nameValue
    );
    setErr(message);
    if(message) return;
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, emailValue,
        passwordValue, nameValue)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameValue, photoURL: photoAvtar

        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
                  dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoAvtar}))
                  console.log(photoURL)
        }).catch((error) => {
         
          setErr(error.message)
        });
        console.log("userSignUp",user)
        console.log(passwordValue)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorCode +"-"+ errorMessage)
        // ..
      });
    } else {
      signInWithEmailAndPassword(auth, emailValue,
        passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userSignUp", user)
        console.log(passwordValue)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorCode +"-"+ errorMessage)
      });
    
    }
    console.log(err);
  };

  return (
    <div>
      <Header />
      <div className="position: absolute">
        <img
          src={backgroundImg}
          alt="backgroundImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="position: absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-md opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-600"
            type="text"
            placeholder="Enter Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-600"
          type="text"
          placeholder="Enter Email"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-600"
          type="password"
          placeholder="Enter password"
        />
        {err && <p className="text-red-700">{err}</p>}
        <button onClick={formHandler} className="p-4 my-4 bg-blue-700 w-full ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already register? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
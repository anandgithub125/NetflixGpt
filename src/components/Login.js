import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validiate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [err, setErr] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");

  console.log(checkValidation);
  const formHandler = () => {
    // Validiate(email, password)
    const message = checkValidation(
      email.current.value,
      password.current.value,
      name.current.value
    );
    console.log(message);
    setErr(message);
  };

  return (
    <div>
      <Header />
      <div className="position: absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_medium.jpg"
          alt="backgroundImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="position: absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-md opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignUp ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignUp && (
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
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "New to Netflix? Sign up now"
            : "Already register? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

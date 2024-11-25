import React, {useState} from "react";
import Header from "./Header";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(true);
  
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
      <form className="position: absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-md opacity-80">
      <h1 className="text-3xl font-bold py-4">{isSignUp? "Sign In": "Sign Up"} </h1>
     {isSignUp &&  <input className="p-4 my-4 w-full" type="text" placeholder="Enter Full Name" />}
        <input className="p-4 my-4 w-full" type="text" placeholder="Enter Email" />
        <input className="p-4 my-4 w-full" type="password" placeholder="Enter password"/>
        <button className="p-4 my-4 bg-blue-700 w-full ">{isSignUp? "Sign In": "Sign Up"}</button>
        <p className="py-4" onClick={()=>setIsSignUp(!isSignUp)}>{isSignUp?"New to Netflix? Sign up now": "Already register? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;

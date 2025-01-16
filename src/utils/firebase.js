// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZuQ2Nh0w0ssgAe2l62Iv0PXDSUolfIcw",
  authDomain: "netflixgpt-c720b.firebaseapp.com",
  projectId: "netflixgpt-c720b",
  storageBucket: "netflixgpt-c720b.firebasestorage.app",
  messagingSenderId: "657057314122",
  appId: "1:657057314122:web:e34040f7f2f566fec67db3",
  measurementId: "G-2HN01195D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth();
 export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA5qxDSIr8MTbSQE6ZllLNy6Qd4C7PlzpA",
    authDomain: "auth-a3717.firebaseapp.com",
    projectId: "auth-a3717",
    storageBucket: "auth-a3717.appspot.com",
    messagingSenderId: "956908090049",
    appId: "1:956908090049:web:c70ec054318138f71c1a40",
    measurementId: "G-K7XBDDGMCT"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

import React, { useRef } from 'react'
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import auth from './firebase';

function Form() {
    const email = useRef('')
    const password = useRef('')

    function signin(event) {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
        .catch((error) => {
                alert(error.message);
            });
        }
    
    function login( event ) {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .catch((error) => {
                alert(error.message);
            });
        }

  return (
        <form  className='form'>
            <label for="email">Email</label><br />
            <input type="email" ref={email} placeholder="Enter email" name='email' required/><br />
            <label for="psw">Password</label><br />
            <input type="password"  ref={password} placeholder="Enter Password" name="psw" required></input><br />
            <button onClick={login}>LogIn</button>
            <button onClick={signin}>SignIn</button>
        </form>
  )
}

export default Form
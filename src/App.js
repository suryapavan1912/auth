import Dashboard from "./dashboard";
import Form from "./form";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";
import { useEffect, useState } from "react";

function App() {

  const [user,setuser] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(true)
      } else {
        setuser(false)
      }
    });
  },[])

  return (
      user ? <Dashboard /> : <Form />
  );
}

export default App;

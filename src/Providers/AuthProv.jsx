/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthCon = createContext(null);

const auth = getAuth(app);

const AuthProv = ({ children }) => {
  
    const [user, setuser] = useState(null);
    const [loading,setloading]=useState(true);

  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email,password)=>
  {
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const userinfo = { user,loading,createuser,signin };
  return (
    <div>
      <AuthCon.Provider value={userinfo}>{children}</AuthCon.Provider>
    </div>
  );
};

export default AuthProv;

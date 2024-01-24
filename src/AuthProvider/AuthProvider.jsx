import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    

    const [userEmail, setUserEmail] = useState();

    const SignInUser = (email) =>{
        setUserEmail(email);
        console.log(email);
    }
    
    const authInfo = {
        SignInUser,
        userEmail:userEmail
    }
    return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
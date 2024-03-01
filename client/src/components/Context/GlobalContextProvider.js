import { useState } from "react";
import GlobalContext from "./GlobalContext";
import React from "react";
// import dotenv from '../../../dotenv';

// dotenv.config();


const GlobalContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(false);

    const PORT_URL = process.env.REACT_APP_URL;
    
    const logInApi = `${PORT_URL}/user/login`
    const signUpApi = `${PORT_URL}/user/signup`


    return (
        <GlobalContext.Provider value={{
            isLoggedIn, setIsLoggedIn, userType, setUserType,
            logInApi, signUpApi,PORT_URL
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
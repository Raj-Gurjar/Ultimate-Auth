import { useState } from "react";
import GlobalContext from "./GlobalContext";
import React from "react";
// import dotenv from '../../../dotenv';

// dotenv.config();


const GlobalContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(false);

    const [userData,setUserData] = useState([]);

    const PORT_URL = process.env.REACT_APP_URL;
    
    const logInApi = `${PORT_URL}/user/login`
    const signUpApi = `${PORT_URL}/user/signup`
    const getAllUsers = `${PORT_URL}/user/getAllUsers`
    const getUserById = `${PORT_URL}/user/getUser`


    return (
        <GlobalContext.Provider value={{
            isLoggedIn, setIsLoggedIn, userType, setUserType,
            logInApi, signUpApi, getAllUsers , getUserById ,userData,setUserData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
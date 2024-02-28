import { Children, useState } from "react";
import GlobalContext from "./GlobalContext";
import React from "react";

const GlobalContextProvider = ({children}) =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(false);

    const PORT = 4001;
    const PORT_URL = `http://localhost:${PORT}/api`

    const logInApi = `${PORT_URL}/user/signin`
    const signUpApi = `${PORT_URL}/user/signup`


    return (
        <GlobalContext.Provider value={{
            isLoggedIn, setIsLoggedIn, userType, setUserType,
            logInApi, signUpApi
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
import React, { useContext, useEffect } from 'react'
import GlobalContext from '../Context/GlobalContext';


export default function UserProfile() {

    const { userType, setUserType, setIsLoggedIn, logInApi, getUserById, getAllUsers,
        userData, setUserData } = useContext(GlobalContext);


    async function getUser() {
        try {
            const response = await fetch(`${getAllUsers}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            const userDataExtracted = await response.json();
            const insideData = userDataExtracted
            setUserData(insideData)
            console.log('user data:', userData);

        }
        catch (error) {

            console.log('Error! Not able to get data', error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    console.log('user data:', userData);
    console.log('user data inside:', userData.data[3].userName);

    return (
        <div>
            <div>Hii ! {userType ? "Admin" : 'Customer'}</div>
            <div>Name1 : {userData.data[2].userName}</div>
            {userData && userData.data.map(user => (
                <div key={user._id}>Name: {user.firstName}</div>
            ))}
        </div>
    )
}

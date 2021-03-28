import React, { useState, useEffect } from 'react'
import Firebase from './firebase.js'

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        Firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        });
    }, []);

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
};


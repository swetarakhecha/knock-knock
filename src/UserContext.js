import React, { useState, useEffect } from 'react'
import Firebase from './firebase.js'

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [currentScore, setCurrentScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        Firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        });
    }, []);

    return <UserContext.Provider
        value={{
            currentUser,
            currentScore,
            currentQuestion,
            setCurrentScore,
            setCurrentQuestion
        }}>{children}</UserContext.Provider>
};


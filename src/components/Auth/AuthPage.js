import React, { useContext } from 'react'
import firebase from 'firebase'
import { UserContext } from 'C:/Users/asus/Desktop/knock-knock/src/UserContext.js'

export const AuthPage = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const currentUser = useContext(UserContext);

    const authWithgoogle = () => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            console.log("Success")
        }).catch((error) => {
            console.log("Error")
        })
    }

    const style = {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: "white",
        width: "6em",
        backgroundColor: "red",
        padding: "10px 20px",
        cursor: 'pointer',
        border: 'none',
        borderRadius: "7px",
        position: "absolute",
        bottom: "5%",
        fontSize: '1em'
    };

    return (
        <>
            {!currentUser &&
                <button
                    onClick={authWithgoogle}
                    style={style}
                >Login</button>}

        </>
    )
}
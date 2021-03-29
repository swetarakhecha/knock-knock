import React, { useContext } from 'react'
import firebase from 'firebase'
import { UserContext } from 'C:/Users/asus/Desktop/knock-knock/src/UserContext.js'

const AuthPage = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const user = useContext(UserContext);

    const authWithgoogle = () => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            console.log("Success")
        }).catch((error) => {
            console.log("Error")
        })
    }

    const style = {
        margin: "10px 20px",
        color: "white",
        width: "6em",
        backgroundColor: "#b81911",
        padding: "10px 20px",
        cursor: 'pointer',
        border: 'none',
        borderRadius: "7px",
        fontSize: '1em'
    };

    return (
        <>
            {!user.urrentUser &&
                <button
                    onClick={authWithgoogle}
                    style={style}
                >Login</button>}

        </>
    )
}

export default AuthPage
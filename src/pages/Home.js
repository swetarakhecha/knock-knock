import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { AuthPage } from '../components';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

    const user = useContext(UserContext);

    const style = {
        margin: "10px 20px",
        color: "white",
        width: "6em",
        backgroundColor: "#10b5e3",
        padding: "10px 20px",
        cursor: 'pointer',
        border: 'none',
        borderRadius: "7px",
        fontSize: '1em',
        outline: 'none'
    };

    return (
        <div className='holder'>
            {user.currentUser && <img src={user.currentUser.photoURL} alt={user.currentUser.displayName} className='dp'/>}
            <h1>Knock Knock</h1>
            <div className='btngrp'>
                <Link to='/quiz'>
                    <button style={style} className='start'>Start</button>
                </Link>
                {!user.currentUser && <AuthPage />}
            </div>
        </div>
    )
}

export default Home
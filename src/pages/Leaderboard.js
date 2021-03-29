import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Firebase from '../firebase.js'
import './Leaderboard.css'

function Leaderboard() {
    const database = Firebase.database();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const rootRef = database.ref('/scores/');
        rootRef.on('value', function (snapshot) {
            var tutorials = [];

            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var data = childSnapshot.val();
                tutorials.push({ key: key, name: data.name, score: data.score });
                setPlayers(tutorials);
            });
        });
    }, [])

    return (
        <div className='holder'>
            <h2 id='leaderboard'>Leaderboard</h2>
            <div className='player--container'>
                {players.map(player => {
                    return (
                        <div className='playerRow'>
                            <p>{player.name}</p>
                            <p>{player.score}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Leaderboard

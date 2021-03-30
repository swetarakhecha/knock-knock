import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Firebase from '../firebase.js'
import './Leaderboard.css'

function Leaderboard() {
    const database = Firebase.database();
    const [players1, setPlayers1] = useState([]);
    const [players2, setPlayers2] = useState([]);

    useEffect(() => {
        const rootRef1 = database.ref('/scores/day1');
        rootRef1.on('value', function (snapshot) {
            var tutorials = [];

            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var data = childSnapshot.val();
                tutorials.push({ key: key, name: data.name, score: data.score });
                setPlayers1(tutorials);
            });
        });

        const rootRef2 = database.ref('/scores/day2');
        rootRef2.on('value', function (snapshot) {
            var tutorials = [];

            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var data = childSnapshot.val();
                tutorials.push({ key: key, name: data.name, score: data.score });
                setPlayers2(tutorials);
            });
        });
    }, [])

    return (
        <div className='holder'>
            <h2 id='leaderboard'>Leaderboard</h2>
            {
                (JSON.stringify(players1) === JSON.stringify([])) ?
                    <h3>No scores yet for day 1!!</h3>
                    :
                    <div>

                        <h3>Day 1</h3>
                        <div className='player--container'>
                            {players1.map(player => {
                                return (
                                    <div className='playerRow'>
                                        <p>{player.name}</p>
                                        <p>{player.score}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }

            {
                (JSON.stringify(players2) === JSON.stringify([])) ?
                    <h3>No scores yet for Day 2!!</h3>
                    :
                    <div>
                        <h3>Day 2</h3>
                        <div className='player--container'>
                            {players2.map(player => {
                                return (
                                    <div className='playerRow'>
                                        <p>{player.name}</p>
                                        <p>{player.score}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }
        </div>
    )
}

export default Leaderboard

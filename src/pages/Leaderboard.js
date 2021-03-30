import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Firebase from '../firebase.js'
import './Leaderboard.css'
import _ from 'lodash';

function Leaderboard() {
    const database = Firebase.database();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const secondDay = new Date('April 2, 2021 00:00:00 GMT+0530').getTime();
        const now = new Date().getTime();
        if (now > secondDay) {
            const rootRef2 = database.ref('/scores/day2/');
            rootRef2.on('value', function (snapshot) {
                var tutorials = [];

                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var data = childSnapshot.val();
                    tutorials.push({ key: key, name: data.name, score: data.score });
                    setPlayers(tutorials);
                });
            });
        }
        else {
            const rootRef1 = database.ref('/scores/day1/');
            rootRef1.on('value', function (snapshot) {
                var tutorials = [];
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var data = childSnapshot.val();
                    tutorials.push({ key: key, name: data.name, score: data.score });
                    setPlayers(_.uniqBy(tutorials, elem => [tutorials.name, tutorials.name].join()));
                });
            });
        }

        // const distinctValues = _.uniqBy(players, elem => [elem.name, elem.name].join());
        // setPlayers(distinctValues);
    }, [])

    console.log(players);

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

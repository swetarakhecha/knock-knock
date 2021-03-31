import React from 'react'
import React, { useState } from 'react';
import firebase from 'firebase'
import Firebase from './firebase.js'
export default function App() {
    const questions = [
        {
			questionText: 'What is the missing number? I6, 06, 68, 88, 98',
			answerOptions: [
				{ answerText: '85', isCorrect: false },
				{ answerText: '87', isCorrect: true },
				{ answerText: '92', isCorrect: false },
				{ answerText: '99', isCorrect: false },
			],
		},
        {
			questionText: 'There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?',
			answerOptions: [
				{ answerText: '240', isCorrect: false },
				{ answerText: '369', isCorrect: false },
				{ answerText: '682', isCorrect: false },
				{ answerText: '141', isCorrect: true },
			],
		},
        {
			questionText: 'A ship anchored in a port has a ladder which hangs over the side. The length of the ladder is 200cm, the distance between each rung in 20cm and the bottom rung touches the water. The tide rises at a rate of 10cm an hour. When will the water reach the fifth rung?',
			answerOptions: [
				{ answerText: '10 hours later', isCorrect: false },
				{ answerText: '7 hours later', isCorrect: false },
				{ answerText: '5 hours later', isCorrect: false },
				{ answerText: 'Never', isCorrect: true},
			],
		},
        {
			questionText: 'Look at this series: 46, 44, 40, 38, 34, … What number should come next?',
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '32', isCorrect: true },
				{ answerText: '28', isCorrect: false },
				{ answerText: '26', isCorrect: false },
			],
		},
        {
			questionText: 'At a party, everyone shook hands with everybody else. There were 496 handshakes. How many people were at the party?',
			answerOptions: [
				{ answerText: '32', isCorrect: true },
				{ answerText: '35', isCorrect: false },
				{ answerText: '38', isCorrect: false },
				{ answerText: '29', isCorrect: false },
			],
		},
        {
			questionText: 'When four coins are tossed simultaneously, in _______ number of the outcomes at most two of the coins will turn up as heads',
			answerOptions: [
				{ answerText: '13', isCorrect: false },
				{ answerText: '11', isCorrect: true },
				{ answerText: '17', isCorrect: false },
				{ answerText: '19', isCorrect: false },
			],
		},
        {
			questionText: '1A: 2B: 3D: 5H: ?',
			answerOptions: [
				{ answerText: '8I', isCorrect: false },
				{ answerText: '9L', isCorrect: false },
				{ answerText: '8P', isCorrect: true },
				{ answerText: '9S', isCorrect: false },
			],
		},
        {
			questionText: 'What is the sum of the series:1/(1*2) + 1/(2*3)+ 1/(3*4)+………….+ 1/(100*101)',
			answerOptions: [
				{ answerText: '1/100', isCorrect: true },
				{ answerText: '99/100', isCorrect: false },
				{ answerText: '100/101', isCorrect: false },
				{ answerText: '101/102', isCorrect: false },
			],
		},
        {
			questionText: 'The probability of finding the parking slot occupied is 1/3.You find it empty for 9 consecutive days. Find the probability that it will be empty on the 10th day',
			answerOptions: [
				{ answerText: '1/3', isCorrect: true },
				{ answerText: '3/5', isCorrect: false },
				{ answerText: '7/11', isCorrect: false },
				{ answerText: '5/16', isCorrect: false },
			],
		},
        {
			questionText: 'If 16 = 11, 25 = 12, 36 = 15, then 49 = ?',
			answerOptions: [
				{ answerText: '17', isCorrect: false },
				{ answerText: '14', isCorrect: false },
				{ answerText: '20', isCorrect: true },
				{ answerText: '19', isCorrect: false },
			],
		},
        {
			questionText: 'From the alternatives, select the set which is most alike the set (23, 29, 31)',
			answerOptions: [
				{ answerText: '(17, 21, 29)', isCorrect: false },
				{ answerText: '(31, 37, 49)', isCorrect: false },
				{ answerText: '(13, 15, 23)', isCorrect: false },
				{ answerText: '(41, 43, 47)', isCorrect: true },
			],
		},
        {
			questionText: '5.	A man is climbing up a mountain which is inclined. He has to travel 100 km to reach the top of the mountain. Every day He climbs up 2 km forward in the day time. Exhausted, he then takes rest there at night time. At night, while he is asleep, he slips down 1 km backwards because the mountain is inclined. Then how many days does it take him to reach the mountain top?',
			answerOptions: [
				{ answerText: '97 days', isCorrect: false },
				{ answerText: '99 days', isCorrect: true },
				{ answerText: '95 days', isCorrect: false },
				{ answerText: '89 days', isCorrect: false },
			],
		},
        {
			questionText: 'If ‘+’ means ‘×’, ‘-‘ means ‘+’, ‘×’ means ‘÷’ and ‘÷’ means ‘-‘ then find the value of: 6 – 9 + 8 × 3 ÷ 20 = ……',
			answerOptions: [
				{ answerText: '18', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '34', isCorrect: false },
				{ answerText: '10', isCorrect: true },
			],
		},
        {
			questionText: 'The number of girls who do wear a watch
			is double the number who don't.
			But the number of boys who do not wear a watch
			is double the number who do.
			If I tell you the number of girls in my class
			is double the number of boys,
			Can you tell me the number I teach? Here's a clue:
			More than 20; below 32!',
			answerOptions: [
				{ answerText: '24', isCorrect: false },
				{ answerText: '31', isCorrect: false },
				{ answerText: '27', isCorrect: true },
				{ answerText: '29', isCorrect: false },
			],
		},
        {
			questionText: 'On a 12-hour digital clock, what is the smallest interval between two times that are palindromic (can be read forwards and backwards as the same number)?',
			answerOptions: [
				{ answerText: '1 minute', isCorrect: false },
				{ answerText: '5 minutes', isCorrect: false },
				{ answerText: '2 minutes', isCorrect: true },
				{ answerText: '7 minutes', isCorrect: false },
			],
		},
    ];
    const [currentQuestion, setCurrentQuestion] = useState(user.currentQuestion);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(user.currentScore);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            user.setCurrentScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        user.setCurrentScore(currentQuestion + 1);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            const rootRef = database.ref('/scores/day2/');
            const autoID = rootRef.push().key;
            rootRef.child(autoID).set({
                score: score,
                email: user.currentUser.email,
                name: user.currentUser.displayName
            })

            const attemptRef = database.ref('/attempted/day2/');
            const attemptID = attemptRef.push().key;
            attemptRef.child(attemptID).set({
                email: user.currentUser.email
            })
        }
    };
    return (
        <div className='quizContainer'>
            <div className='quiz'>
                {(showScore || user.currentQuestion === questions.length) ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='option' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

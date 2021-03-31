import React from 'react'
import React, { useState } from 'react';
import firebase from 'firebase'
import Firebase from './firebase.js'
export default function App() {
	const questions = [
		{
			questionText: 'The probability that it is Friday and that a student is absent is 0.03. Since there are 5 school days in a week, the probability that it is Friday is 0.2. What is the probability that a student is absent given that today is Friday?',
			answerOptions: [
				{ answerText: '10%', isCorrect: false },
				{ answerText: '15%', isCorrect: true },
				{ answerText: '12%', isCorrect: false },
				{ answerText: '13%', isCorrect: false },
			],
		},
		{
			questionText: 'You have two light bulbs in a 100-story building. You want to find out what floor the bulb will break on, using the least number of drops',
			answerOptions: [
				{ answerText: '50', isCorrect: false },
				{ answerText: '16', isCorrect: true },
				{ answerText: '09', isCorrect: false },
				{ answerText: '12', isCorrect: false },
			],
		},
		{
			questionText: 'A bloke in a restaurant decides to challenge a waiter. He asks him to bring a glass, plate, water, a match and a lemon wedge. He then proceeds to pour enough water onto the plate to cover it."If you, good sir, can get the water into the glass from the plate without touching or moving it, you'll get $100", he challenges the waiter."You can use all of the items here".Shortly after the waiter walks away with the cash. What did he do?',
			answerOptions: [
				{ answerText: 'Created a vacuum in glass', isCorrect: true },
				{ answerText: 'Created a hole in glass', isCorrect: false },
				{ answerText: 'Placed the glass upside down', isCorrect: false },
				{ answerText: 'Filled the glass', isCorrect: false },
			],
		},
		{
			questionText: 'The letters of the word COCHIN are permuted and all the permutations are arranged in alphabetically in a dictionary. The number of words that appear before the word COCHIN is?',
			answerOptions: [
				{ answerText: '80', isCorrect: false },
				{ answerText: '84', isCorrect: false },
				{ answerText: '90', isCorrect: false },
				{ answerText: '96', isCorrect: true },
			],
		},
        {
			questionText: 'Given 9 balls, all of which weigh the same except for one, what is the minimum number of weighing necessary to find the ball with the different weight?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '6', isCorrect: false },
			],
		},
        {
			questionText: 'Imagine that you have three boxes, one containing two black marbles, one containing two white marbles, and the third, one black marble and one white marble. The boxes were labelled for their contents - BB, WW, BW - but someone has switched the labels so that every box is now incorrectly labelled. You are allowed to take one marble at a time out of any box, without looking inside, and by this process of sampling, you need to determine the contents of all three boxes. What is the smallest number of drawings needed to do this?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '1', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
        {
			questionText: 'What five-letter word becomes shorter when you add two letters to it?',
			answerOptions: [
				{ answerText: 'Large', isCorrect: false },
				{ answerText: 'Short', isCorrect: true },
				{ answerText: 'Great', isCorrect: false },
				{ answerText: 'Shorter', isCorrect: false },
			],
		},
        {
			questionText: 'The water level in a reservoir is low, but doubles every day. It takes 60 days to fill the reservoir. How long does it take for the reservoir to become half full?',
			answerOptions: [
				{ answerText: '59', isCorrect: true },
				{ answerText: '30', isCorrect: false },
				{ answerText: '54', isCorrect: false },
				{ answerText: '31', isCorrect: false },
			],
		},
        {
			questionText: 'If 5@6=61 and 8@10=164, then 7@9=?',
			answerOptions: [
				{ answerText: '125', isCorrect: false },
				{ answerText: '63', isCorrect: false },
				{ answerText: '130', isCorrect: true },
				{ answerText: '95', isCorrect: false },
			],
		},
        {
			questionText: 'What is 3/7 chicken, 2/3 cat, and 2/4 goat?',
			answerOptions: [
				{ answerText: 'Biryani', isCorrect: false },
				{ answerText: 'Egg', isCorrect: false },
				{ answerText: 'Chicago', isCorrect: true },
				{ answerText: 'Chichat', isCorrect: false },
			],
		},
        {
			questionText: 'Guess the next three letters in the series GTNTL.',
			answerOptions: [
				{ answerText: 'ITS', isCorrect: true },
				{ answerText: 'ENT', isCorrect: false },
				{ answerText: 'ECG', isCorrect: false },
				{ answerText: 'IPS', isCorrect: false },
			],
		},
        {
			questionText: 'What is next in this sequence of numbers: 1, 11, 21, 1211, 111221, 312211',
			answerOptions: [
				{ answerText: '13311312', isCorrect: false },
				{ answerText: '13112221', isCorrect: true },
				{ answerText: '14563466', isCorrect: false },
				{ answerText: '13459876', isCorrect: false },
			],
		},
        {
			questionText: 'A pencil with a pentagonal cross section has the maker's logo imprinted on one of its five faces. If the pencil is rolled on the table, what is the probability that it stops with the logo facing up?',
			answerOptions: [
				{ answerText: '20%', isCorrect: false },
				{ answerText: '10%', isCorrect: false },
				{ answerText: '60%', isCorrect: false },
				{ answerText: '0', isCorrect: true },
			],
		},
        {
			questionText: 'One carafe contains a litter of wine, another a litter of water. A spoonful of wine is moved from the wine carafe to the water carafe and mixed in. A spoonful of the mixture is then moved from the water carafe to the wine carafe',
			answerOptions: [
				{ answerText: 'There is more water in the wine carafe than wine in the water one.', isCorrect: false },
				{ answerText: 'There is more wine in the water carafe than water in the wine carafe.', isCorrect: false },
				{ answerText: 'There is the same in both.', isCorrect: true },
				{ answerText: 'No idea-I just need wine now.', isCorrect: false },
			],
		},
        {
			questionText: 'A visitor points to a portrait on the wall and asks who it is. "Brothers and sisters, have I none," says the host, "but that man's father is my father's son." Who is pictured?',
			answerOptions: [
				{ answerText: 'The host's grandson', isCorrect: false },
				{ answerText: 'The host's grandpa', isCorrect: false },
				{ answerText: 'The host's father', isCorrect: false },
				{ answerText: 'The host's son', isCorrect: true },
			],
		},

	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
	}

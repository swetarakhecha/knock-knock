import React from 'react'
import firebase from 'firebase'
import Firebase from './firebase.js
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
			questionText: 'If the LCM of p, q is r2t4s2, where r, s, t are prime numbers and p, q are the positive integers then the number of ordered pairs (p, q)?',
			answerOptions: [
				{ answerText: '210', isCorrect: false },
				{ answerText: '225', isCorrect: true },
				{ answerText: '275', isCorrect: false },
				{ answerText: '250', isCorrect: false },
			],
		},
		{
			questionText: 'The number of arrangements of the letters of the word BANANA in which the two Ns do not appear adjacently?',
			answerOptions: [
				{ answerText: '40', isCorrect: true },
				{ answerText: '44', isCorrect: false },
				{ answerText: '50', isCorrect: false },
				{ answerText: '48', isCorrect: false },
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
			questionText: 'A student is to answer 10 out of 13 questions in an examination such that he must choose at least 4 from the first 5 questions. The number of choices available to him is?',
			answerOptions: [
				{ answerText: '172', isCorrect: false },
				{ answerText: '226', isCorrect: false },
				{ answerText: '196', isCorrect: true },
				{ answerText: '210', isCorrect: false },
			],
		},
        {
			questionText: '8, 81, 1024,? ',
			answerOptions: [
				{ answerText: '7776', isCorrect: false },
				{ answerText: '16384', isCorrect: false },
				{ answerText: '15625', isCorrect: true },
				{ answerText: '19683', isCorrect: false },
			],
		},
        {
			questionText: 'Find the next number:-1,5,23,59,119,209, 335,?',
			answerOptions: [
				{ answerText: '556', isCorrect: false },
				{ answerText: '523', isCorrect: true },
				{ answerText: '509', isCorrect: false },
				{ answerText: '516', isCorrect: false },
			],
		},
        {
			questionText: '. Pointing to Manju, Raju said, “The son of her only brother is the brother of my wife”. How is Manju related to Raju?',
			answerOptions: [
				{ answerText: 'Sister of father-in-law', isCorrect: true },
				{ answerText: 'Mother’s sister', isCorrect: false },
				{ answerText: 'Maternal aunt', isCorrect: false },
				{ answerText: 'Paternal aunt', isCorrect: false },
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
			questionText: 'After walking 6 kms, I turned right and travelled a distance of 2 kms, then turned left and covered a distance of 10 km. In the end I was moving towards the north. From which direction did I start my journey?',
			answerOptions: [
				{ answerText: 'South-West', isCorrect: false },
				{ answerText: 'North', isCorrect: false },
				{ answerText: 'South', isCorrect: true },
				{ answerText: 'North-East', isCorrect: false },
			],
		},
        {
			questionText: 'By how many degrees does the minute hand move in the same time, in which the hour hand moves by 18 degree?',
			answerOptions: [
				{ answerText: '216 degree', isCorrect: true },
				{ answerText: '168 degree', isCorrect: false },
				{ answerText: '196 degree', isCorrect: false },
				{ answerText: '276 degree', isCorrect: false },
			],
		},
        {
			questionText: '. A software engineer has the capability of thinking 100 lines of code in five minutes and can type 100 lines of code in 10 minutes. He takes a break for five minutes after every ten minutes. How many lines of codes will he complete typing after an hour?',
			answerOptions: [
				{ answerText: '220', isCorrect: false },
				{ answerText: '250', isCorrect: true },
				{ answerText: '150', isCorrect: false },
				{ answerText: '200', isCorrect: false },
			],
		},
        {
			questionText: 'A clock seen through a mirror shows 8 o’clock. What is the correct time?',
			answerOptions: [
				{ answerText: '12.00', isCorrect: false },
				{ answerText: '12.40', isCorrect: false },
				{ answerText: '4.00', isCorrect: false },
				{ answerText: '8.00', isCorrect: true },
			],
		},
        {
			questionText: '24.	Assume the ladder is NOT an extension ladder.A 25 ft ladder is placed with its foot 7 ft away from a building. If the top of the ladder slips down 4 ft, how many feet will the bottom slide out?',
			answerOptions: [
				{ answerText: '15', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '17', isCorrect: false },
			],
		},
        {
			questionText: '27.	Between 1000 and 2000 you can get each integer as the sum of non-negative consecutive integers.For example,147+148+149+150+151+152+153 = 1050.There is only one number that you cannot get.What is this number?',
			answerOptions: [
				{ answerText: '1126', isCorrect: false },
				{ answerText: '1426', isCorrect: false },
				{ answerText: '1386', isCorrect: false },
				{ answerText: '1024', isCorrect: true },
			],
		},

	];

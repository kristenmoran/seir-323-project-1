console.log('js is up and running');

//TARGET DATA

//Modal
const modalContainer = document.querySelector('#modal-container');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//Questions Board
// let triviaModal = document.querySelector('.trivia-modal')
let questionsContainer = document.querySelector('#question-container');
//the modal is below
let questionDisplay = document.querySelector('#question-display');
let answerBtns = document.querySelector('#answer-buttons');

//Trivia Game Logic
let currentQuestionIndex = 0;
let nextButton = document.querySelector('#next');

//Styling Attributes
questionDisplay.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 26px; text-align: center; padding-top: 10px"
);

answerBtns.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 26px; text-align: center; padding: 10px; margin-left: 10px"
);

//Music Category
const music = document.querySelector('#music');
//Objects in an array to hold the questions and answers
const musicQuestions = [
	{
		question: '1. Who composed the Four Seasons?',
		options: [
			'A. Wolfgang Amadeus Mozart',
			'B. Johann Sebastian Bach',
			'C. Antonio Vivaldi',
		],
		correctAnswer: 'C',
	},
	{
		question: '2. What year was Abbey Road released?',
		options: ['A. 1971', 'B. 1969', 'C. 1967'],
		correctAnswer: 'B',
	},
	{
		question: "3. What is Elton John's best selling single?",
		options: ['A. Your Song', 'B. Candle in the Wind', 'C. Rocket Man'],
		correctAnswer: 'B',
	},
];

//EVENT LISTENERS

//Modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//Music Category
music.addEventListener('click', startGame);

//Trivia Logic
let score = 0;

//FUNCTIONS

//Modal
function openModal() {
	modalContainer.style.display = 'block';
}

function closeModal() {
	modalContainer.style.display = 'none';
}

//Music Category

// function startGame() {
// 	// display the board
// 	questionsBoard.style.display = 'block';
// 	// //render the first question
// 	let firstQuestion = musicQuestions[0].question;
// 	questionDisplay.innerHTML = firstQuestion;
// 	// //render the choices
// 	// let choices = musicQuestions[0].options;
// 	// answerDisplay.innerHTML = choices;
// 	let choices = musicQuestions[0].options;
// 	answerDisplay.innerHeight = choices;
// 	console.log(choices);
// 	// for (let i = 0; i < musicQuestions.length; i++) {
// 	// 	let currentQuestion = musicQuestions[i].question;
// 	// 	// if (userInput == musicQuestions[i].correctAnswer) {
// 	// 	//     score ++;
// 	// 	//     console.log('correct');
// 	// 	// } else {
// 	// 	// 	console.log('incorrect');
// 	// 	// }
// 	// 	console.log(currentQuestion);
// 	// }
// 	// console.log(score);

// 	// console.log(choices);
// 	displayNextQuestion();
// }

function startGame() {
	questionsContainer.style.display = 'block';
	currentQuestionIndex;
	console.log(currentQuestionIndex);
	displayNextQuestion();
}

// for (let i = 0; i < musicQuestions.length; i++) {
// 	console.log(i);
// }

function displayNextQuestion() {
	//code goes here
	console.log('next question!');
}

// return to home

// for (let i = 0; i < musicQuestions.length - 1; i++) {
//     console.log(i);
//     //after choice is made say if it is correct
//     let playAnswer = musicQuestions[i].correctAnswer;
//     if (playAnswer === musicQuestions[i].correctAnswer) {
//         console.log('correct');
//     } else {
//         //or not correct
//         console.log('incorrect');
//     }
// }

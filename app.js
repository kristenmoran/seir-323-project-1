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

//Styling Attributes
questionDisplay.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 26px; text-align: center; padding-top: 30px"
);

answerBtns.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 26px; text-align: center; padding: 10px; margin-left: 10px"
);

//Music Category
const music = document.querySelector('#music');
//Objects in an array to hold the questions and answers
let musicQuestions = [
	{
		question: '1. Who composed the Four Seasons?',
		choiceA: 'A. Wolfgang Amadeus Mozart',
		choiceB: 'B. Johann Sebastian Bach',
		choiceC: 'C. Antonio Vivaldi',
		correctAnswer: 'C',
	},
	{
		question: '2. What year was Abbey Road released?',
		choiceA: 'A. 1971',
		choiceB: 'B. 1969',
		choiceC: 'C. 1967',
		correctAnswer: 'B',
	},
	{
		question: "3. What is Elton John's best selling single?",
		choiceA: 'A. Your Song',
		choiceB: 'B. Candle in the Wind',
		choiceC: 'C. Rocket Man',
		correctAnswer: 'B',
	},
];

//Trivia Game Logic
//minus one because I don't want to display the correct answer
let previousQuestionIndex = musicQuestions.length - 1;
let currentQuestionIndex = 0;
let score = 0;
// let nextButton = document.querySelector('#next');
let choiceABtn = document.querySelector('#choiceA');
let choiceBBtn = document.querySelector('#choiceB');
let choiceCBtn = document.querySelector('#choiceC');

//EVENT LISTENERS

//Modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//Music Category
music.addEventListener('click', startGame);

//Trivia Logic
choiceABtn.addEventListener('click', checkAnswer);
choiceBBtn.addEventListener('click', checkAnswer);
choiceCBtn.addEventListener('click', checkAnswer);

//FUNCTIONS

//Modal
function openModal() {
	modalContainer.style.display = 'block';
}

function closeModal() {
	modalContainer.style.display = 'none';
}

//Music Category

function startGame() {
	questionsContainer.style.display = 'block';
	currentQuestionIndex;
	console.log(currentQuestionIndex);
	displayQuestion();
}

// for (let i = 0; i < musicQuestions.length; i++) {
// 	console.log(i);
// }

function displayQuestion() {
	//first question
	let trivia = musicQuestions[currentQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	choiceA.innerHTML = trivia.choiceA;
	choiceB.innerHTML = trivia.choiceB;
	choiceC.innerHTML = trivia.choiceC;
	// displaySecondQuestion();
	console.log(currentQuestionIndex);
	//display question
}

function checkAnswer() {
	if (musicQuestions[currentQuestionIndex].correctAnswer) {
		//answer is correct
		alert('correct!');
		console.log('correct');
		// displaySecondQuestion();
	} else {
		//answer is wrong
		// alert('incorrect');
		console.log('incorrect!');
	}
	if (currentQuestionIndex < previousQuestionIndex) {
		currentQuestionIndex++;
		displayQuestion();
	} else {
		// alert('game over. reload the page to play again.');
		returnToHomePage();
	}
}

// return to home
function returnToHomePage() {
	//code for return to category homepage by hiding container
	questionsContainer.style.display = 'none';
}

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

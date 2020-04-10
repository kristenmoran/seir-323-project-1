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
let scoreCounter = document.querySelector('#score-counter');

//Styling Attributes
questionDisplay.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 30px; text-align: center; padding-top: 30px"
);

answerBtns.setAttribute(
	'style',
	'text-align: center; padding: 10px; margin-left: 10px; margin-top: -530px;'
);

scoreCounter.setAttribute(
	'style',
	'font-family: Source Sans Pro, sans-serif; text-align: center; font-size: 30px; padding-top: 30px;'
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
	{
		question: '4. Who composed the music for The Lord of the Rings trilogy?',
		choiceA: 'Howard Shore',
		choiceB: 'John Williams',
		choiceC: 'Alexandre Desplat',
		correctAnswer: 'A',
	},
	{
		question: '5. What was the first K-pop group to perform on SNL?',
		choiceA: 'Girls Generation',
		choiceB: 'BTS',
		choiceC: 'BLACKPINK',
		correctAnswer: 'B',
	},
];

//Sports Category
const sports = document.querySelector('#sports');
let sportsQuestions = [];

//Art Category
const art = document.querySelector('#art');
let artQuestions = [];

//History Category
const history = document.querySelector('#history');
let historyQuestions = [];

//Science Category
const science = document.querySelector('#science');
let scienceQuestions = [];

//Pop! Culture Category

const popCulture = document.querySelector('#pop-culture');
let popCultureQuestions = [];

//Trivia Game Logic
//minus one because I don't want to display the correct answer
let previousQuestionIndex = musicQuestions.length - 1;
let currentQuestionIndex = 0;
let score = 0;

//answer buttons
let choiceABtn = document.querySelector('#A');
let choiceBBtn = document.querySelector('#B');
let choiceCBtn = document.querySelector('#C');

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
	displayQuestion();
}

function displayQuestion() {
	//first question
	let trivia = musicQuestions[currentQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	//display question
}

function checkAnswer(event) {
	//targeting the event and id from HTML
	if (event.target.id === musicQuestions[currentQuestionIndex].correctAnswer) {
		//answer is correct
		alert('correct!');
		score++;
		// displaySecondQuestion();
	} else {
		//answer is wrong
		alert('incorrect');
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
	scoreCounter.style.display = 'block';
	scoreCounter.innerHTML = `You got ${score} correct!`;
}

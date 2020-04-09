console.log('js is up and running');

//TARGET DATA

//Modal
const modal = document.querySelector('#modal-instructions');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//Questions Board
let questionsBoard = document.querySelector('.question-board');
let questionDisplay = document.querySelector('.question-display');
let answerDisplay = document.querySelector('.answer-display');

//Styling Attributes
questionDisplay.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 26px; text-align: center; padding-top: 10px"
);

answerDisplay.setAttribute(
	'style',
	"font-family: 'Cabin', sans-serif; font-size: 26px; text-align: left; padding: 10px; margin-left: 10px"
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

//FUNCTIONS

//Modal
function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

//Music Category
function startGame() {
	//display the board
	questionsBoard.style.display = 'block';
	//render the first question
	let firstQuestion = musicQuestions[0].question;
	questionDisplay.innerHTML = firstQuestion;
	//render the choices
	let choices = musicQuestions[0].options;
    answerDisplay.innerHTML = choices;
    
    //make choices their own buttons
    

	console.log(firstQuestion);
	console.log(choices);
	// for(i = 0; i < choices.length; i++) {
	//     let choicesBtns = document.createElement('button');
	//     choicesBtns.appendChild(answerDisplay);
	//     console.log(choicesBtns);
	//     // choicesBtns.addEventListener('click', checkAnswers);
	// }
	// for(let i = 0; i < choices; i++) {
	//     let newBtns = document.createElement('button')
	//     console.log(newBtns);
	// }
	displayNextQuestion();
}

function displayNextQuestion() {
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
}

// return to home

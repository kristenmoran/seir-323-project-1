console.log('js is up and running');

//TARGET DATA

//Modal
const modal = document.querySelector('#modal-instructions');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//Questions Board
const questionsBoard = document.querySelector('.question-board');
const questionDisplay = document.querySelector('.question-display');

//Music Category
const music = document.querySelector('#music');
//Objects in an array to hold the questions and answers
const musicQuestions = [
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

//EVENT LISTENERS

//Modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//Music Category
music.addEventListener('click', renderMusicQuestions);

//FUNCTIONS

//Modal
function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

//Music Category
function renderMusicQuestions(event) {
	event.target;
	// console.log('clicked');
	questionsBoard.style.display = 'block';
	questionDisplay.style.fontFamily = 'Cabin, sans-serif';
	questionDisplay.style.fontSize = '26px';
	questionDisplay.style.textAlign = 'center';
	//display 1 question and choices
	// let questions = Object.values(musicQuestions[0]);
	// console.log(questions);
	questionDisplay.innerHTML = Object.values(musicQuestions[0]);
}

// function displayNextQuestion() {
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
// }

// let questions = document.createElement('div');
// console.log('made div');
// questions.innerHTML = "questions.musicQuestions"
// //go to next question
// //repeat for question 2 and 3
// //exit the game

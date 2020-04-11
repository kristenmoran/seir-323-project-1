console.log('js is up and running');

//TARGET DATA

//Modal
const modalContainer = document.querySelector('#modal-container');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//Questions Board
//questionContainer is the light grey background
let questionsContainer = document.querySelector('#question-container');
//the modal is questionDisplay
let questionDisplay = document.querySelector('#question-display');
let answerBtns = document.querySelector('#answer-buttons');
let scoreUpdater = document.querySelector('.score-updater');
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
		choiceA: 'A. Howard Shore',
		choiceB: 'B. John Williams',
		choiceC: 'C. Alexandre Desplat',
		correctAnswer: 'A',
	},
	{
		question: '5. What was the first K-pop group to perform on SNL?',
		choiceA: 'A. Girls Generation',
		choiceB: 'B. BTS',
		choiceC: 'C. BLACKPINK',
		correctAnswer: 'B',
	},
];

//Sports Category
const sports = document.querySelector('#sports');
let sportsQuestions = [
	{
		question: '1. What city hosted the 1998 Winter Olympics?',
		choiceA: 'A. Nagano',
		choiceB: 'B. Oslo',
		choiceC: 'C. Vancouver',
		correctAnswer: 'A',
	},

	{
		question: '2. What MLB team has won the most World Series?',
		choiceA: 'A. St. Louis Cardinals',
		choiceB: 'B. Boston Red Sox',
		choiceC: 'C. New York Yankees',
		correctAnswer: 'C',
	},

	{
		question: "3. What country won the 2018 Men's FIFA World Cup?",
		choiceA: 'A. France',
		choiceB: 'B. Germany',
		choiceC: 'C. Belgium',
		correctAnswer: 'A',
	},

	{
		question: "4. What sport, other than baseball, uses the word 'home run'?",
		choiceA: 'A. Badminton',
		choiceB: 'B. Volleyball',
		choiceC: 'C. Cricket',
		correctAnswer: 'C',
	},

	{
		question: 'In what year did boxing become a legal sport in the US?',
		choiceA: 'A. 1921',
		choiceB: 'B. 1901',
		choiceC: 'C. 1896',
		correctAnswer: 'B',
	},
];

//Art Category
const art = document.querySelector('#art');
let artQuestions = [
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
];

//History Category
const history = document.querySelector('#history');
let historyQuestions = [
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
];

//Science Category
const science = document.querySelector('#science');
let scienceQuestions = [
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
];

//Pop! Culture Category

const popCulture = document.querySelector('#pop-culture');
let popCultureQuestions = [
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
	{
		question: '',
		choiceA: '',
		choiceB: '',
		choiceC: '',
		correctAnswer: '',
	},
];

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

//Category Start buttons

//Music Start
music.addEventListener('click', startGame);

//Sports Start
sports.addEventListener('click', startGame);

//Art Start
art.addEventListener('click', startGame);

//History Start
history.addEventListener('click', startGame);

//Science Start
science.addEventListener('click', startGame);

//Pop! Culture Start
popCulture.addEventListener('click', startGame);

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
	scoreUpdater.innerHTML = '0 of 5 questions';
	displayQuestion();
}

function displayQuestion() {
	//display question
	let trivia = musicQuestions[currentQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
}

function checkAnswer(event) {
	//targeting the event and id from HTML
	if (event.target.id === musicQuestions[currentQuestionIndex].correctAnswer) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentQuestionIndex < previousQuestionIndex) {
		currentQuestionIndex++;
		displayQuestion();
	} else {
		returnToHomePage();
	}
}

//Return to beginning
function returnToHomePage() {
	//code for return to category homepage by hiding container
	questionsContainer.style.display = 'none';
	scoreCounter.style.display = 'block';
	scoreCounter.innerHTML = `You got ${score} of 5 correct!`;
}

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
		question: '5. In what year did boxing become a legal sport in the US?',
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
		question: '1. Who painted "Starry Night"?',
		choiceA: 'A. Vincent Van Gogh',
		choiceB: 'B. Edgar Degas',
		choiceC: 'C. Michelangelo',
		correctAnswer: 'A',
	},
	{
		question: '2. What year was Pablo Picasso born?',
		choiceA: 'A. 1902',
		choiceB: 'B. 1881',
		choiceC: 'C. 1897',
		correctAnswer: 'B',
	},
	{
		question: '3. What museum houses "The Birth of Venus"?',
		choiceA: 'A. The British Museum',
		choiceB: 'B. The Met',
		choiceC: 'C. The Uffizi',
		correctAnswer: 'C',
	},
	{
		question:
			'4. Who of the following painters is considered to be an Impressionist?',
		choiceA: 'A. Leonardo da Vinci',
		choiceB: 'B. Claude Monet',
		choiceC: 'C. Jackson Pollack',
		correctAnswer: 'B',
	},
	{
		question: '5. How many self-portraits did Frida Kahlo paint?',
		choiceA: 'A. 33',
		choiceB: 'B. 44',
		choiceC: 'C. 55',
		correctAnswer: 'C',
	},
];

//History Category
const history = document.querySelector('#history');
let historyQuestions = [
	{
		question: '1. What year was the Magna Carta signed?',
		choiceA: 'A. 1345',
		choiceB: 'B. 1492',
		choiceC: 'C. 1215',
		correctAnswer: 'C',
	},
	{
		question: '2. Who was the first emperor of Rome?',
		choiceA: 'A. Julius Caesar',
		choiceB: 'B. Augustus',
		choiceC: 'C. Marcus Aurelius',
		correctAnswer: 'B',
	},
	{
		question: '3. How long was the 100 Years War?',
		choiceA: 'A. 100 years',
		choiceB: 'B. 107 years',
		choiceC: 'C. 116 years',
		correctAnswer: 'C',
	},
	{
		question: '4. How many wives did Henry VIII behead?',
		choiceA: 'A. 2',
		choiceB: 'B. 3',
		choiceC: 'C. 4',
		correctAnswer: 'A',
	},
	{
		question:
			'5. Which native peoples populated the areas of Colombia and Peru?',
		choiceA: 'A. Incas',
		choiceB: 'B. Aztecs',
		choiceC: 'C. Mayans',
		correctAnswer: 'A',
	},
];

//Science Category
const science = document.querySelector('#science');
let scienceQuestions = [
	{
		question: '1. Who came up with the three laws of motion?',
		choiceA: 'A. Sir Isaac Newton',
		choiceB: 'B. Sir Francis Bacon',
		choiceC: 'C. Albert Einstein',
		correctAnswer: 'A',
	},
	{
		question: '2. What planet has the most moons?',
		choiceA: 'A. Saturn',
		choiceB: 'B. Jupiter',
		choiceC: 'C. Uranus',
		correctAnswer: 'B',
	},
	{
		question: '3. Who invented the first battery?',
		choiceA: 'A. Nikola Tesla',
		choiceB: 'B. Thomas Edison',
		choiceC: 'C. Alessandro Volta',
		correctAnswer: 'C',
	},
	{
		question: '4. What is the Periodic Table of Elements symbol for silver?',
		choiceA: 'A. Ag',
		choiceB: 'B. Si',
		choiceC: 'C. Au',
		correctAnswer: 'A',
	},
	{
		question: '5. What is the most abundant element in the universe?',
		choiceA: 'A. Hydrogen',
		choiceB: 'B. Oxygen',
		choiceC: 'C. Helium',
		correctAnswer: 'A',
	},
];

//Pop! Culture Category

const popCulture = document.querySelector('#pop-culture');
let popCultureQuestions = [
	{
		question:
			'1. What as the highest grossing movie in the US domestic market in 2018?',
		choiceA: "A. Avenger's Infinity War",
		choiceB: 'B. Jurassic World: Fallen Kingdom',
		choiceC: 'C. Black Panther',
		correctAnswer: 'C',
	},
	{
		question: '2. How many houses does Hogwarts have?',
		choiceA: 'A. 5',
		choiceB: 'B. 4',
		choiceC: 'C. 7',
		correctAnswer: 'B',
	},
	{
		question: '3. In Arrested Development, where is there always money?',
		choiceA: 'A. In the walls',
		choiceB: 'B. In the mattress',
		choiceC: 'C. In the banana stand',
		correctAnswer: 'C',
	},
	{
		question: '4. What movie won Best Picture at the 2020 Academy Awards?',
		choiceA: 'A. Parasite',
		choiceB: 'B. Jojo Rabbit',
		choiceC: 'C. 1917',
		correctAnswer: 'A',
	},
	{
		question:
			'5. What two performers headlined the 2020 Super Bowl halftime show?',
		choiceA: 'A. Beyonce and Bruno Mars',
		choiceB: 'B. Jennifer Lopez and Shakira',
		choiceC: 'C. Jennifer Lopez and Katy Perry',
		correctAnswer: 'B',
	},
];

//Trivia Game Logic
//minus one because I don't want to display the correct answer
let previousMusicQuestionIndex = musicQuestions.length - 1;
let previousSportsQuestionIndex = sportsQuestions.length - 1;
let previousArtQuestionIndex = artQuestions.length - 1;
let previousHistoryQuestionIndex = historyQuestions.length - 1;
let previousScienceQuestionIndex = scienceQuestions.length - 1;
let previousPopCultureQuestionIndex = popCultureQuestions.length - 1;
let score = 0;

//EVENT LISTENERS

//Modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//Category Start buttons

//Music Start
music.addEventListener('click', startMusicGame);

//Sports Start
sports.addEventListener('click', startSportsGame);

//Art Start
art.addEventListener('click', startArtGame);

//History Start
history.addEventListener('click', startHistoryGame);

//Science Start
science.addEventListener('click', startScienceGame);

//Pop! Culture Start
popCulture.addEventListener('click', startPopCultureGame);

//
questionsContainer.addEventListener('click', closeOutOfTrivia);

//FUNCTIONS

//Modal
function openModal() {
	modalContainer.style.display = 'block';
}

function closeModal() {
	modalContainer.style.display = 'none';
}

//Return to beginning for all categories
function returnToHomePage() {
	//code for return to category homepage by hiding container
	questionsContainer.style.display = 'none';
	scoreCounter.style.display = 'block';
	scoreCounter.innerHTML = `You got ${score} of 5 correct!`;
}

//put the score counter back to zero
function resetScoreCounter() {
	score = 0;
}

// Close out of the game

function closeOutOfTrivia(event) {
	if (event.target === questionsContainer || event.target === answerBtns) {
		questionsContainer.style.display = 'none';
		score = 0;
	} else {
		return true;
	}
}

//Music Category

//Start function for  music category
function startMusicGame() {
	resetScoreCounter();
	questionsContainer.style.display = 'block';
	currentMusicQuestionIndex = 0;
	scoreUpdater.innerHTML = '1 of 5 questions';
	displayMusicQuestion();
}

function displayMusicQuestion() {
	//display question
	let trivia = musicQuestions[currentMusicQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	let choiceABtn = document.createElement('BUTTON');
	let choiceBBtn = document.createElement('BUTTON');
	let choiceCBtn = document.createElement('BUTTON');
	questionDisplay.appendChild(choiceABtn);
	questionDisplay.appendChild(choiceBBtn);
	questionDisplay.appendChild(choiceCBtn);
	choiceABtn.setAttribute('id', 'A');
	choiceBBtn.setAttribute('id', 'B');
	choiceCBtn.setAttribute('id', 'C');
	choiceABtn.addEventListener('click', checkMusicAnswer);
	choiceBBtn.addEventListener('click', checkMusicAnswer);
	choiceCBtn.addEventListener('click', checkMusicAnswer);
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	choiceABtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceBBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceCBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceABtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceABtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceBBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceBBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceCBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceCBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
}

function checkMusicAnswer(event) {
	//targeting the event and id from HTML
	if (
		event.target.id === musicQuestions[currentMusicQuestionIndex].correctAnswer
	) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentMusicQuestionIndex < previousMusicQuestionIndex) {
		currentMusicQuestionIndex++;
		displayMusicQuestion();
	} else {
		returnToHomePage();
	}
}

//Sports Trivia Game

//Start function for sports category
function startSportsGame() {
	resetScoreCounter();
	questionsContainer.style.display = 'block';
	currentSportsQuestionIndex = 0;
	scoreUpdater.innerHTML = '1 of 5 questions';
	displaySportsQuestion();
}

//Display Sports Category
function displaySportsQuestion() {
	//display question
	let trivia = sportsQuestions[currentSportsQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	let choiceABtn = document.createElement('BUTTON');
	let choiceBBtn = document.createElement('BUTTON');
	let choiceCBtn = document.createElement('BUTTON');
	questionDisplay.appendChild(choiceABtn);
	questionDisplay.appendChild(choiceBBtn);
	questionDisplay.appendChild(choiceCBtn);
	choiceABtn.setAttribute('id', 'A');
	choiceBBtn.setAttribute('id', 'B');
	choiceCBtn.setAttribute('id', 'C');
	choiceABtn.addEventListener('click', checkSportsAnswer);
	choiceBBtn.addEventListener('click', checkSportsAnswer);
	choiceCBtn.addEventListener('click', checkSportsAnswer);
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	choiceABtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceBBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceCBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceABtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceABtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceBBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceBBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceCBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceCBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
}

//Check Sports Question
function checkSportsAnswer(event) {
	//targeting the event and id from HTML
	if (
		event.target.id ===
		sportsQuestions[currentSportsQuestionIndex].correctAnswer
	) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentSportsQuestionIndex < previousSportsQuestionIndex) {
		currentSportsQuestionIndex++;
		displaySportsQuestion();
	} else {
		returnToHomePage();
	}
}

//Art Trivia
//Start function for art category
function startArtGame() {
	resetScoreCounter();
	questionsContainer.style.display = 'block';
	currentArtQuestionIndex = 0;
	scoreUpdater.innerHTML = '1 of 5 questions';
	displayArtQuestion();
}

//Display Art Category
function displayArtQuestion() {
	//display question
	let trivia = artQuestions[currentArtQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	let choiceABtn = document.createElement('BUTTON');
	let choiceBBtn = document.createElement('BUTTON');
	let choiceCBtn = document.createElement('BUTTON');
	questionDisplay.appendChild(choiceABtn);
	questionDisplay.appendChild(choiceBBtn);
	questionDisplay.appendChild(choiceCBtn);
	choiceABtn.setAttribute('id', 'A');
	choiceBBtn.setAttribute('id', 'B');
	choiceCBtn.setAttribute('id', 'C');
	choiceABtn.addEventListener('click', checkArtAnswer);
	choiceBBtn.addEventListener('click', checkArtAnswer);
	choiceCBtn.addEventListener('click', checkArtAnswer);
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	choiceABtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceBBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceCBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceABtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceABtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceBBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceBBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceCBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceCBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
}

//Check Art Question
function checkArtAnswer(event) {
	//targeting the event and id from HTML
	if (event.target.id === artQuestions[currentArtQuestionIndex].correctAnswer) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentArtQuestionIndex < previousArtQuestionIndex) {
		currentArtQuestionIndex++;
		displayArtQuestion();
	} else {
		returnToHomePage();
	}
}

//History Trivia
//Start function for history category
function startHistoryGame() {
	resetScoreCounter();
	questionsContainer.style.display = 'block';
	currentHistoryQuestionIndex = 0;
	scoreUpdater.innerHTML = '1 of 5 questions';
	displayHistoryQuestion();
}

//Display history Category
function displayHistoryQuestion() {
	//display question
	let trivia = historyQuestions[currentHistoryQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	let choiceABtn = document.createElement('BUTTON');
	let choiceBBtn = document.createElement('BUTTON');
	let choiceCBtn = document.createElement('BUTTON');
	questionDisplay.appendChild(choiceABtn);
	questionDisplay.appendChild(choiceBBtn);
	questionDisplay.appendChild(choiceCBtn);
	choiceABtn.setAttribute('id', 'A');
	choiceBBtn.setAttribute('id', 'B');
	choiceCBtn.setAttribute('id', 'C');
	choiceABtn.addEventListener('click', checkHistoryAnswer);
	choiceBBtn.addEventListener('click', checkHistoryAnswer);
	choiceCBtn.addEventListener('click', checkHistoryAnswer);
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	choiceABtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceBBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceCBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceABtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceABtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceBBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceBBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceCBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceCBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
}

//Check history Question
function checkHistoryAnswer(event) {
	//targeting the event and id from HTML
	if (
		event.target.id ===
		historyQuestions[currentHistoryQuestionIndex].correctAnswer
	) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentHistoryQuestionIndex < previousHistoryQuestionIndex) {
		currentHistoryQuestionIndex++;
		displayHistoryQuestion();
	} else {
		returnToHomePage();
	}
}

//Science Trivia
//Start function for science category
function startScienceGame() {
	resetScoreCounter();
	questionsContainer.style.display = 'block';
	currentScienceQuestionIndex = 0;
	scoreUpdater.innerHTML = '1 of 5 questions';
	displayScienceQuestion();
}

//Display Science Category
function displayScienceQuestion() {
	//display question
	let trivia = scienceQuestions[currentScienceQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	let choiceABtn = document.createElement('BUTTON');
	let choiceBBtn = document.createElement('BUTTON');
	let choiceCBtn = document.createElement('BUTTON');
	questionDisplay.appendChild(choiceABtn);
	questionDisplay.appendChild(choiceBBtn);
	questionDisplay.appendChild(choiceCBtn);
	choiceABtn.setAttribute('id', 'A');
	choiceBBtn.setAttribute('id', 'B');
	choiceCBtn.setAttribute('id', 'C');
	choiceABtn.addEventListener('click', checkScienceAnswer);
	choiceBBtn.addEventListener('click', checkScienceAnswer);
	choiceCBtn.addEventListener('click', checkScienceAnswer);
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	choiceABtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceBBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceCBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceABtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceABtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceBBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceBBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceCBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceCBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
}

//Check Science Question
function checkScienceAnswer(event) {
	//targeting the event and id from HTML
	if (
		event.target.id ===
		scienceQuestions[currentScienceQuestionIndex].correctAnswer
	) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentScienceQuestionIndex < previousScienceQuestionIndex) {
		currentScienceQuestionIndex++;
		displayScienceQuestion();
	} else {
		returnToHomePage();
	}
}

//Pop! Culture Trivia

//Start function for Pop Culture category
function startPopCultureGame() {
	resetScoreCounter();
	questionsContainer.style.display = 'block';
	currentPopCultureQuestionIndex = 0;
	scoreUpdater.innerHTML = '1 of 5 questions';
	displayPopCultureQuestion();
}

//Display Pop Culture Category
function displayPopCultureQuestion() {
	//display question
	let trivia = popCultureQuestions[currentPopCultureQuestionIndex];
	trivia.innerHTML = document.createElement('div');
	questionDisplay.innerHTML = trivia.question;
	//add buttons
	let choiceABtn = document.createElement('BUTTON');
	let choiceBBtn = document.createElement('BUTTON');
	let choiceCBtn = document.createElement('BUTTON');
	questionDisplay.appendChild(choiceABtn);
	questionDisplay.appendChild(choiceBBtn);
	questionDisplay.appendChild(choiceCBtn);
	choiceABtn.setAttribute('id', 'A');
	choiceBBtn.setAttribute('id', 'B');
	choiceCBtn.setAttribute('id', 'C');
	choiceABtn.addEventListener('click', checkPopCultureAnswer);
	choiceBBtn.addEventListener('click', checkPopCultureAnswer);
	choiceCBtn.addEventListener('click', checkPopCultureAnswer);
	choiceABtn.innerHTML = trivia.choiceA;
	choiceBBtn.innerHTML = trivia.choiceB;
	choiceCBtn.innerHTML = trivia.choiceC;
	choiceABtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceBBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceCBtn.setAttribute(
		'style',
		'padding: 15px 18px; margin 25px auto; background-color: #db5461; border: none; outline: none; border-radius: 10px; color: white; font-family: Sources Sans Pro, sans-serif; cursor: pointer; text-decoration: none; font-size: 26px; flex-wrap: nowrap; flex-direction: column;'
	);
	choiceABtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceABtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceBBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceBBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
	choiceCBtn.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = '#8aa29e';
	});
	choiceCBtn.addEventListener('mouseleave', (event) => {
		event.target.style.backgroundColor = '#db5461';
	});
}

//Check Pop Culture Question
function checkPopCultureAnswer(event) {
	//targeting the event and id from HTML
	if (
		event.target.id ===
		popCultureQuestions[currentPopCultureQuestionIndex].correctAnswer
	) {
		//answer is correct
		score++;
		scoreUpdater.innerHTML = `Correct! You have ${score} of 5 correct`;
	} else {
		//answer is wrong
		scoreUpdater.innerHTML = `Incorrect! You have ${score} of 5 correct`;
	}
	if (currentPopCultureQuestionIndex < previousPopCultureQuestionIndex) {
		currentPopCultureQuestionIndex++;
		displayPopCultureQuestion();
	} else {
		returnToHomePage();
	}
}

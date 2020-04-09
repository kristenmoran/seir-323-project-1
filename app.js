console.log('js is up and running');

//TARGET DATA

//Modal
const modal = document.querySelector('#modal-instructions');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//Music Category
const music = document.querySelector('#music');

const musicQuestions = [
	{
		question: 'Who composed the Four Seasons?',
		choiceA: 'Wolfgang Amadeus Mozart',
		choiceB: 'Johann Sebastian Bach',
		choiceC: 'Antonio Vivaldi',
		correctAnswer: 'Antonio Vivaldi',
	},
	{
		question: 'What year was Abbey Road released?',
		choiceA: '1971',
		choiceB: '1969',
		choiceC: '1967',
		correctAnswer: '1969',
	},
	{
		question: "What is Elton John's best selling single",
		choiceA: 'Your Song',
		choiceB: 'Candle in the Wind',
		choiceC: 'Rocket Man',
		correctAnswer: 'Candle in the Wind',
	},
];

//EVENT LISTENERS

//Modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//Music Category
music.addEventListener('click', startMusicTrivia);

//FUNCTIONS

//Modal
function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

//Music Category
function startMusicTrivia(event) {
	//code goes here
	event.target;
	console.log('clicked!');
}

console.log('js is up and running');

//TARGET DATA

//Modal
const modal = document.querySelector('#modal-instructions');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//Music Category
const music = document.querySelector('#music');

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

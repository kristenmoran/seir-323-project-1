console.log('js is up and running');

//TARGET DATA

//Modal
const modal = document.querySelector('#modal-instructions');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');

//EVENT LISTENERS

//Modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//FUNCTIONS

//Modal
function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

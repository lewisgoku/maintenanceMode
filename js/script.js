// alert('My website works');

//SELECCTOR///////
const openBtn = document.querySelector('.open');
const myMenu = document.querySelector('.menu-list');
const closeBtn = document.querySelector('.close');

//LISTENER////////
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

//FUNCTIONS/////////
function openMenu() {
	myMenu.classList.add('active-menu');
}

function closeMenu() {
	myMenu.classList.remove('active-menu');
}

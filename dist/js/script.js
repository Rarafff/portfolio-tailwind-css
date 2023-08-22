// Hamburger
const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#navbar');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navBar.classList.toggle('hidden');
})
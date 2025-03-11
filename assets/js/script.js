const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

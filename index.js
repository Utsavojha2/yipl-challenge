const navBtn = document.querySelector('.navButtonMenu');
const navItems = document.querySelector('#navUl');
const navBar = document.querySelector('.headerNav');

const mobileMenu = () => {
    navItems.classList.toggle("activenav");
    navBar.classList.toggle('activeheight');
}

navBtn.addEventListener('click', mobileMenu);















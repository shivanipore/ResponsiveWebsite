burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-nav');
    navList.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})
// toggle for mobile view

const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
toggle?.addEventListener('click', () => menu.classList.toggle('open'));

// close the menu

menu?.querySelectorAll('a').forEach( a => {
    a.addEventListener('click', () => classList.remove('open'));
})

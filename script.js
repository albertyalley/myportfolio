// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
function playName() {
    let audio = new Audio('audio/albert_name.mp3'); // Add the actual pronunciation audio file
    audio.play();
}

// Select menu elements
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

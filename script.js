const navbar = document.getElementById('navbar')
const menuButton = document.getElementById('open-sidebar-button');

function openSidebar(){
    navbar.classList.toggle('show');
    menuButton.classList.toggle('active');
}

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        openSidebar()
    })
})


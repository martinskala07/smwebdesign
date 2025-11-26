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

// Navbar appearance change on scroll
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// dotaznik krok za krokem
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const nextButtons = document.querySelectorAll(".next-step");
    const prevButtons = document.querySelectorAll(".prev-step");
    const progressBar = document.querySelector(".progress-bar");

    let currentStep = 0;

    function showStep(index) {
        steps.forEach(step => step.classList.remove("active"));
        steps[index].classList.add("active");

        const progress = ((index) / (steps.length - 1)) * 100;
        progressBar.style.width = progress + "%";
    }

    nextButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);

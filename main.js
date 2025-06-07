// Mobile Menu 
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Sticky Header 
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

const portalBlue = document.querySelector('.hero-portal-blue');
const portalOrange = document.querySelector('.hero-portal-orange');

let blueAngle = 0;
let orangeAngle = 0;

function animatePortals() {
    if (portalBlue && portalOrange) {
        blueAngle += 0.02;
        orangeAngle += 0.03;
        
        portalBlue.style.transform = `translateY(${Math.sin(blueAngle) * 10}px)`;
        portalOrange.style.transform = `translateY(${Math.sin(orangeAngle) * 15}px)`;
    }
    
    requestAnimationFrame(animatePortals);
}

animatePortals();
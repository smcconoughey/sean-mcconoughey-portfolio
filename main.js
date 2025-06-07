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

// Project card expand/collapse functionality
function toggleDetails(button) {
    const projectCard = button.closest('.research-card-content');
    const details = projectCard.querySelector('.project-details');
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Read Less';
        button.classList.add('expanded');
    } else {
        details.style.display = 'none';
        button.textContent = 'Read More';
        button.classList.remove('expanded');
    }
}

// Make toggleDetails function globally available
window.toggleDetails = toggleDetails;

// Image lightbox functionality
function openLightbox(src, alt) {
    const modal = document.getElementById('lightboxModal');
    const image = document.getElementById('lightboxImage');
    
    image.src = src;
    image.alt = alt;
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('lightboxModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Make lightbox functions globally available
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

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
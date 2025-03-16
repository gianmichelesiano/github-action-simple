// Mobile menu toggle functions
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    hamburger.classList.toggle('active');
    navWrapper.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    hamburger.classList.remove('active');
    navWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navWrapper = document.querySelector('.nav-wrapper');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if menu is open and click is outside the nav
    if (navWrapper.classList.contains('active') && 
        !navWrapper.contains(event.target) && 
        !hamburger.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when window is resized to desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Optional: Consultation form function (placeholder)
function openConsultationForm() {
    // Add your code to open consultation form
    console.log('Opening consultation form');
}
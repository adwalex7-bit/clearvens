// Smooth scroll for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Video container styling
document.querySelectorAll('.video-container video').forEach(video => {
    video.addEventListener('play', function() {
        this.parentElement.classList.add('loaded');
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form will be submitted to Formspree which sends to Hendrickdariuss@gmail.com
        // Show thank you message
        setTimeout(function() {
            alert('Thank you for your message! We will get back to you soon.');
        }, 500);
    });
}
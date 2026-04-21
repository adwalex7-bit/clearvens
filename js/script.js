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

// Form submission (placeholder)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    });
}

// Video fallback handling
document.querySelectorAll('.video-container').forEach(container => {
    const iframe = container.querySelector('iframe');
    const fallback = container.querySelector('.video-fallback');
    
    if (iframe && fallback) {
        // Check if iframe loads successfully
        let iframeLoaded = false;
        
        iframe.addEventListener('load', function() {
            iframeLoaded = true;
            if (fallback) {
                fallback.style.display = 'none';
            }
        });
        
        // Set a timeout to show fallback if iframe doesn't load
        setTimeout(() => {
            if (!iframeLoaded) {
                try {
                    // Try to access iframe content (will fail if cross-origin)
                    iframe.contentDocument;
                    iframeLoaded = true;
                } catch (e) {
                    // Cross-origin or error - show fallback
                    if (fallback) {
                        fallback.style.display = 'flex';
                    }
                }
            }
        }, 3000);
    }
});
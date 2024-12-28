// Slide management
let currentSlide = 1;
const totalSlides = 6;

// Animation functions
function resetAnimations() {
    gsap.set('.stat-card', {
        opacity: 0,
        y: 20
    });
    
    gsap.set('.seo-card', {
        opacity: 0,
        y: 20
    });
    
    gsap.set('.update-card', {
        opacity: 0,
        y: 20
    });

    gsap.set('.device-frame', {
        opacity: 0,
        scale: 0.95
    });

    gsap.set('.laptop-frame', {
        opacity: 0,
        scale: 0.95
    });
    
    gsap.set('.contact-card', {
        opacity: 0,
        y: 20
    });
    
    gsap.set('.contact-message', {
        opacity: 0,
        y: 20
    });
}

function animateSlideContent() {
    const currentSlideElement = document.querySelector('.slide.active');
    
    // Animate stat cards
    const statCards = currentSlideElement.querySelectorAll('.stat-card');
    if (statCards.length) {
        gsap.to(statCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }

    // Animate SEO cards
    const seoCards = currentSlideElement.querySelectorAll('.seo-card');
    if (seoCards.length) {
        gsap.to(seoCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }

    // Animate update cards
    const updateCards = currentSlideElement.querySelectorAll('.update-card');
    if (updateCards.length) {
        gsap.to(updateCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }

    // Animate device frames
    const deviceFrames = currentSlideElement.querySelectorAll('.device-frame');
    if (deviceFrames.length) {
        gsap.to(deviceFrames, {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out'
        });
    }

    // Animate laptop frames
    const laptopFrames = currentSlideElement.querySelectorAll('.laptop-frame');
    if (laptopFrames.length) {
        gsap.to(laptopFrames, {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out'
        });
    }
    
    const contactCards = currentSlideElement.querySelectorAll('.contact-card');
    if (contactCards.length) {
        gsap.to(contactCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }

    // Animate contact message
    const contactMessage = currentSlideElement.querySelector('.contact-message');
    if (contactMessage) {
        gsap.to(contactMessage, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.out'
        });
    }
}

function showSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Reset animations
    resetAnimations();
    
    // Show new slide
    const newSlide = document.getElementById(`slide${slideNumber}`);
    newSlide.classList.add('active');
    
    // Animate content after a short delay
    setTimeout(animateSlideContent, 100);
}

function nextSlide() {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the presentation
    resetAnimations();
    showSlide(1);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') previousSlide();
    });

    // Touch navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeLength = touchEndX - touchStartX;

        if (Math.abs(swipeLength) > swipeThreshold) {
            if (swipeLength > 0) {
                previousSlide();
            } else {
                nextSlide();
            }
        }
    }
});

// Pre-load images for smoother transitions
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadImage = new Image();
            preloadImage.src = src;
        }
    });
});
// Mobile sections
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const highlightSections = document.querySelectorAll('.highlight-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const content = entry.target.querySelector('.highlight-content');
            content.classList.add('active');
        }
    });
}, {
    threshold: 0.3
});

highlightSections.forEach(section => {
    observer.observe(section);
});

function changeVideo(videoPath) {
    const video = document.getElementById('hero-video');
    video.src = videoPath;
    video.load();
    video.play();
}

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will contact you soon.');
        this.reset();
    });
}
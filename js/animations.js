document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive YOU Wordmark Effect
    const interactiveYou = document.getElementById('interactive-you');
    if (interactiveYou) {
        interactiveYou.addEventListener('click', () => {
            interactiveYou.classList.toggle('pulse-effect');
            // Optional mini greeting or sound/visual cue trigger can go here
        });
    }

    // 2. Scroll-Triggered Reveals using Intersection Observer
    const revealElements = document.querySelectorAll('.interest-card, .hero-content');
    
    // Add base reveal class to target elements dynamically if needed
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
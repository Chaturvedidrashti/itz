// Wait for the DOM to load before executing JS code
document.addEventListener('DOMContentLoaded', function () {

    // Select the hero content elements
    const heroContent = document.querySelector('.hero-content');
    const heroHeading = document.querySelector('.hero-heading');
    const heroDescription = document.querySelector('.hero-description');
    const ctaButton = document.querySelector('.cta-button');
    const heroBgImg = document.querySelector('.hero-bg-img');

    // Fade-in animation for hero content
    setTimeout(() => {
        heroContent.style.transition = "all 1s ease-out";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 500); // Delay before showing content

    // Mouse movement interaction to move background
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        // Parallax effect on background image
        heroBgImg.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px) scale(1.2)`;
    });

    // Hover effect on the CTA button using scale
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = "scale(1.1)";
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = "scale(1)";
    });
});

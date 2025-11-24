// Mobile menu functionality for About page
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon
            if (navLinks.classList.contains('active')) {
                this.innerHTML = '✕';
            } else {
                this.innerHTML = '☰';
            }
        });
        
        // Close menu when clicking on links
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });
    }
}

// About page animation
function animateAboutPage() {
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImage && aboutContent) {
        // Check if elements are in viewport
        const elementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        // Animate when in viewport
        if (elementInViewport(aboutImage)) {
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateX(0)';
            aboutContent.style.opacity = '1';
            aboutContent.style.transform = 'translateX(0)';
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu(); // Initialize mobile menu
    animateAboutPage(); // Initial animation check
    
    // Check animation on scroll
    window.addEventListener('scroll', animateAboutPage);
});

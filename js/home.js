// Mobile menu functionality for Home page
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

// Home Page JavaScript
function initHomePage() {
    // Add any home page specific JavaScript here
    console.log('Home page loaded');
    
    // Example: Smooth scroll for "Explore Recipes" button
    const exploreBtn = document.querySelector('.cta-button');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Scroll to recipes section if it exists on this page
            const recipesSection = document.getElementById('recipes');
            if (recipesSection) {
                recipesSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Redirect to recipes page if not on single page
                window.location.href = 'recipes.html';
            }
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu(); // Initialize mobile menu
    initHomePage(); // Initialize home page functionality
});

// Animated statistics counter
function animateStatistics() {
    const stats = document.querySelectorAll('.stat');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight;
        
        if (isInViewport && !stat.classList.contains('animated')) {
            stat.classList.add('animated');
            
            // Start counting animation for each number
            statNumbers.forEach(statNumber => {
                if (!statNumber.classList.contains('counted')) {
                    animateCounter(statNumber);
                    statNumber.classList.add('counted');
                }
            });
        }
    });
}

// Counter animation function
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const step = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number (add + for thousands, keep decimals for rating)
        if (target >= 1000) {
            element.textContent = `+${Math.floor(current).toLocaleString()}`;
        } else if (target % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
        
        // Add pulse effect during counting
        element.classList.add('counting');
        setTimeout(() => element.classList.remove('counting'), 500);
        
    }, duration / steps);
}

// Initialize statistics animation
document.addEventListener('DOMContentLoaded', function() {
    // Initial check
    animateStatistics();
    
    // Check on scroll
    window.addEventListener('scroll', animateStatistics);
});


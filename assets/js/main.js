/**
 * Main JavaScript for aichander.github.io
 * Handles smooth scrolling, navigation, theme toggle, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Mobile navigation toggle
    initMobileNavigation();
    
    // Theme toggle functionality
    initThemeToggle();
    
    // Add scroll-based header styling
    initScrollHeader();
    
    // Initialize any other interactive elements
    initInteractiveElements();
});

/**
 * Theme toggle functionality
 * Handles switching between light and dark modes
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update toggle button appearance
    updateThemeToggleButton(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggleButton(newTheme);
        });
    }
}

/**
 * Update theme toggle button appearance
 */
function updateThemeToggleButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label',
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
}

/**
 * Enhanced smooth scrolling for all anchor links
 * Provides better control over scroll behavior
 */
function initSmoothScrolling() {
    // Find all anchor links that point to sections on the same page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate offset to account for sticky header
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Mobile navigation toggle functionality
 * Handles hamburger menu and mobile nav behavior
 */
function initMobileNavigation() {
    const navTrigger = document.getElementById('nav-trigger');
    const body = document.body;
    
    if (navTrigger) {
        navTrigger.addEventListener('change', function() {
            if (this.checked) {
                body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navTrigger.checked = false;
                body.style.overflow = '';
            });
        });
        
        // Add click handler to menu icon to prevent event bubbling
        const menuIcon = document.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event from bubbling to document
            });
        }
        
        // Also prevent event bubbling from the checkbox itself
        navTrigger.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling to document
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const navMenu = document.querySelector('.nav-menu');
            const menuIcon = document.querySelector('.menu-icon');
            
            if (navTrigger.checked && 
                !navMenu.contains(e.target) && 
                !menuIcon.contains(e.target)) {
                navTrigger.checked = false;
                body.style.overflow = '';
            }
        });
    }
}

/**
 * Add scroll-based styling to header
 * Changes header appearance when scrolling
 */
function initScrollHeader() {
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

/**
 * Initialize other interactive elements
 * Handles various UI enhancements
 */
function initInteractiveElements() {
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-list a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize tag filtering if on blog page
    if (window.location.pathname.includes('/blog')) {
        initTagFiltering();
    }
}

/**
 * Tag filtering functionality for blog posts
 * Allows filtering posts by tags
 */
function initTagFiltering() {
    const tags = document.querySelectorAll('.tag');
    const posts = document.querySelectorAll('.post-item');
    
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            
            const selectedTag = this.textContent.trim();
            const isActive = this.classList.contains('active');
            
            // Clear all active tags
            tags.forEach(t => t.classList.remove('active'));
            
            if (!isActive) {
                // Activate clicked tag
                this.classList.add('active');
                
                // Filter posts
                posts.forEach(post => {
                    const postTags = Array.from(post.querySelectorAll('.tag'))
                        .map(t => t.textContent.trim());
                    
                    if (postTags.includes(selectedTag)) {
                        post.style.display = 'block';
                        post.style.opacity = '1';
                    } else {
                        post.style.display = 'none';
                        post.style.opacity = '0';
                    }
                });
            } else {
                // Show all posts
                posts.forEach(post => {
                    post.style.display = 'block';
                    post.style.opacity = '1';
                });
            }
        });
    });
}

/**
 * Utility function for smooth scrolling to top
 * Can be called from anywhere in the site
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Add keyboard navigation support
 * Improves accessibility
 */
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navTrigger = document.getElementById('nav-trigger');
        if (navTrigger && navTrigger.checked) {
            navTrigger.checked = false;
            document.body.style.overflow = '';
        }
    }
});
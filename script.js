document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation expand/collapse
    const expandNavButton = document.querySelector('.expand-nav');
    const navElement = document.querySelector('.nav-expandable');
    
    // Ensure the button starts with the correct icon based on viewport
    function setInitialNavState() {
        if (window.innerWidth <= 768) {
            // Mobile: Start collapsed
            navElement.classList.remove('expanded');
            expandNavButton.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            // Desktop: Start expanded
            navElement.classList.add('expanded');
            expandNavButton.innerHTML = '<i class="fas fa-times"></i>';
        }
    }
    
    // Set initial state
    setInitialNavState();
    
    // Update on window resize
    window.addEventListener('resize', setInitialNavState);
    
    expandNavButton.addEventListener('click', function() {
        navElement.classList.toggle('expanded');
        // Update icon based on state
        const icon = this.querySelector('i');
        if (navElement.classList.contains('expanded')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Handle navigation link clicks and section display
    const navLinks = document.querySelectorAll('.nav-expandable a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('animate__animated', 'animate__fadeIn');
            });
            
            // Show the selected section
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            
            // For mobile, collapse the nav after selection
            if (window.innerWidth <= 768) {
                navElement.classList.remove('expanded');
                const menuIcon = expandNavButton.querySelector('i');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });
    
    // Add click handlers for video placeholders
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // In a real implementation, this would load and play the video
            alert('Video would play here in a real implementation.');
        });
    });
    
    // Handle form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would send the form data
            alert('Form submitted! In a real implementation, this would send your message.');
            contactForm.reset();
        });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    let darkThemeActive = false;
    
    themeToggle.addEventListener('click', function() {
        if (!darkThemeActive) {
            // Add dark theme stylesheet
            const darkThemeLink = document.createElement('link');
            darkThemeLink.rel = 'stylesheet';
            darkThemeLink.href = 'css/dark-theme.css';
            darkThemeLink.id = 'dark-theme-css';
            document.head.appendChild(darkThemeLink);
            
            // Update button text and icon
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Theme';
            darkThemeActive = true;
        } else {
            // Remove dark theme stylesheet
            const darkThemeLink = document.getElementById('dark-theme-css');
            if (darkThemeLink) {
                document.head.removeChild(darkThemeLink);
            }
            
            // Update button text and icon
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Theme';
            darkThemeActive = false;
        }
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('animate__animated', 'animate__fadeIn');
    });
    
    // Show and animate the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
    selectedSection.classList.add('animate__animated', 'animate__fadeIn');
}
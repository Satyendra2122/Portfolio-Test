// Portfolio application data
const portfolioData = {
  "personal_info": {
    "name": "Sam Johnson",
    "title": "Full Stack Developer",
    "tagline": "Building innovative web solutions with cutting-edge technologies",
    "location": "Austin, TX",
    "email": "sam@example.com",
    "phone": "+1 (555) 456-7890",
    "bio": "I'm a dedicated full-stack developer with 6+ years of experience creating robust, scalable web applications. I specialize in modern JavaScript frameworks and have a passion for clean, maintainable code that delivers exceptional user experiences."
  },
  "portfolio": [
    {
      "id": 1,
      "title": "Real Estate Platform",
      "description": "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management. Features advanced search filters and interactive maps.",
      "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB", "Express", "Mapbox"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 2,
      "title": "Learning Management System",
      "description": "Educational platform with course creation tools, student progress tracking, interactive quizzes, and video streaming. Supports multiple learning formats and assessment types.",
      "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      "technologies": ["Vue.js", "Django", "PostgreSQL", "Redis", "WebRTC"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 3,
      "title": "Financial Dashboard",
      "description": "Personal finance management application with expense tracking, budget planning, investment monitoring, and financial goal setting. Features real-time market data integration.",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "technologies": ["React", "Python", "Chart.js", "Alpha Vantage API"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 4,
      "title": "Food Delivery App",
      "description": "Full-featured food delivery platform with restaurant management, order tracking, payment processing, and delivery logistics. Includes both customer and restaurant portals.",
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      "technologies": ["React Native", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 5,
      "title": "Event Management System",
      "description": "Comprehensive event planning and management platform with ticket sales, attendee management, venue booking, and event analytics. Supports virtual and hybrid events.",
      "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      "technologies": ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Zoom API"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 6,
      "title": "Healthcare Portal",
      "description": "Patient management system with appointment scheduling, medical records, telemedicine capabilities, and prescription management. HIPAA compliant with secure data handling.",
      "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      "technologies": ["React", "Node.js", "PostgreSQL", "JWT", "WebRTC"],
      "github": "#",
      "live": "#"
    }
  ]
};

// DOM elements
const elements = {
  themeToggle: document.getElementById('theme-toggle'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileNavOverlay: document.getElementById('mobile-nav-overlay'),
  mobileNav: document.getElementById('mobile-nav'),
  mobileNavClose: document.getElementById('mobile-nav-close'),
  projectModal: document.getElementById('project-modal'),
  modalClose: document.getElementById('modal-close'),
  contactForm: document.getElementById('contact-form'),
  header: document.getElementById('header')
};

console.log('🚀 Portfolio App Starting - DOM Elements:', elements);

// CRITICAL: Section Management Functions
function showSection(sectionId) {
  console.log(`📋 Switching to section: ${sectionId}`);
  
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
    section.classList.remove('active');
    console.log(`❌ Hidden section: ${section.id}`);
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
    targetSection.classList.add('active');
    console.log(`✅ Showing section: ${sectionId}`);
  } else {
    console.error(`❌ Section not found: ${sectionId}`);
  }
  
  // Update navigation active states
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current navigation links
  const activeLinks = document.querySelectorAll(`[href="#${sectionId}"]`);
  activeLinks.forEach(link => {
    link.classList.add('active');
    console.log(`🎯 Activated nav link for: ${sectionId}`);
  });
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎉 DOM Content Loaded - Initializing Portfolio App');
  initializeApp();
});

function initializeApp() {
  console.log('⚙️ Initializing application components...');
  
  initSectionNavigation();
  initTheme();
  initMobileNavigation();
  initPortfolioModal();
  initContactForm();
  initScrollEffects();
  
  // Show home section by default
  console.log('🏠 Setting home as default section');
  showSection('home');
  
  console.log('✅ Application initialization complete');
}

// CRITICAL: Section Navigation
function initSectionNavigation() {
  console.log('🔗 Initializing section navigation...');
  
  // Desktop navigation links
  const desktopLinks = document.querySelectorAll('.nav-link');
  console.log(`Found ${desktopLinks.length} desktop navigation links`);
  
  desktopLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      console.log(`🖱️ Desktop nav clicked: ${sectionId}`);
      showSection(sectionId);
    });
  });
  
  // Mobile navigation links
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  console.log(`Found ${mobileLinks.length} mobile navigation links`);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      console.log(`📱 Mobile nav clicked: ${sectionId}`);
      showSection(sectionId);
      closeMobileMenu();
    });
  });
  
  // Hero buttons navigation
  const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      console.log(`🎯 Hero button clicked: ${sectionId}`);
      showSection(sectionId);
    });
  });
  
  console.log('✅ Section navigation initialized');
}

// Theme Management
function initTheme() {
  console.log('🎨 Initializing theme management...');
  
  // Check for saved theme or use system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  console.log(`Current theme: ${theme} (saved: ${savedTheme}, system: ${systemPrefersDark ? 'dark' : 'light'})`);
  
  setTheme(theme);
  
  // Theme toggle event listener
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
    console.log('✅ Theme toggle event listener added');
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  console.log(`🔄 Theme toggle: ${currentTheme} → ${newTheme}`);
  setTheme(newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
  const icon = elements.themeToggle?.querySelector('i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  // Add smooth transition
  if (elements.themeToggle) {
    elements.themeToggle.style.transform = 'scale(0.8)';
    setTimeout(() => {
      elements.themeToggle.style.transform = 'scale(1)';
    }, 150);
  }
  
  console.log(`🎨 Theme set to: ${theme}`);
}

// Mobile Navigation Management
function initMobileNavigation() {
  console.log('📱 Initializing mobile navigation...');
  
  // Mobile menu toggle
  if (elements.mobileMenuBtn) {
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    console.log('✅ Mobile menu button event listener added');
  }
  
  if (elements.mobileNavClose) {
    elements.mobileNavClose.addEventListener('click', closeMobileMenu);
    console.log('✅ Mobile menu close event listener added');
  }
  
  if (elements.mobileNavOverlay) {
    elements.mobileNavOverlay.addEventListener('click', closeMobileMenu);
    console.log('✅ Mobile menu overlay event listener added');
  }
  
  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.mobileNav?.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  
  // Close mobile menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && elements.mobileNav?.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const isActive = elements.mobileNav?.classList.contains('active');
  console.log(`📱 Mobile menu toggle - currently: ${isActive ? 'open' : 'closed'}`);
  
  if (isActive) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  console.log('📱 Opening mobile menu');
  elements.mobileMenuBtn?.classList.add('active');
  elements.mobileNav?.classList.add('active');
  elements.mobileNavOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  console.log('📱 Closing mobile menu');
  elements.mobileMenuBtn?.classList.remove('active');
  elements.mobileNav?.classList.remove('active');
  elements.mobileNavOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}

// Portfolio Modal Management
function initPortfolioModal() {
  console.log('🖼️ Initializing portfolio modal...');
  
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modalOverlay = elements.projectModal?.querySelector('.modal-overlay');
  
  console.log(`Found ${portfolioItems.length} portfolio items`);
  
  // Add click handlers to portfolio items
  portfolioItems.forEach(item => {
    const projectId = parseInt(item.getAttribute('data-project'));
    
    // Handle clicks on the entire portfolio item
    item.addEventListener('click', (e) => {
      // Don't open modal if clicking on external links
      if (e.target.closest('a[target="_blank"]')) {
        console.log('🔗 External link clicked, not opening modal');
        return;
      }
      e.preventDefault();
      console.log(`🖼️ Portfolio item clicked: ${projectId}`);
      openProjectModal(projectId);
    });
    
    // Also handle clicks specifically on view project button
    const viewBtn = item.querySelector('.view-project');
    if (viewBtn) {
      viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(`👁️ View project button clicked: ${projectId}`);
        openProjectModal(projectId);
      });
    }
    
    // Prevent modal from opening when clicking external links
    const externalLinks = item.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  });
  
  // Modal close handlers
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeProjectModal);
    console.log('✅ Modal close button event listener added');
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProjectModal);
    console.log('✅ Modal overlay event listener added');
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.projectModal?.classList.contains('show')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = portfolioData.portfolio.find(p => p.id === projectId);
  
  if (project) {
    console.log(`🖼️ Opening modal for project: ${project.title}`);
    
    // Populate modal content
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDemo = document.getElementById('modal-demo');
    const modalGithub = document.getElementById('modal-github');
    
    if (modalImage) modalImage.src = project.image;
    if (modalImage) modalImage.alt = project.title;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;
    if (modalDemo) modalDemo.href = project.live;
    if (modalGithub) modalGithub.href = project.github;
    
    // Update technologies
    const techContainer = document.getElementById('modal-tech');
    if (techContainer) {
      techContainer.innerHTML = '';
      project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        techContainer.appendChild(techTag);
      });
    }
    
    // Show modal
    if (elements.projectModal) {
      elements.projectModal.classList.remove('hidden');
      // Force reflow
      elements.projectModal.offsetHeight;
      setTimeout(() => {
        elements.projectModal.classList.add('show');
      }, 10);
      
      document.body.style.overflow = 'hidden';
    }
  } else {
    console.error(`❌ Project not found with ID: ${projectId}`);
  }
}

function closeProjectModal() {
  console.log('🖼️ Closing project modal');
  if (elements.projectModal) {
    elements.projectModal.classList.remove('show');
    setTimeout(() => {
      elements.projectModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }
}

// Contact Form Management
function initContactForm() {
  console.log('📧 Initializing contact form...');
  
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleFormSubmit);
    console.log('✅ Contact form submit event listener added');
    
    // Real-time validation
    const formInputs = elements.contactForm.querySelectorAll('.form-control');
    formInputs.forEach(input => {
      input.addEventListener('blur', validateField);
      input.addEventListener('input', clearFieldError);
    });
    console.log(`✅ Added validation to ${formInputs.length} form inputs`);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log('📧 Contact form submitted');
  
  const formData = new FormData(elements.contactForm);
  const fields = {
    name: formData.get('name')?.trim(),
    email: formData.get('email')?.trim(),
    subject: formData.get('subject')?.trim(),
    message: formData.get('message')?.trim()
  };
  
  console.log('📧 Form data:', fields);
  
  // Validate all fields
  let isValid = true;
  Object.keys(fields).forEach(fieldName => {
    const field = elements.contactForm.querySelector(`[name="${fieldName}"]`);
    if (!validateField({ target: field })) {
      isValid = false;
    }
  });
  
  if (isValid) {
    console.log('✅ Form validation passed - showing success message');
    showSubmissionSuccess();
    elements.contactForm.reset();
    
    // Clear any remaining errors
    Object.keys(fields).forEach(fieldName => {
      clearFieldError({ target: elements.contactForm.querySelector(`[name="${fieldName}"]`) });
    });
  } else {
    console.log('❌ Form validation failed');
  }
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}-error`);
  
  let errorMessage = '';
  
  // Required field validation
  if (!value) {
    errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
  }
  // Email validation
  else if (fieldName === 'email' && !isValidEmail(value)) {
    errorMessage = 'Please enter a valid email address';
  }
  // Message length validation
  else if (fieldName === 'message' && value.length < 10) {
    errorMessage = 'Message must be at least 10 characters long';
  }
  // Name validation
  else if (fieldName === 'name' && value.length < 2) {
    errorMessage = 'Name must be at least 2 characters long';
  }
  // Subject validation
  else if (fieldName === 'subject' && value.length < 3) {
    errorMessage = 'Subject must be at least 3 characters long';
  }
  
  if (errorMessage) {
    showFieldError(errorElement, errorMessage);
    return false;
  } else {
    clearFieldError(e);
    return true;
  }
}

function showFieldError(errorElement, message) {
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

function clearFieldError(e) {
  const field = e.target;
  const errorElement = document.getElementById(`${field.name}-error`);
  if (errorElement) {
    errorElement.classList.remove('show');
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSubmissionSuccess() {
  console.log('🎉 Showing form submission success notification');
  
  // Create success notification
  const notification = document.createElement('div');
  notification.className = 'success-notification';
  notification.innerHTML = `
    <div class="success-content">
      <i class="fas fa-check-circle"></i>
      <span>Thank you! Your message has been sent successfully.</span>
    </div>
  `;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 3000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  const successContent = notification.querySelector('.success-content');
  if (successContent) {
    successContent.style.cssText = `
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 500;
    `;
  }
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Scroll Effects
function initScrollEffects() {
  console.log('📜 Initializing scroll effects...');
  
  // Header background on scroll
  window.addEventListener('scroll', debounce(() => {
    const scrolled = window.scrollY > 50;
    elements.header?.classList.toggle('scrolled', scrolled);
  }, 10));
  
  // Animate elements on scroll using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe portfolio items for animation
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(item);
  });
  
  // Timeline items animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    scrollObserver.observe(item);
  });
  
  console.log('✅ Scroll effects initialized');
}

// Add CSS for animated elements
const animateInCSS = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .timeline-item.animate-in {
    transform: translateX(0) !important;
  }
  
  .header.scrolled {
    background: rgba(var(--color-surface), 0.98) !important;
    backdrop-filter: blur(20px);
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  }
`;

// Inject animation CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = animateInCSS;
document.head.appendChild(styleSheet);

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debug: Log all sections found
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  console.log(`📋 Found ${sections.length} sections:`);
  sections.forEach(section => {
    console.log(`  - ${section.id} (classes: ${section.className})`);
  });
  
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  console.log(`🔗 Found ${navLinks.length} navigation links:`);
  navLinks.forEach(link => {
    console.log(`  - ${link.getAttribute('href')} (text: ${link.textContent})`);
  });
});

// Console welcome message
console.log(`
🚀 Portfolio Website Loaded Successfully!
👨‍💻 Built with Section-Based SPA Architecture
🎨 Design System: Custom CSS Variables with Dark/Light Theme
📱 Features: Section Navigation, Mobile Menu, Theme Toggle
🖼️ Portfolio: Interactive Modal System
📧 Contact: Form Validation & Success Notifications

${portfolioData.personal_info.name} - ${portfolioData.personal_info.title}
📧 ${portfolioData.personal_info.email}
📍 ${portfolioData.personal_info.location}

🔧 Debug Mode: Check console for navigation events
`);

// Export for testing/debugging
window.portfolioApp = {
  data: portfolioData,
  elements: elements,
  showSection: showSection,
  toggleTheme: toggleTheme,
  openProjectModal: openProjectModal,
  closeProjectModal: closeProjectModal
};
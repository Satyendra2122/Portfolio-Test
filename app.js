// Portfolio data from provided JSON
const portfolioData = {
  "personal_info": {
    "name": "Taylor Brooks",
    "title": "Full Stack Developer",
    "tagline": "Transforming ideas into powerful digital solutions",
    "location": "San Diego, CA",
    "email": "taylor@example.com",
    "phone": "+1 (555) 321-9876",
    "bio": "I'm a passionate full-stack developer with 4+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies, with a focus on creating intuitive user experiences and scalable architectures."
  },
  "skills": [
    {"name": "JavaScript", "level": 93, "category": "Frontend"},
    {"name": "React", "level": 90, "category": "Frontend"},
    {"name": "Vue.js", "level": 85, "category": "Frontend"},
    {"name": "TypeScript", "level": 88, "category": "Frontend"},
    {"name": "HTML/CSS", "level": 95, "category": "Frontend"},
    {"name": "Node.js", "level": 85, "category": "Backend"},
    {"name": "Python", "level": 82, "category": "Backend"},
    {"name": "MongoDB", "level": 84, "category": "Database"},
    {"name": "PostgreSQL", "level": 80, "category": "Database"},
    {"name": "AWS", "level": 75, "category": "Cloud"},
    {"name": "Docker", "level": 78, "category": "DevOps"},
    {"name": "Git", "level": 92, "category": "Tools"}
  ],
  "portfolio": [
    {
      "id": 1,
      "title": "Music Streaming Platform",
      "description": "Full-featured music streaming application with playlist management, social features, offline playback, and artist analytics. Built with real-time audio processing and recommendation algorithms.",
      "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      "technologies": ["React", "Node.js", "MongoDB", "WebAudio API", "Socket.io"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 2,
      "title": "Cryptocurrency Dashboard",
      "description": "Real-time cryptocurrency tracking and portfolio management application with advanced charting, price alerts, news integration, and trading simulation features.",
      "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
      "technologies": ["Vue.js", "Python", "PostgreSQL", "Chart.js", "WebSocket"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 3,
      "title": "Restaurant Management System",
      "description": "Comprehensive restaurant management solution with order processing, inventory tracking, staff scheduling, customer management, and detailed analytics dashboard.",
      "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      "technologies": ["React", "Express", "MongoDB", "Stripe", "QR Codes"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 4,
      "title": "Video Conferencing Platform",
      "description": "Secure video conferencing application with screen sharing, recording, chat, breakout rooms, and calendar integration. Supports up to 100 participants per call.",
      "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
      "technologies": ["Next.js", "WebRTC", "Socket.io", "MongoDB", "AWS"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 5,
      "title": "Personal Finance Tracker",
      "description": "Smart personal finance management app with expense tracking, budget planning, investment monitoring, bill reminders, and financial goal setting with AI insights.",
      "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      "technologies": ["React Native", "Firebase", "Plaid API", "Chart.js"],
      "github": "#",
      "live": "#"
    },
    {
      "id": 6,
      "title": "Code Collaboration Platform",
      "description": "Real-time code collaboration platform with live editing, version control integration, code review tools, and project management features for development teams.",
      "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      "technologies": ["React", "Node.js", "WebSocket", "Git API", "Monaco Editor"],
      "github": "#",
      "live": "#"
    }
  ],
  "experience": [
    {
      "company": "NextGen Software",
      "position": "Senior Full Stack Developer",
      "duration": "2023 - Present",
      "description": "Lead development of cutting-edge web applications and guide technical architecture decisions. Collaborate with cross-functional teams to deliver high-quality software solutions.",
      "achievements": [
        "Architected scalable applications serving 150K+ active users",
        "Reduced server costs by 40% through performance optimization",
        "Led development team of 5 engineers on flagship product",
        "Implemented automated testing reducing bugs by 75%"
      ]
    },
    {
      "company": "CodeCraft Solutions",
      "position": "Full Stack Developer",
      "duration": "2021 - 2023",
      "description": "Developed responsive web applications using modern JavaScript frameworks. Worked closely with designers and product managers to translate requirements into technical solutions.",
      "achievements": [
        "Built 18+ web applications with 99.9% uptime",
        "Improved user engagement by 55% through UX optimization",
        "Integrated 25+ third-party APIs and payment systems",
        "Mentored 2 junior developers in modern development practices"
      ]
    },
    {
      "company": "Digital Innovations Inc",
      "position": "Frontend Developer",
      "duration": "2020 - 2021",
      "description": "Focused on creating intuitive user interfaces and implementing responsive design principles. Collaborated with backend developers to integrate APIs and ensure seamless user experiences.",
      "achievements": [
        "Created 10+ responsive web interfaces with modern design",
        "Improved page load speeds by 65% through optimization",
        "Established component library used across 12+ projects",
        "Achieved 100% accessibility compliance on all projects"
      ]
    }
  ],
  "social_links": [
    {
      "platform": "GitHub",
      "url": "https://github.com",
      "icon": "fab fa-github"
    },
    {
      "platform": "LinkedIn", 
      "url": "https://linkedin.com",
      "icon": "fab fa-linkedin"
    },
    {
      "platform": "Twitter",
      "url": "https://twitter.com", 
      "icon": "fab fa-twitter"
    },
    {
      "platform": "Email",
      "url": "mailto:taylor@example.com",
      "icon": "fas fa-envelope"
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

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  initTheme();
  initSPANavigation();
  initMobileNavigation();
  initPortfolioModal();
  initContactForm();
  initSkillsAnimation();
  console.log('SPA Portfolio initialized successfully!');
}

// CRITICAL SPA FUNCTIONALITY
function showPage(pageId) {
  // Hide ALL page sections
  document.querySelectorAll('.page-section').forEach(page => {
    page.style.display = 'none';
    page.classList.remove('active');
  });
  
  // Show ONLY the target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    // Special handling for home page (needs flexbox)
    if (pageId === 'home') {
      targetPage.style.display = 'flex';
    } else {
      targetPage.style.display = 'block';
    }
    targetPage.classList.add('active');
    
    // Animate skills bars when skills page is shown
    if (pageId === 'skills') {
      setTimeout(animateSkillBars, 100);
    }
    
    // Update navigation active states
    updateActiveNavigation(pageId);
  }
}

function updateActiveNavigation(activePageId) {
  // Update desktop navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === activePageId) {
      link.classList.add('active');
    }
  });
  
  // Update mobile navigation
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === activePageId) {
      link.classList.add('active');
    }
  });
}

function initSPANavigation() {
  // Desktop navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      showPage(pageId);
    });
  });
  
  // Mobile navigation links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      showPage(pageId);
      closeMobileMenu(); // Close mobile menu after navigation
    });
  });
  
  // Hero buttons navigation
  document.querySelectorAll('[data-page]').forEach(button => {
    if (button.tagName === 'BUTTON') {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = button.getAttribute('data-page');
        showPage(pageId);
      });
    }
  });
  
  // Set initial active navigation (home page)
  updateActiveNavigation('home');
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  setTheme(theme);
  
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
  const icon = elements.themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  
  elements.themeToggle.style.transform = 'scale(0.8)';
  setTimeout(() => {
    elements.themeToggle.style.transform = 'scale(1)';
  }, 150);
}

// Mobile Navigation Management
function initMobileNavigation() {
  elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  elements.mobileNavClose.addEventListener('click', closeMobileMenu);
  elements.mobileNavOverlay.addEventListener('click', closeMobileMenu);
  
  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.mobileNav.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  
  // Close mobile menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && elements.mobileNav.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const isActive = elements.mobileNav.classList.contains('active');
  if (isActive) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  elements.mobileMenuBtn.classList.add('active');
  elements.mobileNav.classList.add('active');
  elements.mobileNavOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  elements.mobileMenuBtn.classList.remove('active');
  elements.mobileNav.classList.remove('active');
  elements.mobileNavOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Portfolio Modal Management
function initPortfolioModal() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modalOverlay = elements.projectModal.querySelector('.modal-overlay');
  
  portfolioItems.forEach(item => {
    const projectId = parseInt(item.getAttribute('data-project'));
    
    // Handle clicks on the entire portfolio item
    item.addEventListener('click', (e) => {
      if (e.target.closest('a[target="_blank"]')) {
        return;
      }
      e.preventDefault();
      openProjectModal(projectId);
    });
    
    // Handle view project button clicks
    const viewBtn = item.querySelector('.view-project');
    if (viewBtn) {
      viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
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
  elements.modalClose.addEventListener('click', closeProjectModal);
  modalOverlay.addEventListener('click', closeProjectModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.projectModal.classList.contains('show')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = portfolioData.portfolio.find(p => p.id === projectId);
  
  if (project) {
    // Populate modal content
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = project.title;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-demo').href = project.live;
    document.getElementById('modal-github').href = project.github;
    
    // Update technologies
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
      const techTag = document.createElement('span');
      techTag.className = 'tech-tag';
      techTag.textContent = tech;
      techContainer.appendChild(techTag);
    });
    
    // Show modal
    elements.projectModal.classList.remove('hidden');
    setTimeout(() => {
      elements.projectModal.classList.add('show');
    }, 10);
    
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  elements.projectModal.classList.remove('show');
  setTimeout(() => {
    elements.projectModal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

// Skills Animation
function initSkillsAnimation() {
  // Skills bars will be animated when skills page is shown
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar, index) => {
    // Reset width
    bar.style.width = '0%';
    
    // Animate to target width with stagger
    setTimeout(() => {
      const targetWidth = bar.style.width || bar.getAttribute('style').match(/width:\s*(\d+%)/)?.[1] || '0%';
      bar.style.width = targetWidth;
    }, index * 100);
  });
}

// Contact Form Management
function initContactForm() {
  elements.contactForm.addEventListener('submit', handleFormSubmit);
  
  // Real-time validation
  const formInputs = elements.contactForm.querySelectorAll('.form-control');
  formInputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(elements.contactForm);
  const fields = {
    name: formData.get('name')?.trim(),
    email: formData.get('email')?.trim(),
    subject: formData.get('subject')?.trim(),
    message: formData.get('message')?.trim()
  };
  
  // Validate all fields
  let isValid = true;
  Object.keys(fields).forEach(fieldName => {
    const field = elements.contactForm.querySelector(`[name="${fieldName}"]`);
    if (!validateField({ target: field })) {
      isValid = false;
    }
  });
  
  if (isValid) {
    showSubmissionSuccess();
    elements.contactForm.reset();
    
    // Clear any remaining errors
    Object.keys(fields).forEach(fieldName => {
      clearFieldError({ target: elements.contactForm.querySelector(`[name="${fieldName}"]`) });
    });
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
  
  notification.querySelector('.success-content').style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
  `;
  
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

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
  // Enhanced keyboard navigation for portfolio items
  if (e.key === 'Enter' || e.key === ' ') {
    const focusedElement = document.activeElement;
    if (focusedElement.classList.contains('view-project') || focusedElement.classList.contains('portfolio-item')) {
      e.preventDefault();
      const projectId = parseInt(focusedElement.getAttribute('data-project') || focusedElement.closest('.portfolio-item').getAttribute('data-project'));
      openProjectModal(projectId);
    }
  }
  
  // Navigate through portfolio items with arrow keys
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
    const currentIndex = portfolioItems.indexOf(document.activeElement);
    
    if (currentIndex !== -1) {
      e.preventDefault();
      const nextIndex = e.key === 'ArrowRight' 
        ? (currentIndex + 1) % portfolioItems.length
        : (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
      
      portfolioItems[nextIndex].focus();
    }
  }
});

// Make portfolio items focusable for accessibility
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.setAttribute('tabindex', '0');
  item.setAttribute('role', 'button');
  item.setAttribute('aria-label', `View details for ${item.querySelector('.portfolio-title').textContent}`);
});

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

// Console welcome message
console.log(`
🚀 SPA Portfolio Loaded Successfully!
👨‍💻 TRUE Single Page Application - No Scrolling!
🎨 Each section is a complete page experience
📱 Features: SPA Navigation, Theme Toggle, Mobile Menu, Portfolio Modals

${portfolioData.personal_info.name} - ${portfolioData.personal_info.title}
📧 ${portfolioData.personal_info.email}
📍 ${portfolioData.personal_info.location}

Navigation: Only ONE section visible at a time!
`);

// Export for testing/debugging
window.portfolioSPA = {
  data: portfolioData,
  showPage: showPage,
  elements: elements,
  toggleTheme: toggleTheme,
  openProjectModal: openProjectModal,
  closeProjectModal: closeProjectModal
};
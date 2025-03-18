// Enhanced animations and scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Reveal animations
  const sections = document.querySelectorAll('.content-section');
  const contactIcons = document.querySelector('.contact-icons');
  
  // Intersection Observer for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.classList.add('visible');
        
        // Find elements within the section to animate
        const text = section.querySelector('.section-text');
        const figure = section.querySelector('.stick-figure');
        
        if (text) text.style.visibility = 'visible';
        if (figure) figure.style.visibility = 'visible';
        
        observer.unobserve(section);
      }
    });
  }, { threshold: 0.3 });
  
  // Observe all sections
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Observe contact icons
  if (contactIcons) {
    observer.observe(contactIcons);
  }
  
  // Scroll arrow click handler
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const firstSection = document.querySelector('.content-section');
      firstSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}); 
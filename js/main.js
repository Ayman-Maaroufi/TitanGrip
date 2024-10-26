export default function Component() {
    return (
      <script>{`
        document.addEventListener('DOMContentLoaded', () => {
          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
              });
            });
          });
  
          // Hamburger menu functionality
          const hamburger = document.querySelector('.hamburger');
          const navLinks = document.querySelector('.nav-links');
  
          if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
              this.classList.toggle('active');
              navLinks.classList.toggle('active');
            });
          }
        });
      `}</script>
    )
  }

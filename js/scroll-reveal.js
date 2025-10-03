document.addEventListener("DOMContentLoaded", () => {
    // Elements to observe
    const projectContainers = document.querySelectorAll(".project-container");
    const fadeInElements = document.querySelectorAll(".fade-in"); // new elements
  
    // Intersection Observer for projects
    const projectObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    projectContainers.forEach(el => projectObserver.observe(el));
  
    // Intersection Observer for general fade-in elements
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // triggers fade-in CSS
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
  
    fadeInElements.forEach(el => fadeObserver.observe(el));
  });
  
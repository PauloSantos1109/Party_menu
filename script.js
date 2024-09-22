document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('.menu-section');
    const triggerBottom = window.innerHeight / 5 * 4;
  
    sections.forEach(section => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
  
const containers = document.querySelectorAll('.container');
const navLinks = document.querySelectorAll('.navigation');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);

      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
      }

      navLink.classList.add('active');
    }
  })
}, {
  threshold: 0.6,
})

containers.forEach(container => {
  observer.observe(container);
})
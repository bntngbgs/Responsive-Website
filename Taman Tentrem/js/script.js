const hamburger = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-list li a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
});

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
  });
});

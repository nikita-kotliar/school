const sectionHeroEl = document.querySelector('.hero');

window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }
});

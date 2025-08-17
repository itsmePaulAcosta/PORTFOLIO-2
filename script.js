// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// SCROLL REVEAL ANIMATION
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// SLICK SLIDER INITIALIZATION
$(function () {
  $('[data-title*="cf-slick-slider"]').each(function () {
    var containerClass = $(this).hasClass('container') ? 'containerInner' : 'col-inner';
    $('.' + containerClass, this).slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            dots: true
          }
        }
      ]
    });
  });
});

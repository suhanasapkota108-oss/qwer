const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide every 4 seconds
setInterval(showNextSlide, 4000);
// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById('carousel');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const itemWidth = carouselItems[0].offsetWidth;
  let position = 0;

  nextButton.addEventListener('click', () => {
    position -= itemWidth;
    if (position < -itemWidth * (carouselItems.length - 1)) {
      position = 0;
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    position += itemWidth;
    if (position > 0) {
      position = -itemWidth * (carouselItems.length - 1);
    }
    updateCarousel();
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(${position}px)`;
  }
});

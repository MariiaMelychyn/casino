document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.player-reviews__items');
  const prevButton = document.querySelector('.player-reviews__prev');
  const nextButton = document.querySelector('.player-reviews__next');
  let currentIndex = 0;
  let slidesToShow = 2;
  const totalSlides = slider.children.length;

  function updateSlidesToShow() {
    if (window.innerWidth <= 768) {
      slidesToShow = 1;
    } else {
      slidesToShow = 2;
    }
    moveSlider();
  }

  function moveSlider() {
    const slideWidth = slider.querySelector(
      '.player-reviews__item'
    ).offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextButton.addEventListener('click', function () {
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex++;
      moveSlider();
    }
  });

  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlider();
    }
  });

  window.addEventListener('resize', updateSlidesToShow);
  updateSlidesToShow();
});

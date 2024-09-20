const burgerMenu = document.getElementById('burgerMenu');
const modalNav = document.getElementById('modalNav');
const closeModalNav = document.getElementById('closeModalNav');

burgerMenu.addEventListener('click', function () {
  modalNav.style.display = 'block';
});

closeModalNav.addEventListener('click', function () {
  modalNav.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modalNav) {
    modalNav.style.display = 'none';
  }
});

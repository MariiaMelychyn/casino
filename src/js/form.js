const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');

const openSignupBtn = document.getElementById('openSignupForm');
const openLoginBtn = document.getElementById('openLoginForm');
const logOutBtn = document.getElementById('logOutButton');

const closeSignupBtn = document.getElementById('closeSignupForm');
const closeLoginBtn = document.getElementById('closeLoginForm');

function openLoginModal() {
  loginModal.style.display = 'block';
}

function openSignupModal() {
  signupModal.style.display = 'block';
}

function closeModal(modal) {
  modal.style.display = 'none';
}

openSignupBtn.addEventListener('click', openSignupModal);

openLoginBtn.addEventListener('click', openLoginModal);

closeSignupBtn.addEventListener('click', function () {
  closeModal(signupModal);
});
closeLoginBtn.addEventListener('click', function () {
  closeModal(loginModal);
});

window.addEventListener('click', function (event) {
  if (event.target === signupModal) {
    closeModal(signupModal);
  }
  if (event.target === loginModal) {
    closeModal(loginModal);
  }
});

document
  .getElementById('signupForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    console.log(`Зареєстровано: ${username}, пароль: ${password}`);

    openLoginBtn.style.display = 'none';
    logOutBtn.style.display = 'inline-block';

    closeModal(signupModal);
  });

document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    console.log(`Вхід виконано: ${username}, пароль: ${password}`);

    openLoginBtn.style.display = 'none';
    logOutBtn.style.display = 'inline-block';

    closeModal(loginModal);
  });

logOutBtn.addEventListener('click', function () {
  openLoginBtn.style.display = 'inline-block';
  logOutBtn.style.display = 'none';

  closeModal(signupModal);
  closeModal(loginModal);

  console.log('Користувач вийшов з системи');
});

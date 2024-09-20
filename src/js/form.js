document.addEventListener('DOMContentLoaded', function () {
  const signupModal = document.getElementById('signupModal');
  const loginModal = document.getElementById('loginModal');

  const openSignupBtn = document.getElementById('openSignupForm');
  const openLoginBtn = document.getElementById('openLoginForm');
  const logOutBtn = document.getElementById('logOutButton');

  const closeSignupBtn = document.getElementById('closeSignupForm');
  const closeLoginBtn = document.getElementById('closeLoginForm');

  function openLoginModal() {
    if (loginModal) {
      loginModal.style.display = 'block';
    } else {
      console.error('Login modal not found');
    }
  }

  function openSignupModal() {
    if (signupModal) {
      signupModal.style.display = 'block';
    } else {
      console.error('Signup modal not found');
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
    } else {
      console.error('Modal not found');
    }
  }

  if (openSignupBtn) {
    openSignupBtn.addEventListener('click', openSignupModal);
  } else {
    console.error('Signup button not found');
  }

  if (openLoginBtn) {
    openLoginBtn.addEventListener('click', openLoginModal);
  } else {
    console.error('Login button not found');
  }

  if (closeSignupBtn) {
    closeSignupBtn.addEventListener('click', function () {
      closeModal(signupModal);
    });
  } else {
    console.error('Close signup button not found');
  }

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', function () {
      closeModal(loginModal);
    });
  } else {
    console.error('Close login button not found');
  }

  window.addEventListener('click', function (event) {
    if (event.target === signupModal) {
      closeModal(signupModal);
    }
    if (event.target === loginModal) {
      closeModal(loginModal);
    }
  });

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;

      console.log(`Зареєстровано: ${username}, пароль: ${password}`);

      if (openLoginBtn) openLoginBtn.style.display = 'none';
      if (logOutBtn) logOutBtn.style.display = 'inline-block';

      closeModal(signupModal);
    });
  } else {
    console.error('Signup form not found');
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      console.log(`Вхід виконано: ${username}, пароль: ${password}`);

      if (openLoginBtn) openLoginBtn.style.display = 'none';
      if (logOutBtn) logOutBtn.style.display = 'inline-block';

      closeModal(loginModal);
    });
  } else {
    console.error('Login form not found');
  }

  if (logOutBtn) {
    logOutBtn.addEventListener('click', function () {
      if (openLoginBtn) openLoginBtn.style.display = 'inline-block';
      logOutBtn.style.display = 'none';

      closeModal(signupModal);
      closeModal(loginModal);

      console.log('Користувач вийшов з системи');
    });
  } else {
    console.error('Logout button not found');
  }
});

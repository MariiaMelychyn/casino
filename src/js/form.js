document.addEventListener('DOMContentLoaded', function () {
  const signupModal = document.getElementById('signupModal');
  const loginModal = document.getElementById('loginModal');
  const signupModalHero = document.getElementById('signupModalHero');
  const openSignupBtn = document.getElementById('openSignupForm');
  const openLoginBtn = document.getElementById('openLoginForm');
  const openSignupHeroBtn = document.getElementById('openSignupFromHero');
  const logOutBtn = document.getElementById('logOutButton');
  const closeSignupBtn = document.getElementById('closeSignupForm');
  const closeLoginBtn = document.getElementById('closeLoginForm');
  const closeSignupHeroBtn = document.getElementById('closeSignupFormHero');

  function updateButtonState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      if (openSignupBtn) openSignupBtn.style.display = 'none';
      if (openLoginBtn) openLoginBtn.style.display = 'none';
      if (logOutBtn) logOutBtn.style.display = 'inline-block';
    } else {
      if (openSignupBtn) openSignupBtn.style.display = 'inline-block';
      if (openLoginBtn) openLoginBtn.style.display = 'inline-block';
      if (logOutBtn) logOutBtn.style.display = 'none';
    }
  }

  updateButtonState();
  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block';
    } else {
      console.error('Modal not found');
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
    openSignupBtn.addEventListener('click', function () {
      openModal(signupModal);
    });
  } else {
    console.error('Signup button in header not found');
  }

  if (openLoginBtn) {
    openLoginBtn.addEventListener('click', function () {
      openModal(loginModal);
    });
  } else {
    console.error('Login button in header not found');
  }

  if (closeSignupBtn) {
    closeSignupBtn.addEventListener('click', function () {
      closeModal(signupModal);
    });
  } else {
    console.error('Close signup button in header not found');
  }

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', function () {
      closeModal(loginModal);
    });
  } else {
    console.error('Close login button in header not found');
  }

  if (openSignupHeroBtn) {
    openSignupHeroBtn.addEventListener('click', function () {
      openModal(signupModalHero);
    });
  } else {
    console.error('Signup button in hero section not found');
  }

  if (closeSignupHeroBtn) {
    closeSignupHeroBtn.addEventListener('click', function () {
      closeModal(signupModalHero);
    });
  } else {
    console.error('Close signup button in hero section not found');
  }

  window.addEventListener('click', function (event) {
    if (event.target === signupModal) {
      closeModal(signupModal);
    }
    if (event.target === loginModal) {
      closeModal(loginModal);
    }
    if (event.target === signupModalHero) {
      closeModal(signupModalHero);
    }
  });

  function handleSignup(event, modal, formId) {
    event.preventDefault();
    const username = document
      .getElementById(formId)
      .querySelector('[name="username"]').value;
    const password = document
      .getElementById(formId)
      .querySelector('[name="password"]').value;

    console.log(`Зареєстровано: ${username}, пароль: ${password}`);

    localStorage.setItem('isLoggedIn', 'true');
    updateButtonState();

    closeModal(modal);
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      handleSignup(event, signupModal, 'signupForm');
    });
  } else {
    console.error('Signup form in header not found');
  }

  const signupFormHero = document.getElementById('signupFormHero');
  if (signupFormHero) {
    signupFormHero.addEventListener('submit', function (event) {
      handleSignup(event, signupModalHero, 'signupFormHero');
    });
  } else {
    console.error('Signup form in hero section not found');
  }
  if (logOutBtn) {
    logOutBtn.addEventListener('click', function () {
      localStorage.setItem('isLoggedIn', 'false');
      updateButtonState();

      console.log('Користувач вийшов з системи');
    });
  } else {
    console.error('Logout button not found');
  }
});

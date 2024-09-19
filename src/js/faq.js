const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach(question => {
  question.addEventListener('click', function () {
    this.classList.toggle('faq__question--active');
    const answer = this.nextElementSibling;
    if (this.classList.contains('faq__question--active')) {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

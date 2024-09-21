const flagImg = document.getElementById('flag-img');
const langSelect = document.getElementById('lang-select');

langSelect.addEventListener('change', function () {
  const selectedValue = langSelect.value;
  let imgSrc = '';

  switch (selectedValue) {
    case 'at':
      imgSrc = 'images/lg/auvstralia.png';
      break;
    case 'en':
      imgSrc = 'images/lg/us.png';
      break;
    case 'fr':
      imgSrc = 'images/lg/france.png';
      break;
    case 'de':
      imgSrc = 'images/lg/germany.png';
      break;
  }

  flagImg.src = imgSrc;
  flagImg.alt = `${selectedValue.toUpperCase()} Flag`;
});
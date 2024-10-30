const button = document.querySelector('button');
const mainPopup = document.querySelector('.main-popup');

button.addEventListener('click', e => {
  mainPopup.style.display = 'block';
})

const popupClose = document.querySelector('.popup-close');
popupClose.addEventListener('click', () => {
  mainPopup.style.display = 'none';
})

mainPopup.addEventListener('click', e => {
  if (e.target.className === 'main-popup') {
    mainPopup.style.display = 'none';
  }
})

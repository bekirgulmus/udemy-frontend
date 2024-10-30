const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');

const usernamePattern = /^[a-z]{6,10}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value;


  if (usernamePattern.test(username)) {
    message.textContent = 'Başarılı';
  } else {
    message.textContent = 'Lütfen hepsini küçük harf ve 6-12 karakter arasında giriniz.';
  }
})

form.username.addEventListener('keyup', (e) => {
  if(usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class','success');
  } else {
    form.username.setAttribute('class','error');
  }
})

const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('clicked');
// });

const liElemanlari = document.querySelectorAll('li');


liElemanlari.forEach(el => {
  el.addEventListener('click', e => {
    e.target.remove();
  })
});

const ul = document.querySelector('ul');
// ul.remove();

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Javascript';
  ul.prepend(li);



});

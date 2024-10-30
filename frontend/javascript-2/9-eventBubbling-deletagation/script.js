const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('clicked');
// });

const liElemanlari = document.querySelectorAll('li');


const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

liElemanlari.forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
    console.log(e.target);
  })
});



button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Javascript';

  // sonuna ekledi.
  //ul.append(li);

  // başına ekledi.
  ul.prepend(li);
});

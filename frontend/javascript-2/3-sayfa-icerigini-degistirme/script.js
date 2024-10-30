const pDegeri = document.querySelector('p');
console.log(pDegeri.innerText);

pDegeri.innerText = 'Can Boz Fullstack Developer';

// const pDegerleri = document.querySelectorAll('p');
// pDegerleri.forEach(element => {
//   element.innerText += ' - test';
// })

const icerik = document.querySelector('.icerik');
icerik.innerHTML = '<h2>Vue.js, React JS, Angular JS</h2>';
// icerik.innerHTML += '<h2>Vue.js, React JS, Angular JS</h2>';

const ogrenciler = [
  'can', 'tuğba', 'elif'
];

ogrenciler.forEach(el => {
  icerik.innerHTML += `<p>${el}</p>`
})

const icerik = document.querySelector('p');
console.log(icerik.classList);

icerik.classList.add('can');
console.log(icerik.classList);
icerik.classList.remove('error');
console.log(icerik.classList);


const pEtiketleri = document.querySelectorAll('p')
pEtiketleri.forEach(pEtiketi => {

  if (pEtiketi.textContent.includes('success')) {
    pEtiketi.classList.add('success');
  }

  if (pEtiketi.textContent.includes('error')) {
    pEtiketi.classList.add('error');
  }

});

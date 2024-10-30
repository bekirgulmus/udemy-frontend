const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://yandex.com.tr');
link.textContent = 'Yandex';

const pEtiketi = document.querySelector('.icerik');
pEtiketi.setAttribute('class','new-class');


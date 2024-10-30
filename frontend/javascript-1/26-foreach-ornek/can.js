const ul = document.querySelector('.main');

let ogrencilerim = ['can','hakan','elif','tuba'];

let html = ``;

ogrencilerim.forEach(ogrenci => {
  html += `<li>${ogrenci}</li>`
})

ul.innerHTML = html;

console.log('Merhaba Dünya');

let email = 'cnboz@hotmail.com';
console.log(email);

// Birleştirme
let ad = 'Can';
let soyad = 'Boz';
let adSoyad = ad + ' ' + soyad;
console.log(adSoyad);

// Karakterleri Çekme
console.log(adSoyad[0]);
console.log(adSoyad[2]);

// Kaç Karakter
console.log(adSoyad.length);
// if (adSoyad.length > 0) {
//
// }

// Methodlar
console.log(adSoyad.toUpperCase());
console.log(adSoyad);
console.log(adSoyad.toLowerCase());

let index = adSoyad.indexOf('B');
console.log('B nin bulunduğu index : ' + index);

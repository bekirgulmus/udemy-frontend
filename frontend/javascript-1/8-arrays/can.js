let isimler = ['can', 'rıdvan', 'elif'];
//console.log(isimler[1]);

isimler[1] = 'Tuğçe';
//console.log(isimler[1]);

let yaslar = [3,18,25,50];
//console.log(yaslar[3]);

let rastgele = ['can', 'boz', 10, 15];
//console.log(rastgele);

// console.log(rastgele.length);

let tireli = isimler.join('-');
console.log(tireli);

let virgul = isimler.join(',');
console.log(virgul);

let sira = isimler.indexOf('elif');
console.log(sira);

let ekle = isimler.concat(['merve', 'suna']);
console.log(ekle);

let elemanEkle = isimler.push('Leyla');
console.log(isimler);
isimler.pop();
console.log(isimler);

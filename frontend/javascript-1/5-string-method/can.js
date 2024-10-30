let adSoyad = 'Ibrahim Can Boz';

let son = adSoyad.lastIndexOf('n');
console.log(son);

let bastanSona = adSoyad.slice(0,5);
console.log(bastanSona);

let bastanSonaSubStr = adSoyad.substr(5,6);
console.log(bastanSonaSubStr);

let yerDegistir = adSoyad.replace('n', 'w');
console.log(yerDegistir);

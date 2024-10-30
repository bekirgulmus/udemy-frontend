// ^can$ --> can ile başlayıp can ile bitiyorsa yani sadece ifade sadece "can" ise
// ^[a-zA-Z0-9]{5,10}$ --> ifade 5-ile 10 karakter arasındaysa.
// ^.{5,10}$ küçük harf büyük harf sayı ve özel karakterleri kabul eder.

const username = 'canboz';
const pattern = /^[a-z]{6,10}$/;

let sonuc = pattern.test(username);
// console.log(sonuc);

if (sonuc) {
  console.log('Başarılı');
} else {
  console.log('Başarısız');
}

// let sonuc = username.search(pattern);
// console.log(sonuc);

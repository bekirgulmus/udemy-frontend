const yas = 20;

if (yas > 18) {
  console.log('18 yaşından büyüktür.');
}

const adSoyad = ['can', 'tuğçe', 'elif'];

if (adSoyad.length > 2) {
  console.log('İşte benim öğrencilerim');
}

const sifre = '1234';

if (sifre.length >=8 ) {
  console.log('Şifre yeterince uzun');
} else {
  console.log('Şifreyi yeniden giriniz');
}

const yeniSifre = '12345678';
if (yeniSifre.length >= 12) {
  console.log('Şifre Güçlü');
} else if (yeniSifre.length >= 8) {
  console.log('Şifre yeterli.');
} else {
  console.log('Şifreyi yeniden giriniz');
}

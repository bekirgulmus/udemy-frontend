const dersler = [
  {isim: 'matematik', puan: 90},
  {isim: 'fizik', puan: 80},
  {isim: 'kimya', puan: 85},
];

let ogrenci = {
  ad : 'Can',
  yas: 29,
  email: 'cnboz@hotmail.com',
  sinif: 12,
  dersler: dersler,
  printLessons() {
    console.log(this.dersler)
    this.dersler.forEach(ders => {
      console.log(ders.isim);
    });
  }
}

ogrenci.printLessons();

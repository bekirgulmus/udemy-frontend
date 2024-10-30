let ogrenci = {
  ad : 'Can',
  yas: 29,
  email: 'cnboz@hotmail.com',
  sinif: 12,
  dersler: [
    'matematik',
    'fizik',
    'kimya'
  ],
  printLessons() {
    console.log(this.dersler)
    this.dersler.forEach(ders => {
      console.log(ders);
    });
  }
}

ogrenci.printLessons();

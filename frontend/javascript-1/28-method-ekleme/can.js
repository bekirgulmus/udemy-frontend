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
  login () {
    console.log('öğrenci giriş yaptı.');
  },
  logout () {
    console.log('öğrenci çıkış yaptı.');
  }
}

ogrenci.login();
ogrenci.logout();

const notlar = [15,45,32,0,100,90,7];

for (let i = 0; i < notlar.length; i++) {

  // if (notlar[i] === 100) {
  //   console.log('Bravo en yüksek notu sen aldın');
  //   break;
  // }

  if (notlar[i] === 100) {
    continue;
  }

  console.log(notlar[i]);
}

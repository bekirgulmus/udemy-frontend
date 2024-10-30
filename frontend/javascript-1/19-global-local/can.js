let yas = 29;

if (true) {
  let yas = 29;
  yas=35;
  console.log('İçerideki:', yas);
  if (true) {
    let yas = 50;
    console.log('İçeridekinin içindeki:', yas);
  }
}
console.log('Dışarıdaki:', yas);

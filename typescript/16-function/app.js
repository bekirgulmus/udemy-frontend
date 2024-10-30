// function add(a: number, b: number): number {
//   return a + b;
// }
//
// let toplam = add(10,20);
// console.log(toplam);
// function bastir (): void {
//   console.log('Can Boz');
// }
//
// bastir();
function birlestir(ad, soyad) {
    if (soyad === void 0) { soyad = 'Boz'; }
    return ad + ' ' + soyad;
}
var degisken = birlestir('Can', 'Bozzz');
console.log(degisken);

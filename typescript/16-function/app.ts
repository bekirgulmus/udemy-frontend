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

function birlestir(ad:string, soyad:string = 'Boz'): string {
  return ad +' '+ soyad;
}

let degisken = birlestir('Can', 'Bozzz');
console.log(degisken)

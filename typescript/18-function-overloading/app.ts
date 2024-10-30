// function add(a: number, b: number): number {
//   return a + b;
// }
//
// let degisken = add(4,5);
// console.log(degisken);

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

let degisken = add(5,8);
console.log(degisken);
let degisken2 = add('Merhaba',' Dünya');
console.log(degisken2);

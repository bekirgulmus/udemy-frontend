// function toplam(a:string, ...numbers:number[]): number {
//   console.log(a);
//   let total = 0;
//   numbers.forEach(number => {
//     total += number;
//   })
//
//   return total;
// }
//
// console.log(toplam('Can',10,20));
//

function birlestir(message:string, ...names:string[]) {
  console.log(message + ' ' + names.join(','));
}

birlestir('Merhaba','Can','Osman','Tuba')

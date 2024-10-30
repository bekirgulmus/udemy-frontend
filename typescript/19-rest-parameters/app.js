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
function birlestir(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + ' ' + names.join(','));
}
birlestir('Merhaba', 'Can', 'Osman', 'Tuba');

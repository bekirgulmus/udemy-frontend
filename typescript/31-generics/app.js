// function getRandomNumber(items: number[]) : number {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
//
// let numbers = [1, 2, 3, 4, 5];
//
// console.log(getRandomNumber(numbers));
//
// function getRandomString(items: string[]) : string {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
//
// let names = ['Can', 'Tuba', 'Merve'];
//
// console.log(getRandomString(names));
// function getRandomElement(items: any[]): any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
//
// let names = ['Can', 'Tuba', 'Merve'];
// let numbers = [1, 2, 3, 4, 5];
// console.log(getRandomElement(names));
// console.log(getRandomElement(numbers));
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var names = ['Can', 'Tuba', 'Merve'];
var numbers = [1, 2, 3, 4, 5];
console.log(getRandomElement(names));
console.log(getRandomElement(numbers));

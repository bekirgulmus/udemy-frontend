// interface Person {
//   firstName: string,
//   readonly lastName: string,
//   middleName?: string
// }
//
//
// function getFullName(person: Person) {
//   if (person.middleName) {
//     return `${person.firstName} ${person.middleName} ${person.lastName}`;
//   }
//   return `${person.firstName} ${person.lastName}`;
// }
//
// let person = {
//   firstName: "Can",
//   lastName: "Boz",
// }
//
// console.log(getFullName(person));


interface StringFormat {
  (str:string, isUpper:boolean):string;
}

let format: StringFormat;

format = function (str:string, isUpper:boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

console.log(format('Can Boz', false));

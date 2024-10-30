localStorage.setItem('name','Bekir');
localStorage.age = 27;

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name,age);

localStorage.removeItem('name');

name = localStorage.getItem('name');
console.log(name,age);

localStorage.clear(); // Tüm değerleri siler

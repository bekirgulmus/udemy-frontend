const names = ['can', 'tuğba', 'elif', 'hakan', 'osman'];
names.sort(); // a->Z sıralama yapar.
console.log(names);
names.reverse();
console.log(names); // z->A sıralama yapar.


const points = [70,75,25,3,10,80,27];
// points.sort(); // ilk karakterine göre sıralıyor. ikinci rakama bakmıyor.
// console.log(points);
// points.reverse();
// console.log(points);

points.sort((a, b) => b - a); // Büyükten küçüğe sıralar
console.log(points);


points.sort((a, b) => a - b); // Küçükten büyüğe sıralar
console.log(points);

const students = [
  {name: 'can', point: 40},
  {name: 'tuğba', point: 60},
  {name: 'elif', point: 30},
  {name: 'osman', point: 100},
];

// students.sort((a,b) => {
//   if (a.point > b.point) {
//     return -1;
//   } else if (a.point < b.point) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

students.sort((a,b) => b.point -a.point);
console.log(students);

const students = [
  {name: 'can', point: 40},
  {name: 'tuğba', point: 60},
  {name: 'elif', point: 30},
  {name: 'osman', point: 100},
  {name: 'hakan', point: 45},
  {name: 'deniz', point: 70},
]

// const filtered = students.filter(student => student.point < 50);
// console.log(filtered);
//
// const plusPoints = filtered.map(student => {
//   return `${student.name} adlı öğrenicinin yeni notu: (${student.point + 15})`;
// });
//
// console.log(plusPoints);

const newNotes = students.filter(student => student.point < 50).map(student => {
  return `${student.name} adlı öğrenicinin yeni notu: (${student.point + 15})`;
})

console.log(newNotes);

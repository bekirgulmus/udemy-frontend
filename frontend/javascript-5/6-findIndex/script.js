const points = [70,75,25,35,10,80,27];

const arrayIndex = points.findIndex(point => point === 35);
points[arrayIndex] = 45;
// console.log(points);

const students = [
  {name: 'can', point: 40},
  {name: 'tuğba', point: 60},
  {name: 'elif', point: 30},
  {name: 'osman', point: 100},
];

const objectIndex = students.findIndex(student => student.name === 'osman');
students[objectIndex].name = 'hakan';
console.log(students);

let x: number = 15;
let y: number = 25;

if (x > y) {
  console.log("X Y den büyüktür");
} else if (x < y) {
  console.log("X Y den küçüktür");
} else {
  console.log("X ve Y Eşittir");
}

x > y ? console.log('X Y den büyüktür') : (x < y ? console.log('X Y den küçüktür') : console.log('İki sayı Eşittir'))

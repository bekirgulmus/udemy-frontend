class Circle {
  static pi:number = 3.14;
  pi= 3;

  constructor() {
    Circle.pi++;
  }

  static hesapla(yaricap:number) {
    return this.pi * yaricap * yaricap;
  }
}

// console.log(Circle.pi);
// console.log(Circle.hesapla(5));

let objem = new Circle();
let objem2 = new Circle();
console.log(objem.pi);
console.log(Circle.pi);
console.log(Circle.hesapla(5));


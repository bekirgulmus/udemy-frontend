var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        Circle.pi++;
    }
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
// console.log(Circle.pi);
// console.log(Circle.hesapla(5));
var objem = new Circle();
var objem2 = new Circle();
console.log(objem.pi);
console.log(Circle.pi);
console.log(Circle.hesapla(5));

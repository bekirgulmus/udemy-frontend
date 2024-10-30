// interface Months<U,V> {
//   key: U,
//   value: V
// }
//
// let month: Months<number,string> = {
//   key: 1,
//   value: 'January'
// }
//
// console.log(month);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        this.items.splice(this.items.indexOf(o), 1);
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list);

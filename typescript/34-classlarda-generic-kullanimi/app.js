var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is owerflow');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error('This stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
var numbers = new Stack(5);
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
while (!numbers.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " in to stack."));
    numbers.push(n);
}
console.log(numbers);

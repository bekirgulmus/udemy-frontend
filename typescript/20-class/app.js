var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var kisiBilgim = new Person(43, 'Can', 'Boz');
console.log(kisiBilgim);
console.log(kisiBilgim.getFullName());

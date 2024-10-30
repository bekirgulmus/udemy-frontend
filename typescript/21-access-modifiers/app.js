var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    return Person;
}());
var kisiBilgim = new Person(43, 'Can', 'Boz');
console.log(kisiBilgim);
console.log(kisiBilgim.getFirstName());
console.log(kisiBilgim.getLastName());

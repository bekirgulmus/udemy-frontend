function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Can",
    lastName: "Boz",
};
console.log(getFullName(person));

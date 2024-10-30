interface Person {
  firstName: string,
  lastName: string,
}


function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "Can",
  lastName: "Boz",
}

console.log(getFullName(person));

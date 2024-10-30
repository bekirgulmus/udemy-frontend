class Person {
  id:number;
  firstName:string;
  lastName:string;

  constructor(id:number,firstName:string,lastName:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(
    id:number,
    firstName:string,
    lastName:string
  ) {
    super(id,firstName,lastName);
  }
}

let employee = new Employee(29,'Can','Boz');

console.log(employee.getFullName());

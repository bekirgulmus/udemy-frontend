interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empNumber: number
}

// let employee : IEmployee = {
//   empNumber: 1,
//   gender: 'Male',
//   name: 'Can'
// }

// console.log(employee);


class Employee implements IPerson{
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
}

let employee = new Employee('Can','Male');
console.log(employee)

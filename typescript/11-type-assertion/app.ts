let code:any = 123;

let empCode = <number>code;
console.log(typeof (empCode));

interface Employee {
  name: string,
  code: number,
}

let employee = <Employee> {

}

employee.name = 'Can';
console.log(typeof (employee));

console.log(employee.name);

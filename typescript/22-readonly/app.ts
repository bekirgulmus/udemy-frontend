class Person {
  readonly id:number;
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

let kisiBilgim = new Person(43,'Can','Boz');
//kisiBilgim.id = 5;

console.log(kisiBilgim.id);
console.log(kisiBilgim.getFullName());

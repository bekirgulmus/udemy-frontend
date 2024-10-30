class Person {
  public id:number;
  protected firstName:string;
  private lastName:string;

  constructor(id:number,firstName:string,lastName:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

}

let kisiBilgim = new Person(43,'Can','Boz');
console.log(kisiBilgim);
console.log(kisiBilgim.getFirstName());
console.log(kisiBilgim.getLastName());

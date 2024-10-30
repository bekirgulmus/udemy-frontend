interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  name: string;
  id:number;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;

let kisim: Employee = {
  id: 54,
  name: 'Can Boz',
  email: 'cnbz@hotmail.com',
  phone: '555555555'
}
console.log(kisim);

type Customer = BusinessPartner & Contact;

let musterim: Customer = {
  credit: 1234,
  email: 'asd@hotmail.com',
  name: 'Can Boz',
  phone: '3214324'
}

console.log(musterim);

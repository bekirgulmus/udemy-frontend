// type tip = string |number;
//
// function add(a: tip, b: tip) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
//
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a.concat(b);
//   }
//
//   throw new Error('Lütfen doğru formatta data gönderin');
// }
//
// console.log(add(5,6));

class Customer {
  isCreditAllowed(): boolean {
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
  }

  return message;
}

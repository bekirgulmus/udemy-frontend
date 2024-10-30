abstract class Departmant {

  constructor(public name: string) {
  }

  printName():void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Departmant {
  constructor() {
    super('Accounting and Auding');
  }

  printMeeting() {
    console.log('The Accounting Department meets each Monday at 10 am');
  }

  generateReports():void {
    console.log('Generating  accounting reports....');
  }
}

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

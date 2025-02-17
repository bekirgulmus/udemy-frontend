var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Departmant = /** @class */ (function () {
    function Departmant(name) {
        this.name = name;
    }
    Departmant.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Departmant;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auding') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10 am');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating  accounting reports....');
    };
    return AccountingDepartment;
}(Departmant));
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

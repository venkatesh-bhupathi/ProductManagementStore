"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var utilities_1 = require("../utilities");
var Customer = /** @class */ (function () {
    function Customer(customerId, customerName, address, email, phoneNumber, customerType, creditLimit, activeStatus, remarks) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.customerType = customerType;
        this.creditLimit = creditLimit;
        this.activeStatus = activeStatus;
        this.remarks = remarks;
    }
    Customer.prototype.toString = function () {
        return utilities_1.ObjectFormatter.format(this);
    };
    return Customer;
}());
exports.Customer = Customer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var models_1 = require("./models");
var MainClass = /** @class */ (function () {
    function MainClass() {
    }
    MainClass.main = function () {
        var customer = new models_1.Customer(1, "Northwind", "Bangalore", "info@northwind.com", "080-498349834", "SILVER", 12000, true, "Simple Remarks");
        common_1.LogManager.info(customer.toString());
    };
    return MainClass;
}());

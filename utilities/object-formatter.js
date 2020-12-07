"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFormatter = void 0;
var INVALID_ARGUMENTS = "Invalid Argument(s) Specified!";
var DELIMITER = ", ";
var START_POS = 0;
var NO_OF_TRAIL_CHARS = 2;
var ObjectFormatter = /** @class */ (function () {
    function ObjectFormatter() {
    }
    ObjectFormatter.format = function (obj) {
        if (!obj) {
            throw new Error(INVALID_ARGUMENTS);
        }
        var formattedMessage = "";
        for (var propertyIndex in obj) {
            var property = obj[propertyIndex];
            if (property !== null && typeof property !== "function") {
                formattedMessage += "${property}${DELIMITER}";
            }
        }
        formattedMessage = formattedMessage.substr(START_POS, formattedMessage.length - NO_OF_TRAIL_CHARS);
        return formattedMessage;
    };
    return ObjectFormatter;
}());
exports.ObjectFormatter = ObjectFormatter;

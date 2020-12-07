"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogManager = void 0;
var tslog_1 = require("tslog");
var LogManager = new tslog_1.Logger({
    displayDateTime: true,
    displayFilePath: "displayAll"
});
exports.LogManager = LogManager;

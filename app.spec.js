"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe("Testing Stack class", function () {
    it("We should be able to create an instance of Stack", function () {
        var stack = new app_1.Stack();
        expect(stack).toBeTruthy();
    });
});

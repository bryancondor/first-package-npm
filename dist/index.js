"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumar(numbers) {
    var _a;
    return ((_a = numbers === null || numbers === void 0 ? void 0 : numbers.map(function (n) { return +n; })) === null || _a === void 0 ? void 0 : _a.reduce(function (p, c) { return p + c; })) || 0;
}
exports.sumar = sumar;
function restar(num1, num2) {
    return num1 - num2;
}
exports.restar = restar;

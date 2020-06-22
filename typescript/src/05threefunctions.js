function add(num1, num2) {
    return num1 + num2;
}
var a1 = add(100, 200);
console.log(a1);
var add2 = function (num1, num2) {
    return num1 + num2;
};
var a2 = add2(100, 200);
console.log(a2);
var add3 = function (num1, num2) {
    return num1 + num2 + '';
};
var a3 = add3(100, 200);
console.log(a3);

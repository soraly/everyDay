//函数声明
function add(num1: number, num2: number): number {
    return num1 + num2
}
var a1 = add(100, 200);
console.log(a1);

//函数表达式 
var add2 = function (num1: number, num2: number) {
    return num1 + num2
}
var a2 = add2(100, 200);
console.log(a2);

//箭头函数
var add3 = (num1: number, num2: number): string => {
    return num1 + num2 + ''
}
var a3 = add3(100, 200);
console.log(a3);
//形参实参
function findxiaojiejie(age) {
    return '找到了' + age + '岁的小动物';
}
var jiejie1 = findxiaojiejie(20);
var jiejie2 = findxiaojiejie(30);
console.log(jiejie1, jiejie2);
//可选参数
function findxiaojiejie2(age, stature) {
    return '找到了' + age + '岁的小动物' + stature;
}
var jiejie3 = findxiaojiejie2(20, '很厉害');
var jiejie4 = findxiaojiejie2(30, '有点年纪了');
console.log(jiejie3, jiejie4);
//默认参数
function findxiaojiejie3(age, stature) {
    if (stature === void 0) { stature = '速度飞快'; }
    return '找到了' + age + '岁的小动物' + stature;
}
var jiejie5 = findxiaojiejie3(20);
var jiejie6 = findxiaojiejie3(30, '有点年纪了');
console.log(jiejie5, jiejie6);
//剩余参数
function findxiaojiejie4(age, stature) {
    if (stature === void 0) { stature = '速度飞快'; }
    var color = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        color[_i - 2] = arguments[_i];
    }
    console.log(color);
    return '找到了' + age + '岁的小动物' + stature;
}
findxiaojiejie4(15, 'blue', '加油', '好兄弟');

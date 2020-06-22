//形参实参
function findxiaojiejie(age: number): string {
    return '找到了' + age + '岁的小动物'
}
var jiejie1: string = findxiaojiejie(20);
var jiejie2: string = findxiaojiejie(30);
console.log(jiejie1, jiejie2);

//可选参数
function findxiaojiejie2(age: number, stature?: string): string {
    return '找到了' + age + '岁的小动物' + stature
}
var jiejie3: string = findxiaojiejie2(20, '很厉害');
var jiejie4: string = findxiaojiejie2(30, '有点年纪了');
console.log(jiejie3, jiejie4);

//默认参数
function findxiaojiejie3(age: number, stature: string = '速度飞快'): string {
    return '找到了' + age + '岁的小动物' + stature
}
var jiejie5: string = findxiaojiejie3(20);
var jiejie6: string = findxiaojiejie3(30, '有点年纪了');
console.log(jiejie5, jiejie6);

//剩余参数
function findxiaojiejie4(age: number, stature: string = '速度飞快', ...color: string[]): string {
    console.log(color);
    return '找到了' + age + '岁的小动物' + stature
}
findxiaojiejie4(15, 'blue','加油','好兄弟');

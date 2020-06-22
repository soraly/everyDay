var hello = 'hello,xiang';
hello = '3';
//数据类型
//声明数值类型的变量age，但不予赋值,就是undefined类型
var age;
var age = 123;
var str = 'hello';
var isOk = true;
//em
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
console.log(REN.yao); //2
var jijie;
(function (jijie) {
    jijie["chun"] = "\u6625\u5929";
    jijie["xia"] = "\u590F\u5929";
    jijie["qiu"] = "\u79CB\u5929";
    jijie["dong"] = "\u51AC\u5929";
})(jijie || (jijie = {}));
console.log(jijie.qiu); //秋天
var all = 123;
all = '123';

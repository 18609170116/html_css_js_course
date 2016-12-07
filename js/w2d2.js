/**
 * Created by lgm on 2016/12/7.
 */
// JavaScript把null、undefined、0、NaN和空字符串'' ""视为false，其他值一概视为true。
var startTime=new Date().getTime();
console.log(startTime);

var a = 123;

if (a) {
    console.log(a);
} else {
    console.log("不应该执行到这儿");
}


if (null || undefined || 0 || NaN || '' || "") {
    console.log("为真");
} else {
    console.log("为假");
}


//for循环
var arr = ['Google', 'Apple',  'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}

var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}
console.log("上面的循环正常结束了");


//in的用法
var person={
    name:"路人甲",
    password:"dkdkdkd"
}

if('name' in person){
    console.log("person有name属性");
}


//for ... in的用法
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (var key in o) {
    //该属性是o对象的而不是继承过来的，还记得上一讲的内容吗？
    if (o.hasOwnProperty(key)) {
        //由于Array也是对象，而它的每个元素的索引被视为对象的属性
        console.log(key+'='+o[key]);
    }
}

for (var key in o) {
    //该属性是o对象的而不是继承过来的，还记得上一讲的内容吗？
    if (key in o) {
        //由于Array也是对象，而它的每个元素的索引被视为对象的属性
        console.log(key+'='+o[key]);
    }
}
//这种方式迭代时，不会把继承自父类的属性如toString迭代出来。

if('toString' in o){
    console.log("toString in o 虽然它是继承的");
}


//while
var x = 0;
var n = 99;
while (true) {
    x = x + n;
    n = n - 2;
    if(n<(-1000)){
        break;
    }
}

console.log(x);

//do while
var n = 0;
do {
    n = n + 1;
} while (n < 100);
console.log(n);

var arr=[1,2,"tomcat",true,null];


//内置对象
var now = new Date();
// now; 					// Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
// now.getFullYear(); 		// 2015, 年份
// now.getMonth(); 		// 5, 月份，注意月份范围是0~11，5表示六月
// now.getDate(); 			// 24, 表示24号
console.log(now.getDay());
console.log(now.getSeconds()); 		// 22, 秒
console.log(now.getMilliseconds()); 	// 875, 毫秒数


var endTime = new Date().getTime();

console.log("执行时间："+(endTime-startTime)+" ms");

//设置时间
var d = new Date(2016, 12, 7, 11, 23, 30, 123);
console.log(d);

//正则表达式
var reg = /^\d{3}\s+\d{3,8}$/;
//var reg = /^\d{3}\-\d{3,8}$/;
var num1 = "028 119";
var num2 = '028  96516';
var num3 = '028  88888888';
console.log("正则表达式测试开始：");
console.log(reg.test(num1) + " " + reg.test(num2) + " " + reg.test(num3));

//邮件地址，请同学们测试一下！！！！！！
var re = /^[a-zA-Z0-9.]+@[a-z0-9]+.[a-z]{2,4}$/;
console.log(re.test("404837962@qq.com"));
console.log(re.test("akdkd@com.info"));
console.log(re.test('tomato@com.cn'));

//email 正则表达式
var emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;


//json
//序列化，把javascript对象转成字符串
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"博为峰\"软件技术公司',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

console.log(JSON.stringify(xiaoming));
//反序列化，把字符串转成javascript对象

console.log("执行反序列化");
var arr = JSON.parse('[1,2,3,true]');
for (var key in arr) {
    //该属性是o对象的而不是继承过来的，还记得上一讲的内容吗？
    if (arr.hasOwnProperty(key)) {
        //由于Array也是对象，而它的每个元素的索引被视为对象的属性
        console.log('arr[' + key + ']=' + arr[key]);
    }
}

//内置函数
var o = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    // 把number * 2:
    if (key === 'name') {
        return value + '同学';
    }
    return value;
}); // Object {name: '小明同学', age: 14}
//迭代对象
for (var key in o) {
    //该属性是o对象的而不是继承过来的，还记得上一讲的内容吗？
    if (o.hasOwnProperty(key)) {
        //由于Array也是对象，而它的每个元素的索引被视为对象的属性
        console.log('o.' + key + '=' + o[key]);
    }
}


//函数定义
console.log("第2种函数定义");
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs(-3));

console.log("第2种函数定义");
var mins = function (x, y) {
    return x - y;
}
console.log(mins(-3, -6));

//小练习

// 小练习：写一个函数，我们去购物，如果支付额度大于1000，5折优惠。函数返回值为打折后数值。discount 折扣
function pay(amount) {
    if (amount >= 20000) {
        return amount * 0.1
    } else if (amount >= 1000) {
        return amount * 0.5;
    } else {
        return amount;
    }
}

console.log(pay(2000) + " " + pay(100) + " " + pay(30000));

//函数
console.log('调用延时器');
var hello = function () {
    console.log('hello,延时器执行');
}
setTimeout(hello, 3000);//5秒后执行

console.log('前面的延时器执行完，接下来执行间隔。。。');

var hello2 = function () {
    console.log('hello2');
}
var i = 0;
setInterval(hello2, 5000);//5秒后执行


//方法
console.log("方法调用");
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

//this是个什么东东？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？

console.log("小明当前年龄：" + xiaoming.age); // function xiaoming.age()
console.log("age:" + xiaoming.age()); // 今年调用是25,明年调用就变成26了
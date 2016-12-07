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
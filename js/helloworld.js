/**
 * Created by lgm on 2016/12/6.
 */
// alert("Hello World!欢迎进入javascript世界");

//声明变量，赋值
// var x=12;
// var y=23;
// var z="tomcat";

//运算
// var added = x+y;
// console.log(added);
//
// var added2 = y+z;
// console.log(added2);

//if语句
// if(a===b){
//     alert(21323123);
// }else{
//
// }

//Nan
// var a=3/"adkdk";
// alert(a);
// alert(isNaN(a));

//数组的定义
// var array = [1, 2, 3.14, 'Hello', null, true,null];
//
// // arr[0]; // 返回索引为0的元素，即1
// // arr[5]; // 返回索引为5的元素，即true
// // arr[6]; // 索引超出了范围，返回undefined

// 数组的访问
// console.log("长度="+array.length);
// console.log(array[0]);
// console.log(array[5]);
// console.log(array[6]);
//
//数组的循环
// for(var i=0;i<array.length;i++){
//     console.log("array["+i+"]="+array[i]);
// }


//对象的定义和访问
// var phoneNumber1 = {
//     number:'1378598595',
//     guishudi:'成都',
//     'belong-to':"某人"
// }
//
// var person = {
//     name: 'Bob',
//     age: 20,
//     tags: ['js', 'web', 'mobile'],
//     city: 'Beijing',
//     hasCar: true,
//     zipcode: null,
//     phoneNumber:phoneNumber1
// };
//
// alert(person.name);
// alert(person.phoneNumber['belong-to']);

    //对象的操作
var xiaoming = {
        name: '小明'
    };
console.log(xiaoming.age); // undefined
xiaoming.age = 18; // 新增一个age属性
console.log(xiaoming.age); // 18
delete xiaoming.age; // 删除age属性
console.log(xiaoming.age); // undefined
delete xiaoming['name']; // 删除name属性
console.log(xiaoming.name); // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

//判断是否拥有某个属性，不管它是不是继承来的
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
if ('name' in xiaoming) {
    console.log("有名字");
}
if ('grade' in xiaoming) {
    console.log('有班级');
}

if ('toString' in xiaoming) {
    console.log("有toString属性");
}

//判断是某个对象自身拥有的属性
console.log(xiaoming.hasOwnProperty('name')); // true
console.log(xiaoming.hasOwnProperty('toString')); // false
console.log(viewObject(xiaoming.toString()));


//对象的迭代
function viewObject(obj) {
    var msg = '';
    for (var a in obj) {
        msg += a + '   ';
    }
    return msg;
}

//弹窗

// if (confirm('确认退出吗?')) {    //如果点“是”
//     alert("是");
// } else {												//如果点“否”
//     alert("否");
// }

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
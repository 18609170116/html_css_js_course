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
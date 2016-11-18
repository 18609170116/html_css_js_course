# w2d2-JavaScript中的内置对象和自定义对象、定时器、延时器 备课记录

## 1、知识点梳理

- ### 条件判断

  ```
  var age = 20;
  if (age >= 18) { // 如果age >= 18为true，则执行if语句块
      alert('adult');
  } else { // 否则执行else语句块
      alert('teenager');
  }
  ```


  > 1、尽量不要省略{}
  >
  > 2、`if...else...`语句的执行特点是二选一，在多个`if...else...`语句中，如果某个条件成立，则后续就不再继续判断了。
  >
  > 3、JavaScript把`null`、`undefined`、`0`、`NaN`和空字符串`''`视为`false`，其他值一概视为`true`。


- ### 循环

  有四种循环，分别是 for , for ... in, while , do... while

  **for循环：**

  `for`循环最常用的地方是利用索引来遍历数组：

  ```
  var arr = ['Apple', 'Google', 'Microsoft'];
  var i, x;
  for (i=0; i<arr.length; i++) {
      x = arr[i];
      alert(x);
  }
  ```

  `for`循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用`break`语句退出循环，否则就是死循环：

  ```
  var x = 0;
  for (;;) { // 将无限循环下去
      if (x > 100) {
          break; // 通过if判断来退出循环
      }
      x ++;
  }
  ```

  **for ... in:**

  `for`循环的一个变体是`for ... in`循环，它可以把一个对象的所有属性依次循环出来：

  `还记得上节课讲对象的时候说的in是做什么的吗？`

  ```
  var o = {
      name: 'Jack',
      age: 20,
      city: 'Beijing'
  };
  for (var key in o) {
  	//该属性是o对象的而不是继承过来的，还记得上一讲的内容吗？
      if (o.hasOwnProperty(key)) {
      	//由于Array也是对象，而它的每个元素的索引被视为对象的属性
          alert(key+'='+o[key]); 
      }
  }
  ```

  **while:**

  `while`循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。比如我们要计算100以内所有奇数之和，可以用while循环实现：

  ```
  var x = 0;
  var n = 99;
  while (n > 0) {
      x = x + n;
      n = n - 2;
  }
  console.log(x); // 2500
  ```

  **do...while:**

  最后一种循环是`do { ... } while()`循环，它和`while`循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：

  ```
  var n = 0;
  do {
      n = n + 1;
  } while (n < 100);
  n; // 100
  ```

- ###内置对象


  在JavaScript的世界里，一切都是对象。

  但是某些对象还是和其他对象不太一样。为了区分对象的类型，我们用`typeof`操作符获取对象的类型，它总是返回一个字符串：

  > **typeof** 用来判断对象的类型

  ```
  typeof 123; 		// 'number'
  typeof NaN; 		// 'number'
  typeof 'str'; 		// 'string'
  typeof true; 		// 'boolean'
  typeof undefined; 	// 'undefined'
  typeof Math.abs; 	// 'function'
  typeof null; 		// 'object'
  typeof []; 			// 'object'
  typeof {}; 			// 'object'
  ```

  > 可见，`number`、`string`、`boolean`、`function`和`undefined`有别于其他类型。
  >
  > 特别注意`null`的类型是`object`，`Array`的类型也是`object`，因此我们用`typeof`将无法区分出`null`、`Array`和通常意义上的object——`{}`。


- ### 常用的内置对象

  所有编程语言都具有内部（或内置的）对象来创建语言的基本功能。内部对象是编写自定义代码所用语言的基础。

  javascript中的内置对象主要有Number、Boolean、String、Date、Array、Math等。

  ### Date对象

  在JavaScript中，Date对象用来表示日期和时间。

  ```
  要获取系统当前时间，用：
  var now = new Date();
  now; 					// Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
  now.getFullYear(); 		// 2015, 年份
  now.getMonth(); 		// 5, 月份，注意月份范围是0~11，5表示六月
  now.getDate(); 			// 24, 表示24号
  now.getDay(); 			// 3, 表示星期三
  now.getHours(); 		// 19, 24小时制
  now.getMinutes(); 		// 49, 分钟
  now.getSeconds(); 		// 22, 秒
  now.getMilliseconds(); 	// 875, 毫秒数
  now.getTime(); 			// 1435146562875, 以number形式表示的时间戳

  如果要创建一个指定日期和时间的Date对象，可以用：
  var d = new Date(2015, 5, 19, 20, 15, 30, 123);
  d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)
  或者
  var d = Date.parse('2015-06-24T19:49:22.875+08:00');
  d; // 1435146562875
  但它返回的不是Date对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个Date：
  var d = new Date(1435146562875);
  d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)

  Date对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的UTC时间：
  var d = new Date(1435146562875);
  d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
  d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时
  ```

- ### RegExp

  如何判断一个字符串是合法的email呢？有很多种办法，但使用正则表达式是最有效的解决这种匹配问题的办法。

  因为正则表达式也是用字符串表示的，所以，我们要首先了解如何用字符来描述字符。

  ```
  \d 		1个数字
  \w 		一个字母或数字
  \s		匹配1个空格，包括Tab
  .		匹配任意字符，但不能匹配换行符
  *		任意个字符
  + 		至少一个字符
  ?		0个或1个字符
  {n}    	n个字符
  {n,m}	n到m个字符
  []		范围匹配。
  \-		特殊字符要用\进行转义。
  |		或的关系
  ^		表示行的开头，^\d表示必须以数字开头
  $		表示行的结束，\w$表示必须以数字或字母结束。
  ```

  看个复杂的例子：

  ```
  ^\d{3}\s+\d{3,8}$,它匹配的是什么呢？
  ```

  javascript中创建正则表达式的方法有2种：

  第一种方式是直接通过`/正则表达式/`写出来，第二种方式是通过`new RegExp('正则表达式')`创建一个RegExp对象。

  ```
  var re1 = /ABC\-001/;
  var re2 = new RegExp('ABC\\-001');

  判断是否匹配用test
  var re = /^\d{3}\-\d{3,8}$/;
  re.test('010-12345'); // true
  re.test('010-1234x'); // false
  re.test('010 12345'); // false
  ```

  回到本小节的开头，如何写一个匹配email地址的正则表达式呢？

  ```
  // 开头 数不清个数字英文和点   @   英文和数字  .  3-4个英文 结尾
  var re = /^[a-zA-Z0-9.]+@[a-z0-9]+.[a-z]{2,4}$/;
  ```

  ​

  > ### 常用的正则表达式
  >
  > 请参考：http://www.sojson.com/regex/generate
  >
  > ​

- ### JSON

  JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。

  在JSON出现之前，大家一直用XML在网上传输数据。但搞起来很复杂，任何正常的程序员碰到XML都会觉得头很大。

  终于，在2002年的一天，道格拉斯·克罗克福特（Douglas Crockford）同学为了拯救深陷水深火热同时又被某几个巨型软件企业长期愚弄的软件工程师，发明了JSON这种超轻量级的数据交换格式。

  他设计的JSON是javascript的一个子集（子集不知道的同学，要复习一下初中代数哦！~），也就是说，在JSON中一共就那么几种数据类型

  ```
  number：和JavaScript的number完全一致；
  boolean：就是JavaScript的true或false；
  string：就是JavaScript的string；
  null：就是JavaScript的null；
  array：就是JavaScript的Array表示方式——[]；
  object：就是JavaScript的{ ... }表示方式。
  ```

  及以上的任意组合。

  另外，JSON定死了字符集是UTF-8，字符串必须用双引号"",Object的键也必须用双引号""。

  javascript对JSON有2种处理方式：

  **序列化：**

  就是把javascript的Object对象变成string

  ```
  var xiaoming = {
      name: '小明',
      age: 14,
      gender: true,
      height: 1.65,
      grade: null,
      'middle-school': '\"博为峰\"软件技术公司',
      skills: ['JavaScript', 'Java', 'Python', 'Lisp']
  };

  JSON.stringify(xiaoming); 
  ```

  格式化后的结果就是这样子的：

  ```
  {
    "name": "小明",
    "age": 14,
    "gender": true,
    "height": 1.65,
    "grade": null,
    "middle-school": "\"博为峰\"软件技术公司",
    "skills": [
      "JavaScript",
      "Java",
      "Python",
      "Lisp"
    ]
  }
  ```

  ### 反序列化：

  把json字符串变成javascript对象

  ```
  JSON.parse('[1,2,3,true]');				 	// [1, 2, 3, true]
  JSON.parse('{"name":"小明","age":14}'); 		// Object {name: '小明', age: 14}
  JSON.parse('true'); 					 	// true
  JSON.parse('123.45'); 					 	// 123.45

  还可以这样
  JSON.parse('{"name":"小明","age":14}', function (key, value) {
      // 把number * 2:
      if (key === 'name') {
          return value + '同学';
      }
      return value;
  }); // Object {name: '小明同学', age: 14}
  ```

- ### 函数

  ### 函数的定义

  在JavaScript中，定义函数的方式如下：

  ```
  function abs(x) {
      if (x >= 0) {
          return x;
      } else {
          return -x;
      }
  }
  ```

  上述`abs()`函数的定义如下：

  - `function`指出这是一个函数定义；
  - `abs`是函数的名称；
  - `(x)`括号内列出函数的参数，多个参数以`,`分隔；
  - `{ ... }`之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。

  第二种定义函数的方式

  ```
  var abs = function (x) {
      if (x >= 0) {
          return x;
      } else {
          return -x;
      }
  };
  ```

  在这种方式下，`function (x) { ... }`是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量`abs`，所以，通过变量`abs`就可以调用该函数。

  上述两种定义*完全等价*，注意第二种方式按照完整语法需要在函数体末尾加一个`;`，表示赋值语句结束。

  **函数调用**

  调用函数时，按顺序传入参数即可：

  ```
  abs(10); // 返回10
  ```

- ### 定时器和延时器

  执行一次

  ```
  function hello (){
      console.log('延时器执行');
  }
  setTimeout(hello,5000);//5秒后执行
  ```

  执行多次

  ```
  function hello (){
      console.log('定时器执行');
  }
  setInterval(hello,5000);//5秒后执行

  或者下面这样，使用匿名函数方式
  setInterval(function(){
      console.log('定时器执行');
  },200);
  ```


  **方法**

  定义在对象内部的函数叫方法。

  ```
  var xiaoming = {
      name: '小明',
      birth: 1990,
      age: function () {
          var y = new Date().getFullYear();
          return y - this.birth;
      }
  };

  //this是个什么东东？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？

  xiaoming.age; // function xiaoming.age()
  xiaoming.age(); // 今年调用是25,明年调用就变成26了
  ```

## 2、重点、难点知识讲解思路

-    数组的创建和对数组的操作。
-    条件、循环
-    理解内置对象
-    JSON的操作
-    掌握正则表达式的定义，作用，写法，常用正则表达式。
-    函数和方法，延时和定时


## 3、课堂补充案例

请利用循环遍历数组中的每个名字，并显示`Hello, xxx!`：

```
'use strict';
var arr = ['Bart', 'Lisa', 'Adam','小明'];
```

## 4、课堂提问准备

-  试解释为什么下面的代码显示的是`teenager`：

   ```
   'use strict';
   var age = 20;
   if (age >= 6) {
       alert('teenager');
   } else if (age >= 18) {
       alert('adult');
   } else {
       alert('kid');
   }
   ```


## 5、课后补充作业

1、小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：

- 低于18.5：过轻
- 18.5-25：正常
- 25-28：过重
- 28-32：肥胖
- 高于32：严重肥胖

用`if...else...`判断并显示结果：

```
'use strict';
var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var bmi = ???;
if ...
```

2、小明为了和女友庆祝情人节，特意制作了网页，并提前预定了法式餐厅。小明打算用JavaScript给女友一个惊喜留言：

```
'use strict';
var today = new Date();
if (today.getMonth() === 2 && today.getDate() === 14) {
    alert('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
}
```

结果女友并未出现。小明非常郁闷，请你帮忙分析他的JavaScript代码有何问题。

 ![js1](img\js1.png)

3、定义一个计算圆面积的函数`area_of_circle()`，它有两个参数：r: 表示圆的半径；pi: 表示π的值，如果不传，则默认3.14。

```
use strict';
function area_of_circle(r, pi) {
  
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    alert('测试通过');
} else {
    alert('测试失败');
}
```

4、Max是一个JavaScript新手，他写了一个`max()`函数，返回两个数中较大的那个：

```
'use strict';
function max(a, b) {
    if (a > b) {
        return
                a;
    } else {
        return
                b;
    }
}
alert(max(15, 20));
```

但是Max抱怨他的浏览器出问题了，无论传入什么数，`max()`函数总是返回`undefined`。请帮他指出问题并修复。
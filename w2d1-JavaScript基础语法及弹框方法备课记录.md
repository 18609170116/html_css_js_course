# w1d6-JavaScript基础语法及弹框方法备课记录

## 1、知识点梳理

- ### javascript是什么

  ```
  简单地说，JavaScript是一种运行在浏览器中的解释型的编程语言。
  JavaScript是世界上最流行的脚本语言，因为你在电脑、手机、平板上浏览的所有的网页，以及无数基于HTML5的手机App，交互逻辑都是由JavaScript驱动的。
  ```


- ### 为什么要学javascript

  ```
  在Web世界里，只有JavaScript能跨平台、跨浏览器驱动网页，与用户交互。
  JavaScript一度被认为是一种玩具编程语言，它有很多缺陷，所以不被大多数后端开发人员所重视。很多人认为，写JavaScript代码很简单，并且JavaScript只是为了在网页上添加一点交互和动画效果。

  但这是完全错误的理解。JavaScript确实很容易上手，但其精髓却不为大多数开发人员所熟知。编写高质量的JavaScript代码更是难上加难。

  一个合格的开发人员应该精通JavaScript和其他编程语言。如果你已经掌握了其他编程语言，或者你还什么都不会，请立刻开始学习JavaScript，不要被Web时代所淘汰。
  新兴的Node.js把JavaScript引入到了服务器端，JavaScript已经变成了全能型选手。
  ```


- ### 快速入门-HelloWorld

  ```
  先要有个html页面
  然后引入：
  <html>
  <head>
    <script>
      alert('Hello, world');
    </script>
  </head>
  <body>
    ...
  </body>
  </html>

  2种引入方式:
  	页内和外部文件
  ```

- ###浏览器上运行javascript和调试

  俗话说得好，“工欲善其事，必先利其器。”，写JavaScript的时候，如果期望显示`ABC`，结果却显示`XYZ`，到底代码哪里出了问题？不要抓狂，也不要泄气，作为小白，要坚信：JavaScript本身没有问题，浏览器执行也没有问题，有问题的一定是我的代码。

  ```
  chrome浏览器
  F12
  Console和Sources
  alert()和console.log();
  ```


- ### 基本语法

  ```
  JavaScript的语法和Java语言类似，每个语句以;结束

  语句块用{...}
  if (2 > 1) {
      x = 1;
      y = 2;
      z = 3;
  }
  {}的嵌套

  但是，JavaScript并不强制要求在每个语句的结尾加;，浏览器中负责执行JavaScript代码的引擎会自动在每个语句的结尾补上;

  注释2种方式：
  行注释：//

  块注释：
  /*
  从这里开始是块注释
  仍然是注释
  仍然是注释
  注释结束
  */

  变量的声明：
  声明1个：var i;
  声明多个：var i,j;
  不建议一行声明多个变量，像下面这样：
  var i=1;var j=5;
  ```

- ### 数据类型

  ### 1、Number

  ```
  123; 			// 整数123
  0.456; 			// 浮点数0.456
  1.2345e3; 		// 科学计数法表示1.2345x1000，等同于1234.5
  -99; 			// 负数
  NaN; 			// NaN表示Not a Number，当无法计算结果时用NaN表示
  Infinity; 		// Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
  ```

  Number可以直接做四则运算，规则和数学一致。

  ```
  1 + 2; 					// 3
  (1 + 2) * 5 / 2; 		// 7.5
  2 / 0; 					// Infinity
  0 / 0; 					// NaN
  10 % 3; 				// 1
  10.5 % 3; 				// 1.5
  ```

  ### 2、字符串

  字符串是以单引号'或双引号"括起来的任意文本，比如`'abc'`，`"xyz"`等等。请注意，`''`或`""`本身只是一种表示方式，不是字符串的一部分，因此，字符串`'abc'`只有`a`，`b`，`c`这3个字符。

  ### 3、布尔值

  ```
  true; 					// 这是一个true值
  false; 					// 这是一个false值
  2 > 1; 					// 这是一个true值
  2 >= 3; 				// 这是一个false值
  &&运算：
  true && true; 			// 这个&&语句计算结果为true
  true && false; 			// 这个&&语句计算结果为false
  false && true && false; // 这个&&语句计算结果为false
  ||运算：
  false || false; 		// 这个||语句计算结果为false
  true || false; 			// 这个||语句计算结果为true
  false || true || false; // 这个||语句计算结果为true
  ！运算
  ! true; 				// 结果为false
  ! false; 				// 结果为true
  ! (2 > 5); 				// 结果为true
  ```

- ### 比较运算符

  ```
  2 > 5; // false
  5 >= 2; // true
  7 == 7; // true

  与任意数据类型的比较：
  false == 0; // true
  false === 0; // false
  要特别注意相等运算符==。JavaScript在设计时，有两种比较运算符：
  第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
  第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

  重要：由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。

  另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
  NaN === NaN; // false
  唯一能判断NaN的方法是通过isNaN()函数：
  isNaN(NaN); // true
  ```

- ### null 和 undefined和not defined

  ```
  null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。

  在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。

  JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。

  not defined也是表示变量未定义。
  ```

- ### 数组

  数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。例如：

  ```
  2种创建数组的方式：
  [1, 2, 3.14, 'Hello', null, true];           //建议
  new Array(1, 2, 3); // 创建了数组[1, 2, 3]    //不建议

  数组的元素可以通过索引来访问。
  var arr = [1, 2, 3.14, 'Hello', null, true];
  arr[0]; // 返回索引为0的元素，即1
  arr[5]; // 返回索引为5的元素，即true
  arr[6]; // 索引超出了范围，返回undefined

  数组的循环
  var messages = ['1', '2', '3'];
  for (var i = 0; i < messages.length; i ++) {
    console(messages[i]);
  }
  ```

- ### 对象

  JavaScript的对象是一组由键-值组成的无序集合，例如：

  ```
  var person = {
      name: 'Bob',
      age: 20,
      tags: ['js', 'web', 'mobile'],
      city: 'Beijing',
      hasCar: true,
      zipcode: null
  };
  ```

  > javaScript对象的键都是字符串类型，值可以是任意数据类型。

  要获取一个对象的属性，我们用**对象变量.属性名**的方式：

  ```
  person.name; 		// 'Bob'
  person.zipcode; 	// null
  ```
  如果属性名包含特殊字符，比如有-号，就必须用`''`括起来。

  访问这个属性也无法使用`.`操作符，必须用`['xxx']`来访问：

  ```
  var xiaohong = {
      name: '小红', 
      'middle-school': 'No.1 Middle School'
  };
  alert(xiaohong['middle-school']);
  ```

  由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：

  ```
  var xiaoming = {
      name: '小明'
  };
  xiaoming.age; // undefined
  xiaoming.age = 18; // 新增一个age属性
  xiaoming.age; // 18
  delete xiaoming.age; // 删除age属性
  xiaoming.age; // undefined
  delete xiaoming['name']; // 删除name属性
  xiaoming.name; // undefined
  delete xiaoming.school; // 删除一个不存在的school属性也不会报错
  ```

  如果我们要检测`xiaoming`是否拥有某一属性，可以用`in`操作符：

  ```
  var xiaoming = {
      name: '小明',
      birth: 1990,
      school: 'No.1 Middle School',
      height: 1.70,
      weight: 65,
      score: null
  };
  'name' in xiaoming; // true
  'grade' in xiaoming; // false
  ```

  不过要小心，如果`in`判断一个属性存在，这个属性不一定是`xiaoming`的，它可能是`xiaoming`继承得到的：

  ```
  'toString' in xiaoming; // true
  ```

  因为`toString`定义在`object`对象中，而所有对象最终都会在原型链上指向`object`，所以`xiaoming`也拥有`toString`属性。

  要判断一个属性是否是`xiaoming`自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法：

  ```
  var xiaoming = {
      name: '小明'
  };
  xiaoming.hasOwnProperty('name'); // true
  xiaoming.hasOwnProperty('toString'); // false
  ```

- ###**变量**

  变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。

  变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、`$`和`_`的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如`if`、`while`等。申明一个变量用`var`语句，比如：

  ```
  var a; 				// 申明了变量a，此时a的值为undefined
  var $b = 1; 		// 申明了变量$b，同时给$b赋值，此时$b的值为1
  var s_007 = '007'; 	// s_007是一个字符串
  var Answer = true; 	// Answer是一个布尔值true
  var t = null; 		// t的值是null
  ```

  > 尽量取个有意义的变量名。
  >
  > 变量名也可以用中文，但是，请不要给自己找麻烦。

  在JavaScript中，使用等号`=`对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用`var`申明一次，例如：

  ```
  var a = 123;		// a的值是整数123
  a='who am i?';		// a变为字符串
  ```

  > 这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，赋值语句如下：

  ```
  int a = 123; 		// a是整数类型变量，类型用int申明
  a='who am i?'; 		// 错误：不能把字符串赋给整型变量
  ```

  > 和静态语言相比，动态语言更灵活，就是这个原因。
  >
  > 请不要把赋值语句的等号等同于数学的符号。赋值是指从把等号右边的值赋值左边变量。

- ### strict模式

  JavaScript在设计之初，为了方便初学者学习，并不强制要求用`var`申明变量。这个设计错误带来了严重的后果：如果一个变量没有通过`var`申明就被使用，那么该变量就自动被申明为全局变量：

  ```
  i = 10; 	// i现在是全局变量
  ```

  在同一个页面的不同的JavaScript文件中，如果都不用`var`申明，恰好都使用了变量`i`，将造成变量`i`互相影响，产生难以调试的错误结果。

  使用`var`申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突。

  为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过`var`申明变量，未使用`var`申明变量就使用的，将导致运行错误。

  启用strict模式的方法是在JavaScript代码的第一行写上：

  这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。

  来测试一下你的浏览器是否能支持strict模式：

  ```
  'use strict';
  // 如果浏览器支持strict模式，
  // 下面的代码将报ReferenceError错误:
  abc = 'Hello, world';
  alert(abc);
  ```

- 弹窗

  弹出让用户选择的窗口，如：

```
if (confirm('重新加载当前页' + location.href + '?')) {    //如果点“是”
    location.reload();
} else {												//如果点“否”
    location.assign('/discuss'); // 设置一个新的URL地址
}
```

## 2、重点、难点知识讲解思路

-    从javascript是什么，为什么学说起，引导学生了解javascript的强大功能和学好的必要性，通过例子快速入门，然后讲解2种引入方式，通过弹框示例，延伸到浏览器上的执行和调试，完了后正式开讲。

-    基础语法：因为前面已经学习了java的语法，可以先告诉学生，语法形式基本上都是一样的，让学生心里有个底，增强学习的信心。然后逐个讲解，中间让同学自己在电脑上试一试。



## 3、课堂补充案例

-    ​


## 4、课堂提问准备

-  已有对象 obj，如何判断obj是否是NaN?
-  如果javascript代码未能如期实现功能或者没有响应，应该怎么调试？


## 5、课后补充作业

1、打开[新浪首页](http://www.sina.com.cn/)，然后查看页面源代码，找一找引入的JavaScript文件和直接编写在页面中的JavaScript代码。然后在Chrome中打开开发者工具，在控制台输入`console.log('Hello');`，回车查看JavaScript代码执行结果。

2、逐个复习本课要点，要有练习，并上传练习。

3、下面这段代码，执行结果是怎么样的？

```
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <script>
        var i=0;
        while(true){
            i++;
        }
    </script>
</head>
<body>
<p>因为那该死的script,让我露个面都不行</p>
</body>
</html>
```

4、下面代码有什么问题？

```
{
    var messages = ['1', '2', '3'];
    for (var i = 0; i < messages.length; i ++) {
        setTimeout(function(){
            console.log(message[i]);
        }, i * 1500);
    }
}
```

5、解释下面代码的执行结果

```
alert('person' && 'woman');
alert('person' && 'woman' && 'boy');
```
提示：&&符号的运算逻辑是，如果&&前边的结果为true（所有非空字符串轮换成布尔值时都为true）时，则跳到&&后边执行计算，并返回&&后边的值


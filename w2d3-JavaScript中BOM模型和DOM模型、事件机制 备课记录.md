# w2d3-JavaScript中BOM模型和DOM模型、事件机制 备课记录

# 1、知识点梳理

前面我们比较完整地学习了javascript的语法，使用等等，我们学习javascript的目的是为了用javascript操作页面元素，那么，为了实现页面动态的响应和页面的各种酷炫、高大上的展示效果，我们需要先对浏览器模型(BOM)和DOM模型有个了解。

## 1.1 BOM模型

是browser object model的缩写，简称浏览器对象模型。

BOM提供了独立于内容而与浏览器窗口进行交互的对象。用来获取或设置浏览器的属性、行为，例如：新建窗口、获取屏幕分辨率、浏览器版本号等。

 ![bom_and_dom](img\bom_and_dom.png)

## 1.2 DOM模型

是document object model的缩写, 简称文档对象模型。是w3c规定的三类DOM标准接口，用来获取或设置文档中标签的属性，例如获取或者设置input表单的value值。

> - Core DOM 核心DOM，适用于各种结构化文档
> - XML DOM Java OOP，专用于XML文档
> - HTML DOM 专用于HTML文档
>
>

## 1.3 操作BOM对象

### 1、window对象

JavaScript可以获取浏览器提供的很多对象，并进行操作。

```
'use strict';
// 可以显示浏览器窗口大小参数:
alert('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

//打开窗口
window.open
```

### 2、screen对象

`screen`对象表示屏幕的信息，常用的属性有：

- screen.width：屏幕宽度，以像素为单位；
- screen.height：屏幕高度，以像素为单位；
- screen.colorDepth：返回颜色位数，如8、16、24。

```
'use strict';
alert('Screen size = ' + screen.width + ' x ' + screen.height);
```

### 3、navigator对象：

表示浏览器对象，最常用的属性包括：

- navigator.appName：浏览器名称；
- navigator.appVersion：浏览器版本；
- navigator.language：浏览器设置的语言；
- navigator.platform：操作系统类型；
- navigator.userAgent：浏览器设定的`User-Agent`字符串。

```
'use strict';
alert('appName = ' + navigator.appName + '\n' +
      'appVersion = ' + navigator.appVersion + '\n' +
      'language = ' + navigator.language + '\n' +
      'platform = ' + navigator.platform + '\n' +
      'userAgent = ' + navigator.userAgent);
```

### 4、location对象

`location`对象表示当前页面的URL信息。例如，一个完整的URL：

```
http://www.example.com:8080/path1/path2/dkdkkd....../index.html?a=1&b=2#TOP
```

可以用`location.href`获取。要获得URL各个部分的值，可以这么写：

```
location.protocol; 		// 'http'
location.host; 			// 'www.example.com'
location.port; 			// '8080'
location.pathname; 		// '/path/index.html'
location.search; 		// '?a=1&b=2'
location.hash; 			// 'TOP'
```

要加载一个新页面，可以调用`location.assign()`。

如果要重新加载当前页面，调用`location.reload()`方法非常方便。

```
if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/discuss'); // 设置一个新的URL地址
}
```

> 小练习：
>
> 1、请用javascript操作打开一个新窗口，窗口高度300，宽度400，地址是百度主页。
>
> 2、窗口打开后，获取当前窗口的location信息并输出到控制台。
>
> 3、请尝试在2秒延时后加载QQ的主页。



### 5、history对象

> 这个对象属于历史遗留对象，对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用`history.back()`可能会让用户感到非常愤怒。
>
> 任何情况，你都不应该使用`history`这个对象了。

### 6、document对象：

> 既是BOM模型中的二级对象，又是DOM模型中的根对象。

document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，`document`对象就是整个DOM树的根节点。

要查找DOM树的某个节点，需要从`document`对象开始查找。最常用的查找是根据ID和Tag Name。

```
//datalist=dl 
//dt=data title 
//dd=data description
<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</dl>

////////////////////////////////////////// js code

var i, s, menu, drinks;
menu = document.getElementById('drink-menu');
menu.tagName; // 'DL'

drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
alert(s);
```

`document`对象还有一个`cookie`属性，可以获取当前页面的Cookie。

Cookie是由服务器发送的key-value标示符。因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用Cookie来区分。当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如`user=ABC123XYZ(加密的字符串)...`，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。

Cookie还可以存储网站的一些设置，例如，页面显示的语言等等。

JavaScript可以通过`document.cookie`读取到当前页面的Cookie：

```
document.cookie; 	// 'v=123; remember=true; prefer=zh'
```

## 1.4 操作DOM对象

由于HTML文档被浏览器解析后就是一棵DOM树，要改变HTML的结构，就需要通过JavaScript来操作DOM。

始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：

- 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
- 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
- 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
- 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。

### 1、获取DOM

要获取dom对象，需要等到页面加载完成，使用如下方法

```
window.onload=function(){
	在这写dom选择器代码
	及操作dom的代码。
}
```

第一种方法是如下3种：

```
document.getElementById("q1")
document.getElementsByTagName("")
以及CSS选择器
document.getElementsByClassName("")
```

第二种方法是使用`querySelector()`和`querySelectorAll()`,请注意，条件中的语句跟css选择器的语法是一样的。

```
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');
```

### 2、更新DOM

一种是修改`innerHTML`属性，这个方式非常强大，不但可以修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树

```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p-id">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```

第二种是修改`innerText`或`textContent`属性，这样可以自动对字符串进行HTML编码，保证无法设置任何HTML标签：

```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
```

修改CSS也是经常需要的操作。DOM节点的`style`属性对应所有的CSS，可以直接获取或设置。因为CSS允许`font-size`这样的名称，但它并非JavaScript有效的属性名，所以需要在JavaScript中改写为驼峰式命名`fontSize`：

```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
```

### 3、插入DOM

当我们获得了某个DOM节点，想在这个DOM节点内插入新的DOM，应该如何做？

1.如果这个DOM节点是空的，例如<div id='id1'></div>，

```
var div = document.getElementById('id1');
div.innerHtml='我是一个div，我的内容被更改了';
```

2.如果这个DOM节点不是空的，那就不能这么做，因为`innerHTML`会直接替换掉原来的所有子节点。

有两个办法可以插入新的节点。

2.1一个是使用`appendChild`，把一个子节点添加到父节点的最后一个子节点。例如：

```
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
  
</div>
```

把`JavaScript`添加到``的最后一项：

```
var
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);
```

更多的时候我们会从零创建一个新的节点，然后插入到指定位置.

用 createElement创建一个dom元素：

```
var
    list = document.getElementById('list'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);
```

动态创建一个节点然后添加到DOM树中，可以实现很多功能。举个例子，下面的代码动态创建了一个``节点，然后把它添加到``节点的末尾，这样就动态地给文档添加了新的CSS定义：

```
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);
```

2.2 如果我们要把子节点插入到指定的位置怎么办？可以使用`parentElement.insertBefore(newElement, referenceElement);`，子节点会插入到`referenceElement`之前。

```
还是上面的例子
var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);
```

### 4、删除DOM

删除一个DOM节点就比插入要容易得多。

要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的`removeChild`把自己删掉：

```
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true
```

注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。

## 1.5 事件机制

很久以前有个叫Netscape的姑娘，她制订了Javascript的一套事件驱动机制（即事件捕获）

后来又有一个叫“IE”的小子，这孩子比较傲气，他认为“凭什么我要依照你的规则走”，于是他又创造了一套自己的规则（事件冒泡）

再后来，有个叫W3C的媒婆，想撮合这两个孩子，将他们的特点融合在了一起，这下，事件产生的顺序变成：

事件从根节点开始，逐级派送到子节点，若节点绑定了事件动作，则执行动作，然后继续走，这个阶段称为“**捕获阶段(Capture)**”；
执行完捕获阶段后，事件由子节点往根节点派送，若节点绑定了事件动作，则执行动作，然后继续走，这个阶段称为“**冒泡阶段(Bubble)**”。

 ![js_event](img\js_event.png)

捕获型事件：

```
<html>
<body>
    <div id="div1" style="width:300px;height:300px;background-color:red;">
        #div1
        <div id="div2" style="width:200px;height:200px;background-color:yellow;margin-top:30px;">
            #div2
        </div>
    </div>
</body>
<script>
	window.onload=function(){                
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    div1.addEventListener('click', alertID, true);
    div2.addEventListener('click', alertID, true);
  
    function alertID() {
        alert(this.id);
    }
    }
</script>
</html>
```

冒泡型事件

```
<html>
<head>
<script type="text/javascript">
    var i = 1;
    function Add(sText,objText)
    {
        document.getElementById("Console").innerHTML +=sText + "执行顺序：" + i + "<br />" + "<hr />";  
        i = i + 1;  
        //window.event.cancelBubble = true;   
    }
</script>
</head>
<body onclick="Add('body事件触发<br />','body')">
<div onclick="Add('div事件触发<br />','div')">
    <p onclick="Add('p事件触发<br />','p')" style="background:#c00;">点击</p>
</div>
<div id="Console" style="border:solid 1px #ee0; background:#ffc;"></div>
</body>
</html>
```

> 对javascript事件运行机制有兴趣的同学，可以看看这篇文章：
>
> http://www.ruanyifeng.com/blog/2014/10/event-loop.html

## 常用事件

所有的事件都会触发并调用1个或多个函数

onclick事件

```
<form name="form1" action="#" method="post">  
    <input type="button" name="button1"  value="点击"  onclick="a()" /> //点击按钮时弹出警告框  
</form>
```

onchange事件

```
<form name="form1" action="" method="post">  
    <input name="asd" type="text"  value="asd" onchange="a()" />  //当文本框的值变化时弹出警告框,事件中调用函数  
</form>  
```

事件中直接引用语句：

```
<form name="form1" action="" method="post">  
    <input name="asd" type="text"  value="asd" onchange="alert('asd的值改变为：' + this.value)" />  
```

onselect

```
<form name="form1" action="" method="post">  
   <textarea  name="textarea1" rows="10" cols="40" onselect="alert('该文档不能被复制')" />  
   Windows对象（上）（下）  
　 5.7.3 Location对象  
　 5.7.4 History对象  
　 5.7.5 Document对象  
　 5.7.6 字符串对象  
　 5.7.7 数学对象  
　 5.7.8 时间对象  
　 5.7.9 数组对象   
　 5.7.10自定义对象  
  </textarea>           //当选择该文本区域的文字时弹出警告框  
</form>
```

onLoad（图像或页面结束载入时产生）

```
function MM_openBrWindow(theURL, winName, features) {  
    window.open(theURL, winName, features);  
}  
----------------------------
<body onLoad="MM_openBrWindow('images/1.jpg','图片','toolbar=yes,width=800,height=800')">  
</body>
```

onmouseover和onmouseout

```
<a href="http://www.baidu.com" onmouseover="alert('鼠标移上来了')">baidu</a>
<font onmouseout="alert('鼠标移走了')">mouse</font>
```

# 2、重点、难点知识讲解思路

-    BOM模型和DOM模型的层次关系，包含的对象，先由BOM开始，再讲解到DOM，让同学们有个整体尤为重要。
-    DOM的操作
-    事件模型及常用事件类型的讲解。


# 3、课堂补充案例

1、如下的HTML结构：

```
<!-- HTML结构 -->
<div id="test-div">
<div class="c-red">
    <p id="test-p">JavaScript</p>
    <p>Java</p>
  </div>
  <div class="c-red c-green">
    <p>Python</p>
    <p>Ruby</p>
    <p>Swift</p>
  </div>
  <div class="c-green">
    <p>Scheme</p>
    <p>Haskell</p>
  </div>
</div>
```

请选择出指定条件的节点：

```
'use strict';
//////////////////////////////////////////////////////请补充答案
// 选择<p>JavaScript</p>:
var js = ???;

// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = ???;

// 选择<p>Haskell</p>:
var haskell = ???;


/////////////////////////////////////////////////////// 测试:
if (!js || js.innerText !== 'JavaScript') {
    alert('选择JavaScript失败!');
} else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
    alert('选择Python,Ruby,Swift失败!');
} else if (!haskell || haskell.innerText !== 'Haskell') {
    alert('选择Haskell失败!');
} else {
    alert('测试通过!');
}
```

# 4、课堂提问准备

-  在写代码的时候，问一些学过的代码的写法，比如js文件的引入,背景、边框的css表示。



# 5、课后补充作业

1、有如下的HTML结构，

```
<!-- HTML结构 -->
<div id="test-div">
  <p id="test-js">javascript</p>
  <p>Java</p>
</div>
```

请尝试获取指定节点并修改：

```
'use strict';

// 获取<p>javascript</p>节点:
var js = ???;

// 修改文本为JavaScript:
// TODO:

// 修改变量js所对应元素的CSS为: color: #ff0000, font-weight: bold
// TODO:


//////////////////////////////////////// 测试:
if (js && js.parentNode && js.parentNode.id === 'test-div' && js.id === 'test-js') {
    if (js.innerText === 'JavaScript') {
        if (js.style && js.style.fontWeight === 'bold' && (js.style.color === 'red' || js.style.color === '#ff0000' || js.style.color === '#f00' || js.style.color === 'rgb(255, 0, 0)')) {
            alert('测试通过!');
        } else {
            alert('CSS样式测试失败!');
        }
    } else {
        alert('文本测试失败!');
    }
} else {
    alert('节点测试失败!');
}
```

该作业需要新建一个页面，并引入js文件并运行成功，然后查看该页面源码，查看相应的修改项。

答案：

```
// 获取<p>javascript</p>节点:
var js = document.getElementById("test-js");

// 修改文本为JavaScript:
js.innerText = "JavaScript";

// 修改CSS为: color: #ff0000, font-weight: bold
js.style.color = "#ff0000";
js.style.fontWeight = "bold";
```

2、对于一个已有的HTML结构：

1. Scheme
2. JavaScript
3. Python
4. Ruby
5. Haskell

```
<!-- HTML结构 -->
<ol id="test-list">
    <li class="lang">Scheme</li>
    <li class="lang">JavaScript</li>
    <li class="lang">Python</li>
    <li class="lang">Ruby</li>
    <li class="lang">Haskell</li>
</ol>
```

按字符串顺序重新排序DOM节点：

```
'use strict';

// 对li排序:
//TODO



//////////////////////////////////////////// 测试:
;(function () {
    var
        arr, i,
        t = document.getElementById('test-list');
    if (t && t.children && t.children.length === 5) {
        arr = [];
        for (i=0; i<t.children.length; i++) {
            arr.push(t.children[i].innerText);
        }
        if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
            alert('测试通过!');
        }
        else {
            alert('测试失败: ' + arr.toString());
        }
    }
    else {
        alert('测试失败!');
    }
})();
```

答案：

```
   //获取到所有li
   var arr = document.getElementsByTagName('li');
   //新建临时数组，用来存放li中的innerHtml(为什么不用innerText呢？？？)
    var tempArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i].innerHTML;
    }
	//对临时数组排序
    tempArr.sort();
    //console.log(tempArr);
	//将排序后的赋回原li DOM对象数组
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerText = tempArr[i];
    }
```

3、

- JavaScript
- Swift
- HTML
- ANSI C
- CSS
- DirectX

```
<!-- HTML结构 -->
<ul id="test-list">
    <li>JavaScript</li>
    <li>Swift</li>
    <li>HTML</li>
    <li>ANSI C</li>
    <li>CSS</li>
    <li>DirectX</li>
</ul>
```

把与Web开发技术不相关的节点删掉：

```
'use strict';

//把与Web开发技术不相关的节点删掉
//TODO


// 测试:
;(function () {
    var
        arr, i,
        t = document.getElementById('test-list');
    if (t && t.children && t.children.length === 3) {
        arr = [];
        for (i = 0; i < t.children.length; i ++) {
            arr.push(t.children[i].innerText);
        }
        if (arr.toString() === ['JavaScript', 'HTML', 'CSS'].toString()) {
            alert('测试通过!');
        }
        else {
            alert('测试失败: ' + arr.toString());
        }
    }
    else {
        alert('测试失败!');
    }
})();
```

4、上题中，当删除动作触发时，请弹出是否删除对话框，当点击确定时删除，并查看删除后的页面效果，并在控制台上查看DOM元素。否则不做任何修改。
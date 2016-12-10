# w2d4 - JQuery 备课记录

# 一、知识点梳理

##jquery简介

- ###你可能听说过jQuery，它名字起得很土，但却是JavaScript世界中使用最广泛的一个库。

  江湖传言，全世界大约有80~90%的网站直接或间接地使用了jQuery。鉴于它如此流行，又如此好用，所以每一个入门JavaScript的前端工程师都应该了解和学习它。

  jQuery这么流行，肯定是因为它解决了一些很重要的问题。实际上，jQuery能帮我们干这些事情：

  - 消除浏览器差异：你不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；
  - 简洁的操作DOM的方法：写`$('#test')`肯定比`document.getElementById('test')`来得简洁；
  - 轻松实现动画、修改CSS等各种操作。

  jQuery的理念“Write Less, Do More“，让你写更少的代码，完成更多的工作！



##jQuery版本

目前jQuery有1.x和2.x两个主要版本，区别在于2.x移除了对古老的IE 6、7、8的支持，因此2.x的代码更精简。选择哪个版本主要取决于你是否想支持IE 6~8。

从[jQuery官网](http://jquery.com/download/)可以下载最新版本。jQuery只是一个`jquery-xxx.js`文件，但你会看到有compressed（已压缩）和uncompressed（未压缩）两种版本，使用时完全一样，但如果你想深入研究jQuery源码，那就用uncompressed版本。

## 使用jquery

1、从http://www.jq22.com/jquery-info122下载并解压至项目的js目录

2、在<head>中引入 jquery.js

3、在js脚本中使用$进行js操作

`$`是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量`jQuery`中，而`$`也是一个合法的变量名，它是变量`jQuery`的别名：

```
//在文档加载后激活函数：
$(document).ready(function(){
  alert('jQuery版本：' + $.fn.jquery);
});

//三种写法
$(document).ready(function);
$().ready(function);
$(function)
```

##选择器

jQuery的选择器就是帮助我们快速定位到一个或多个DOM节点。

### 基本选择器（6个）

#### 1、按ID查找

```
// 查找<div id="abc">:
var div = $('#abc');
```

jQuery的选择器不会返回`undefined`或者`null`

> jQuery对象和DOM对象之间可以互相转化：

```
var div = $('#abc'); // jQuery对象
var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
var another = $(divDom); // 重新把DOM包装为jQuery对象
```

#### 2、按tag查找

```
var ps = $('p'); // 返回所有<p>节点
ps.length; // 数一数页面有多少个<p>节点
```

#### 3、按class查找

按class查找注意在class名称前加一个`.`号

```
var a = $('.red'); // 所有节点包含`class="red"`都将返回
// 例如:
// <div class="red">...</div>
// <p class="green red">...</p>
```

#### 4、按属性查找

一个DOM节点除了`id`和`class`外还可以有很多属性，很多时候按属性查找会非常方便，比如在一个表单中按属性来查找：

```
var email = $('[name=email]'); 				// 找出<??? name="email">
var passwordInput = $('[type=password]'); 	// 找出<??? type="password">
var a = $('[items="A B"]'); 				// 找出<??? items="A B">
```

当属性的值包含空格等特殊字符时，需要用双引号括起来。

按属性查找还可以使用前缀查找或者后缀查找：

```
var icons = $('[name^=icon]'); 			// 找出所有name属性值以icon开头的DOM
// 例如: name="icon-1", name="icon-2"
var names = $('[name$=with]'); 			// 找出所有name属性值以with结尾的DOM
// 例如: name="startswith", name="endswith"
```

#### 5、组合查找

组合查找就是把上述简单选择器组合起来使用。如果我们查找`$('[name=email]')`，很可能把表单外的``也找出来，但我们只希望查找``，就可以这么写：

```
var emailInput = $('input[name=email]'); // 不会找出<div name="email">
```

同样的，根据tag和class来组合查找也很常见：

```
var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>
```

#### 6、多项选择器

多项选择器就是把多个选择器用`,`号组合起来一块选：

```
$('p,div'); // 把<p>和<div>都选出来
$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
```

要注意的是，选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素。

### 层级选择器

如果两个DOM元素具有层级关系（就是具有包含关系），就可以用`$('ancestor descendant')`来选择，层级之间用空格隔开。例如：

```
<!-- HTML结构 -->
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>
```

要选出JavaScript，可以用层级选择器：

```
$('ul.lang li.lang-javascript'); 		// [<li class="lang-javascript">JavaScript</li>]
$('div.testing li.lang-javascript'); 	// [<li class="lang-javascript">JavaScript</li>]
```

### 子选择器

子选择器`$('parent>child')`类似层级选择器，但是限定了层级关系必须是父子关系，就是``节点必须是``节点的直属子节点。还是以上面的例子：

```
$('ul.lang>li.lang-javascript'); // 可以选出[<li class="lang-javascript">JavaScript</li>]
$('div.testing>li.lang-javascript'); // [], 无法选出，因为<div>和<li>不构成父子关系
```

### 过滤器（Filter）

过滤器一般不单独使用，它通常附加在选择器上，帮助我们更精确地定位元素。观察过滤器的效果：

```
$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点

$('ul.lang li:first-child'); 			// 仅选出JavaScript
$('ul.lang li:last-child'); 			// 仅选出Lua
$('ul.lang li:nth-child(2)'); 			// 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); 		// 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); 		// 选出序号为奇数的元素
```

### 表单相关

针对表单元素，jQuery还有一组特殊的选择器：

```
:input：			可以选择<input>，<textarea>，<select>和<button>；
:file：			可以选择<input type="file">，和input[type=file]一样；
:checkbox：		可以选择复选框，和input[type=checkbox]一样；
:radio：			可以选择单选框，和input[type=radio]一样；
:focus：			可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；
:checked：		选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；
:enabled：		可以选择可以正常输入的<input>、<select>
等，也就是没有灰掉的输入；
:disabled：		和:enabled正好相反，选择那些不能输入的。
```

##操作DOM

jQuery的选择器很强大，用起来又简单又灵活，但是搞了这么久，我拿到了jQuery对象，到底要干什么？

答案当然是操作对应的DOM节点啦！

###1.修改Text和HTML

jQuery对象的`text()`和`html()`方法分别获取节点的文本和原始HTML文本，例如，如下的HTML结构：

```
<!-- HTML结构 -->
<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java &amp; JavaScript</li>
</ul>
```

分别获取文本和HTML：

```
$('#test-ul li[name=book]').text(); // 'Java & JavaScript'
$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'
```

如何设置文本或HTML？jQuery的API设计非常巧妙：无参数调用`text()`是获取文本，传入参数就变成设置文本，HTML也是类似操作，自己动手试试：

```
'use strict';
var j1 = $('#test-ul li.js');
var j2 = $('#test-ul li[name=book]');

j1.html('<span style="color: red">JavaScript</span>');
j2.text('JavaScript & ECMAScript');
```

### 2.修改CSS

jQuery对象有“批量操作”的特点，这用于修改CSS实在是太方便了。考虑下面的HTML结构：

```
<!-- HTML结构 -->
<ul id="test-css">
    <li class="lang dy"><span>JavaScript</span></li>
    <li class="lang"><span>Java</span></li>
    <li class="lang dy"><span>Python</span></li>
    <li class="lang"><span>Swift</span></li>
    <li class="lang dy"><span>Scheme</span></li>
</ul>
```

要高亮显示动态语言，调用jQuery对象的`css('name', 'value')`方法，我们用一行语句实现：

```
$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');
```

如果页面中已经有个一个class

```
.highlight{
  color: #dd1144;
  background-color: #ffd351;
}
```

则也可以使用如下语句达到同样效果

```
$('#test-css li.dy>span').addClass('highlight');
```

做练习3。



！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

### 3.显示和隐藏DOM

jQuery提供`show()`和`hide()`方法：

```
var a = $('a[target=_blank]');
a.hide(); // 隐藏
a.show(); // 显示
```

*注意*，隐藏DOM节点并未改变DOM树的结构，它只影响DOM节点的显示。这和删除DOM节点是不同的。

### 4.获取DOM信息

利用jQuery对象的若干方法，我们直接可以获取DOM的高宽等信息，而无需针对不同浏览器编写特定代码：

```
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
var div = $('#test-div');
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效
```

### 5.操作节点属性

`attr()`和`removeAttr()`方法用于操作DOM节点的属性：

```
// <div id="test-div" name="Test" start="1">...</div>

var div = $('#test-div');
div.attr('data'); // undefined, 属性不存在
div.attr('name'); // 'Test'
div.attr('name', 'Hello'); // div的name属性变为'Hello'
div.removeAttr('name'); // 删除name属性
div.attr('name'); // undefined
```

### 6.操作表单

对于表单元素，jQuery对象统一提供`val()`方法获取和设置对应的`value`属性：

```
<!-- HTML -->
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>

－－－－－－－－－－－－－－－－－－－－－－－－
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val('Hi'); // 文本区域已更新为'Hi'
```

### 7.修改DOM结构

#### 7.1添加DOM

要添加新的DOM节点，除了通过jQuery的`html()`这种暴力方法外，还可以用`append()`方法，例如：

```
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>
```

如何向列表新增一个语言？首先要拿到`ul`节点：

```
var ul = $('#test-div>ul');
```

然后，调用`append()`传入HTML片段：

```
ul.append('<li><span>Haskell</span></li>');
```

除了接受字符串，`append()`还可以传入原始的DOM对象，jQuery对象和函数对象：

```
// 创建DOM对象:
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
// 添加DOM对象:
ul.append(ps);

// 添加jQuery对象:
ul.append($('#scheme'));

// 添加函数对象:
ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>';
});
```

传入函数时，要求返回一个字符串、DOM对象或者jQuery对象。因为jQuery的`append()`可能作用于一组DOM节点，只有传入函数才能针对每个DOM生成不同的子节点。

`append()`把DOM添加到最后，`prepend()`则把DOM添加到最前。

同级用before()和after();

#### 7.2删除DOM

要删除DOM节点，拿到jQuery对象后直接调用`remove()`方法就可以了。如果jQuery对象包含若干DOM节点，实际上可以一次删除多个DOM节点：

```
var li = $('#test-div>ul>li');
li.remove(); // 所有<li>全被删除
```

## 事件

绑定事件：

```
/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

// 获取超链接的jQuery对象:
var a = $('#test-link');
a.on('click', function () {
    alert('Hello!');
});
```

`on`方法用来绑定一个事件，我们需要传入事件名称和对应的处理函数。

另一种更简化的写法是直接调用`click()`方法：

```
a.click(function () {
    alert('Hello!');
});
```

jQuery能够绑定的事件主要包括：

### 鼠标事件

> **click**: 鼠标单击时触发；
>
> **dblclick**：鼠标双击时触发；
>
> **mouseenter**：鼠标进入时触发；
>
> **mouseleave**：鼠标移出时触发；
>
> **mousemove**：鼠标在DOM内部移动时触发；
>
> **hover**：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

### 键盘事件

> 键盘事件仅作用在当前焦点的DOM上，通常是`<input>`和`<textarea>`。
>
> **keydown**：键盘按下时触发；
>
> **keyup**：键盘松开时触发；
>
> **keypress**：按一次键后触发。

### 其他事件

> **focus**：当DOM获得焦点时触发；
>
> **blur**：当DOM失去焦点时触发；
>
> **change**：当内容改变时触发；
>
> **submit**：当提交时触发；
>
> **ready**：当页面被载入并且DOM树完成初始化后触发。

取消绑定：通过off('click',function)实现。

```
function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);
```

## 内置动画

### show / hide/toggle

```
//隐藏
$('#test-form').hide(3000);

//显示
setTimeout(function(){
   $('#test-form').show(2000);
},3000);

$('#test-form').toggle(1000);
$('#test-form').toggle(1500);
```

### slideUp / slideDown/slideToggle

```
$('#test-form').slideUp('quick');
$('#test-form').slideDown('quick');
$('#test-form').slideToggle('middle');
```

### fadeIn / fadeOut

```
var div = $('#test-fade');
div.fadeOut('slow'); // 在0.6秒内淡出
```

### animate

```
var div = $('#test-animate');
div.animate({
    opacity: 0.25,
    width: '256px',
    height: '256px'
}, 3000, function () {
    console.log('动画已结束');
    // 恢复至初始状态:
    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
});
```

# 二、重点、难点知识讲解思路

-    各种选择器及其使用。

-    DOM的操作

-    事件

-    动画

              都应该由浅入深，配有代码和讲解，中间要让学生自己尝试。


# 三、课堂补充案例

无

# 四、课堂提问准备

-  常用的三种css选择器
-  原生document对文档的操作


# 五、课后补充作业

1、使用jQuery选择器分别选出指定元素：

- 仅选择JavaScript
- 仅选择Erlang
- 选择JavaScript和Erlang
- 选择所有编程语言
- 选择名字input
- 选择邮件和名字input

```
<!-- HTML结构 -->
<div id="test-jquery">
    <p id="para-1" class="color-red">JavaScript</p>
    <p id="para-2" class="color-green">Haskell</p>
    <p class="color-red color-green">Erlang</p>
    <p name="name" class="color-black">Python</p>
    <form class="test-form" target="_blank" action="#0" onsubmit="return false;">
        <legend>注册新用户</legend>
        <fieldset>
            <p><label>名字: <input name="name"></label></p>
            <p><label>邮件: <input name="email"></label></p>
            <p><label>口令: <input name="password" type="password"></label></p>
            <p><button type="submit">注册</button></p>
        </fieldset>
    </form>
</div>
```

运行查看结果：

```
'use strict';
var selected = null;

//TODO
selected = ???;

// 高亮结果:
if (!(selected instanceof jQuery)) {
    return alert('不是有效的jQuery对象!');
}
$('#test-jquery').find('*').css('background-color', '');
selected.css('background-color', '#ffd351');
```

2、针对如下HTML结构：

```
<!-- HTML结构 -->
<div class="test-selector">
    <ul class="test-lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
    <ol class="test-lang">
        <li class="lang-swift">Swift</li>
        <li class="lang-java">Java</li>
        <li class="lang-c">C</li>
    </ol>
</div>
```

选出相应的内容并观察效果：

```
'use strict';
var selected = null;

// 分别选择所有语言，所有动态语言，所有静态语言，JavaScript，Lua，C等:
selected = ???

// 高亮结果:
if (!(selected instanceof jQuery)) {
    return alert('不是有效的jQuery对象!');
}
selected.css('background-color', '#ffd351');
```

练习3：分别用`css()`方法和`addClass()`方法高亮显示JavaScript：

```
<!-- HTML结构 -->
<style>
.highlight {
    color: #dd1144;
    background-color: #ffd351;
}
</style>

<div id="test-highlight-css">
    <ul>
        <li class="py"><span>Python</span></li>
        <li class="js"><span>JavaScript</span></li>
        <li class="sw"><span>Swift</span></li>
        <li class="hk"><span>Haskell</span></li>
    </ul>
</div>
```

练习4：除了列出的3种语言外，请再添加Pascal、Lua和Ruby，然后按字母顺序排序节点：

```
<!-- HTML结构 -->
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>

'use strict';

//TODO

// 测试:
;(function () {
    var s = $('#test-div>ul>li').map(function () {
        return $(this).text();
    }).get().join(',');
    if (s === 'JavaScript,Lua,Pascal,Python,Ruby,Swift') {
        alert('测试通过!');
    } else {
        alert('测试失败: ' + s);
    }
})();
```

练习5：请实现鼠标移动到一个矩形区域时显示当前座标的小程序。

练习6：对如下的Form表单：

```
<!-- HTML结构 -->
<form id="test-form" action="test">
    <legend>请选择想要学习的编程语言：</legend>
    <fieldset>
        <p><label class="selectAll"><input type="checkbox"> <span class="selectAll">全选</span><span class="deselectAll">全不选</span></label> <a href="#0" class="invertSelect">反选</a></p>
        <p><label><input type="checkbox" name="lang" value="javascript"> JavaScript</label></p>
        <p><label><input type="checkbox" name="lang" value="python"> Python</label></p>
        <p><label><input type="checkbox" name="lang" value="ruby"> Ruby</label></p>
        <p><label><input type="checkbox" name="lang" value="haskell"> Haskell</label></p>
        <p><label><input type="checkbox" name="lang" value="scheme"> Scheme</label></p>
        <p><button type="submit">Submit</button></p>
    </fieldset>
</form>
```

绑定合适的事件处理函数，实现以下逻辑：

> 当用户勾上“全选”时，自动选中所有语言，并把“全选”变成“全不选”；
>
> 当用户去掉“全不选”时，自动不选中所有语言；
>
> 当用户点击“反选”时，自动把所有语言状态反转（选中的变为未选，未选的变为选中）；
>
> 当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；
>
> 当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。

```
'use strict';

var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});

// TODO:绑定事件
答案见w2d4-example3.html

// 测试:
alert('请测试功能是否正常。');
```
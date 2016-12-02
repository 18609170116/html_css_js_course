# w1d4-CSS作用，文本、字体属性、背景属性、列表属性、表格属性、伪类样式，三种基本样式规则、三种引入方式备课教案

## 1、知识点梳理

- ### 什么是CSS：

  前面我们学习了html，知道了什么是表格，什么是表单，一般的html页面都有哪些东西等等。

  对于现代网页设计而言，有一条重要的原则就是：内容与样式分离。

   ![内容与样式分离](img\内容与样式分离.jpg)

### 是通过html/xhtml+CSS（层叠式样式表）来实现的，控制标记语言的显示效果。

示例：http://www.csszengarden.com/ 



- ### css三要素：选择器+ 属性 +值

  ```
  p{
    background-color:red;
    font-size:16px;
  }
  ```


- ### css写到哪里

  写到style里面（不建议）也叫行内样式

  ```
  <p style="color:red;">style示例</p>
  ```

  写在文件的头部

  ```
  <style>
    p{
      background-color:red;
      font-size:16px;
    }
    ...
    可以写很多个样式
  </style>
  ```

  写到独立的css文件中（建议使用）

  ```
  放在单独的文件中，并在头部引入该文件。
  <link rel="stylesheet" type="text/css" href="css/my.css">
  注意rel 和type属性都必须照写，否则加载不到
  ```


- ### CSS常用的3个选择器

  1、html tag选择器

  好处：都匹配，无法选择

  ```
  p{
    color:red;
  }
  ```

  2、id 选择器（只匹配一个）

  ```
  #form{
    color:red;
  }
  ```

  3、class选择器（可匹配1至多个）

  ```
  .myclass{
    color:red
  }

  高级写法：
  .a.b{
    font-size:1em;
  }
  此例匹配同时具有a 和 b class的元素。
  ```

  参考网站：http://www.w3cschool.cn/css

  ### CSS常用文本样式属性

  ```
  color：
  	3种设置方式,分别是内置/#ccccdd/rgb(0-255,0-255,0-255)调和颜色
  	
  font-size
  	设置字体大小
  	
  font-style(normal,italic,oblique) 字体样式

  font-weight(normal,bold,100~900) 字的粗细

  line-height 
  	行高如10px
  	
  text-align：
    文字对齐方式
    left  :　 默认值。左对齐 
    right  :　 右对齐 
    center  :　 居中对齐 
    justify  :　 两端对齐 

  text-decoration(underline,line-through)
  	
  word-spacing
  ```

  ### CSS背景属性（展示例子）

  设置对象的背景样式

  参考手册进行讲解

  ```
  语法：
  background : background-color  background-image  background-repeat  background-attachment  background-position 
  默认值为：transparent none repeat scroll 0% 0%。

  常用：
  background:url() no-repeat;
  repeat:背景在x和y方向都重复
  no-repeat:背景不重复
  repeat-x:水平方向重复
  repeat-y:垂直方向重复

  background-attachment属性：
  设置图片的滚动属性
  	scroll	背景图片随页面的其余部分滚动。这是默认
  	fixed	背景图像是固定的
  	inherit	指定background-attachment的设置应该从父元素继承
  	local	背景图片随滚动元素滚动
  	
  background-position属性
  设置背景图像的起始位置
    1、内置
    left top
    left center
    left bottom
    right top
    right center
    right bottom
    center top
    center center
    center bottom	如果仅指定一个关键字，其他值将会是"center"
    2、百分比
    x% y%	第一个值是水平位置，第二个值是垂直。左上角是0％ 0％。右下角是100％ 100％。如果仅指定了一个值，其他值将是50％。默认值为：0％0％
    3、数值
    xpos ypos	第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。		如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions
    4、继承
    inherit	指定background-position属性设置应该从父元素继承
  ```

  ### CSS列表属性

  把图像设置为列表中的列表项目标记

  > 该属性是复合属性，具体请查看 各参数对应的属性

  ```
  语法：
  list-style：<' list-style-type '> || <' list-style-position '> || <' list-style-image '>
  ```

  ### CSS表格属性

  ```
  table-layout:auto|fixed  表格布局
  border-collapse：separate | collapse 边框合并
  border-spacing：<length>{1,2} 横向和纵向间距
  caption-side:top|bottom   设置表格的caption对象在头或尾
  empty-cells：hide | show   空单元格是否显示

  如何把当前表格水平居中呢？
  margin: 0 auto;
  ```

  ### CSS伪类样式

  ```
  a:link {} 未被访问前
  a:visited {} 访问过的
  a:hover {} 在上面滑动时
  a:active {} 按下的那一瞬间鼠标并未抬起
  ```

伪类选择器：了解即可

| 选择符                                      | 版本     | 描述                                       |
| ---------------------------------------- | ------ | ---------------------------------------- |
| [E:link](link.htm)                       | CSS1   | 设置超链接a在未被访问前的样式。                         |
| [E:visited](visited.htm)                 | CSS1   | 设置超链接a在其链接地址已被访问过时的样式。                   |
| [E:hover](hover.htm)                     | CSS1/2 | 设置元素在其鼠标悬停时的样式。                          |
| [E:active](active.htm)                   | CSS1/2 | 设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式。         |
| [E:focus](focus.htm)                     | CSS1/2 | 设置元素在成为输入焦点（该元素的onfocus事件发生）时的样式。        |
| [E:lang(fr)](lang(fr).htm)               | CSS2   | 匹配使用特殊语言的E元素。                            |
| [E:not(s)](not(s).htm)                   | CSS3   | 匹配不含有s选择符的元素E。                           |
| [E:root](root.htm)                       | CSS3   | 匹配E元素在文档的根元素。                            |
| [E:first-child](first-child.htm)         | CSS2   | 匹配父元素的第一个子元素E。                           |
| [E:last-child](last-child.htm)           | CSS3   | 匹配父元素的最后一个子元素E。                          |
| [E:only-child](only-child.htm)           | CSS3   | 匹配父元素仅有的一个子元素E。                          |
| [E:nth-child(n)](nth-child(n).htm)       | CSS3   | 匹配父元素的第n个子元素E。                           |
| [E:nth-last-child(n)](nth-last-child(n).htm) | CSS3   | 匹配父元素的倒数第n个子元素E。                         |
| [E:first-of-type](first-of-type.htm)     | CSS3   | 匹配同类型中的第一个同级兄弟元素E。                       |
| [E:last-of-type](last-of-type.htm)       | CSS3   | 匹配同类型中的最后一个同级兄弟元素E。                      |
| [E:only-of-type](only-of-type.htm)       | CSS3   | 匹配同类型中的唯一的一个同级兄弟元素E。                     |
| [E:nth-of-type(n)](nth-of-type(n).htm)   | CSS3   | 匹配同类型中的第n个同级兄弟元素E。                       |
| [E:nth-last-of-type(n)](nth-last-of-type(n).htm) | CSS3   | 匹配同类型中的倒数第n个同级兄弟元素E。                     |
| [E:empty](empty.htm)                     | CSS3   | 匹配没有任何子元素（包括text节点）的元素E。                 |
| [E:checked](checked.htm)                 | CSS3   | 匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时) |
| [E:enabled](enabled.htm)                 | CSS3   | 匹配用户界面上处于可用状态的元素E。                       |
| [E:disabled](disabled.htm)               | CSS3   | 匹配用户界面上处于禁用状态的元素E。                       |
| [E:target](target.htm)                   | CSS3   | 匹配相关URL指向的E元素。                           |
| [@page:first](@page-first.htm)           | CSS2   | 设置页面容器第一页使用的样式。仅用于[@page](../../rules/@page.htm)规则 |
| [@page:left](@page-left.htm)             | CSS2   | 设置页面容器位于装订线左边的所有页面使用的样式。仅用于[@page](../../rules/@page.htm)规则 |
| [@page:right](@page-right.htm)           | CSS2   | 设置页面容器位于装订线右边的所有页面使用的样式。仅用于[@page](../../rules/@page.htm)规则 |

## 2、重点、难点知识讲解思路

- 3种引入方式，依次讲解
- 三种样式选择器，依次讲解，要讲三种主要用途和场景
- 背景属性：因为是组合属性，因此先给灌个概念，然后逐个边敲边讲解，最后小结一下。最后再提高一下，看个比较炫的当前流行的滚动视差示例，然后简单讲解一下用到的我们学过的知识点。
- 表格属性：选引入到前面学过的表格，让大家把思想转到表格这儿，回想一下表格的一些东东。然后讲解表格的css属性。
- 伪类样式（或伪类选择器），重点讲解一下<a>标签的示例，其它的简单讲解一下。
- 举的新例子里面尽量再复习一下前面学过的比如 boder font font-size font-family等。

## 3、课堂补充案例

 滚动色差示例，见附件

## 4、课堂提问准备

- 推荐使用哪种css文件存放方式？
- 用css如何实现表格水平居中？
- 用css如何实现表格垂直居中？

## 5、课后补充作业

- 用本课新学的知识，重新实现前面做过的orilly的首页，主要实现以下功能：

  1、首页左侧的浏览书目的超链接样式用伪类实现。

  2、右下脚的**Partner Sites**部分使用无序列表样式呈现，但不要在文字前面出现任何的修饰图标。

  3、首页的footer部分请将背景改成淡灰色，里面的文字，当鼠标移上去时显示白色。

  4、给整个页面加上一个固定的黑灰色背景，背景可以使用颜色或者图片。


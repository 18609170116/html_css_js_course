# w1d5-css显示属性、盒模型属性、css浮动属性、使用css+div布局备课记录

## 1、知识点梳理

- ### 复习一下三种样式表

  ```
  行内样式表 写在html页面的标签里面
  内部样式表 写在html页面的头部
  外部引入样式表 写在外部，通过<link>引入

  写法：
  选择器{
    属性：值
  }
  ```

- ### 再复习一下三种选择器

  ```
  tag选择器
  id选择器
  类选择器
  ```

- ### 组合选择器(了解)

  > 以上四个选择器，都是从第一个元素开始向后匹配

- ### 盒子模型

  ```
  找个网站，按f12后，对照右下脚显示的图片讲解
  实线外部为margin空间，不属于元素占用的空间。
  实线内部为该元素本身占用的空间：向内部伸展，依次是boder->padding，注意一下width和height指的是哪一部分的尺寸
  ```

- adsfasdf

- asdfadsf

- asdfasf

- ​



### CSS浮动属性float

  float属性的作用就是改变块元素对象的默认显示方式。
  块元素设置了float属性之后，它将不再独自占据一行，可以浮动到左侧或右侧。
  float：none | left | right
  ```
  常用的块状元素，重点是div。

  ```
  <ol> 有序列表
  <ul> 无序列表
  <dl> 列表
  <dt> 列表项
  <table> 表格
  <h1>...<h6> 标题
  <p> 段落
  <blockquote> 块引用
  <address> 定义文档或文章的作者/拥有者的联系信息。
  <caption> 表格标题
  <div> 文档中的分区或节
  ```

- ### CSS常用尺寸单位

  ```
  px 像素 相对长度单位 相对于显示器屏幕分辩率而言的
  pt Point 绝对长度单位 主要用来打印，字体适合使用pt
  em 相对长度单位 1em=16px 不是<em>标签哦
  %  百分比 相对长度单位
  ```

- ### 使用CSS+DIV进行布局

  ```
  css+div是WEB设计的标准，是一种网页的布局方法。与传统中通过表格<table>布局定位的方式不同，它可以实现网页页面内容与表现相分离。
  ```

  ```
  好处：
  1、页面代码简洁
  2、布局容易、改版方便、样式定义灵活
  3、轻松的调你想要的网页风格
  4、代码易读、区块分明，强化代码重用
  ```


- ### position属性

  ```
  position：static | relative | absolute | fixed | center | page | sticky

  absolute:是相对于自己最近的position属性为非static的父元素来定位的,
  	引处有个例子，div1 div2，当div2的position=absolute时，
  	如果div1有position属性，则其定位由div1决定，
  	否则，由div1的父元素也就是body来定位。
  	
  relative:是相对于自己来定位的，可通过设置margin padding合理的值来演示。
  static:默认值，当设此值时，以下四个值top right bottom left均不起作用。
  ```


- ### z-index属性

  ### z-index是用来控制标签的层级关系的，最底层的数值最小，最顶层的数值最大，就好像是一撂纸，正对我们时，我们看到的是最上面层级数最大的那张纸的一个面，其它的都被层级最大的这个覆盖了。

  可以对照三维模型来理解。

  写3个div，依次有一定的编移量来演示。

## 2、重点、难点知识讲解思路

-    盒子模型
-    div的浮动
-    css+div网页布局，以案例为引导，比如常见的上中下布局，中间又分为左右布局的例子。
-    float属性
-    position属性


## 3、课堂补充案例

-    到bootstrap网页去了解一下bootstrap，并简介一下响应式布局的概念。


## 4、课堂提问准备

-  样式表的写法
-  3种样式表，哪种优先级最高？ 行内>内部>外部
-  常用的css尺寸
-  div中文字如何水平居中？text-align:center
-  div中只有一行文字时如何垂直居中？line-height:width
-  div如何居中


## 5、课后补充作业

1、用div+css重新实现orilly网页首页

2、如果有时间，做完第二个页面

3、实现用户注册和用户登陆页面。要求与现有页面风格一致。


  ```
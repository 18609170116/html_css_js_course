# CSS第1课备课记录

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

  写到style里面（不建议）

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


- ### CSS常用的选择器

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
  ```

  参考网站：http://www.w3cschool.cn/css

  ### CSS常用文本样式属性

  ```
  color：
  	3种设置方式,分别是内置/#435465/rgb(0-255,0-255,0-255)调和颜色
  	
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

  text-decoration(underline,ling-through)
  	
  word-spacing
  ```

  ### CSS背景属性（展示例子）

  设置对象的背景样式

  参考手册进行讲解

  ```
  语法：
  background : background-color || background-image || background-repeat || background-attachment || background-position 
  默认值为：transparent none repeat scroll 0% 0%。
  ```

  ### CSS列表属性

  该属性是复合属性，看看各参数对应的属性

  ```
  语法：
  list-style : list-style-image || list-style-position || list-style-type 
  ```

  ### CSS表格属性

  ### CSS伪类样式

## 2、重点、难点知识讲解思路

- ​
- ​
- ​

## 3、课堂补充案例

 滚动色差示例，见附件

## 4、课堂提问准备

- 推荐使用哪种css文件存放方式？
- ​

## 5、课后补充作业

- ​
# w1d3-Html表单和表单元素备课记录

## 1、知识点梳理

- ### 什么是表单Form：

  用户与服务器交互的界面。

  表单负责收集用户提交的信息，然后交给服务器去处理，给用户一个反馈信息。

  表单是用来向服务器提交数据的最常用的方式（没有之一）


- ### 表单的写法

  ```
  <form action="/signup" method="get">
    <p>姓名: <input type="text" name="fname" /></p>
    <p>密码: <input type="text" name="lname" /></p>
    <input type="submit" value="登陆" />
  </form>
  ```


- ### 表单属性


| accept         | *MIME_type*                         | HTML 5 中不支持。             |
| -------------- | ----------------------------------- | ------------------------ |
| accept-charset | *charset_list*                      | 服务器可处理的表单数据字符集。          |
| action         | *URL*                               | 提交表单时向何处发送表单数据。          |
| autocomplete   | onoff                               | 是否启用表单的自动完成功能。           |
| enctype        | 见下面说明                               | 在发送表单数据之前如何对其进行编码。       |
| method         | get post                            | 于发送 form-data 的 HTTP 方法。 |
| name           | 形象的名字如login-form                    | 表单的名称。                   |
| novalidate     | novalidate                          | 如果使用该属性，则提交表单时不进行验证。     |
| target         | _blank _self _parent _top framename | 规定在何处打开 action URL。      |

enctype常用取值

| 值                                 | 描述                             |
| --------------------------------- | ------------------------------ |
| application/x-www-form-urlencoded | 在发送前编码所有字符（默认）                 |
| multipart/form-data               | 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。 |
| text/plain                        | 空格转换为 "+" 加号，但不对特殊字符编码。        |

- ### 表单元素

  ```
  <input>输入控件
  类型有很多
  type=text|radio|checkbox|password|submit|reset|image|file|button
  简单讲2个，用到的时候再细讲。
  ```

  ```
  <textarea>文字内容罗多时的文本输入
  ```

  ```
  <label>纯显示文字
  ```

  ```
  <fieldset>组合表单中的元素
  <legend>组合的头

      <fieldset>
          <legend>请选择性别</legend>
          男性：<input type="radio" name="gender" value="男"/><br>
          女性：<input type="radio" name="gender" value="女"/>
      </fieldset>
  ```

  ```
  <select>选择列表
  <option>列表项
  ```

  ```
  <button>按钮
  ```

## 2、重点、难点知识讲解思路

- GET和POST的差异：

- form表单常用属性有哪些？

- 多选一效果如果实现？


## 3、课堂补充案例

 完成用户登陆页面的设计编写

## 4、课堂提问准备

- enctype属性有什么用，有哪些可选值？


## 5、课后补充作业

- 完成下图所示用户注册页面的编写

   ![用户注册](img\用户注册.jpg)

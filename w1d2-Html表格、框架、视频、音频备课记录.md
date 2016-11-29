# w1d2-Html表格、框架、视频、音频备课记录

## 1、知识点梳理

- ### 表格标签


```
<table>…</table>                        定义表格
<caption>...</caption>					表头
<th>…</th>                              定义表格中的表头单元格
<tr>…</tr>                              定义表格中的行
<td>…</td>                              定义表格中的单元
```
- ### 跨行与跨列

```
rowspan colspan
```

- ### 框架集（浏览器中的浏览器）


```
<frameset cols="25%,50%,25%">            框架集，3列
	<frame src="left.html" />            指定每一部分所在列的页面地址
	<frame src="middle.html" />
	<frame src="right.html" />
</frameset>

请去掉<body>标签
```

- ### 视频


```
<video src="mov/movie.mp4" controls="controls">
	您的浏览器不支持 video 标签。
</video>
```

- ### 音频


```
<audio src="someaudio.wav">
	您的浏览器不支持 audio 标签。
</audio>
```

## 2、重点、难点知识讲解思路

-   表格的跨行、跨列、边框，背景、嵌套。

-   <iframe>的百分比布局

-   <audio>标签的可选属性及用法，控制播放，自动播放。

-   <video>标签的可选属性及用法，控制播放，自动播放。


## 3、课堂补充案例

-    准备一段音频和视频。


## 4、课堂提问准备

1.   src属性是什么意思？

2.   <table>标签的页边柜是由谁控制的？

3.   使用rowspan时容易发生问题，先弄一个发生问题的例子，然后引导学生去思考并正确处理


## 5、课后补充作业

-   完成一个教室座位表，视点在老师讲台的位置，按现在教室的布置，把教室中所有座位和人员名称都标注出来。
-   参考http://www.oreilly.com.cn/index.php，使用本节课所学的知识完成首页内容。

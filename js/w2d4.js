/**
 * Created by lgm on 2016/12/9.
 */
//三种方式都表示在文档加载后激活函数：
//         $(document).ready(function () {
//         alert('方式一：jQuery版本：' + $.fn.jquery);
//         });

//         $().ready(function(){
//         alert('方式二：jQuery版本：' + $.fn.jquery);
//         });

//         $(function(){
//         alert('方式三：jQuery版本：' + $.fn.jquery);
//         });

          //请对比javascript原生的方式
//        window.onload = function () {
//            var selector = document.getElementById("selector");
//            console.log(selector);
//        }

$(function() {

    //id选择器 不会返回null或undefined，哪怕这个对象不存在，也会返回一个对象
    var div = $('#selector');
    console.log(div);

    //jquery对象和dom对象的转换
    var div = $('#selector'); // jQuery对象
    var divDom = div[0];
    console.log(divDom);
    //再转换成jqeury对象
    var anotherJqueryObj = $(divDom); // 重新把DOM包装为jQuery对象

    //tag选择器
    var divs = $('div');
    console.log("tag选择器"+divs.length);

    //class选择器
    var test_langs = $(".test-lang")
    console.log("类选择器："+test_langs.length);

    //属性选择器
    var jss  = $('[name=js]');
    console.log(jss.length);

    var sumbits = $('[type=submit]');
    console.log("类型为submit的数量："+sumbits.length);

    //找出属性名称是name，值是以user开头的所有的元素
    var userstarts = $('[name^=user]');
    console.log("找出属性名称是name，值是以user开头的所有的元素"+userstarts.length);

    //找出name为username的输入框
    var input1 = $('input[name=username]');
    console.log(input1.length);

    //找出类为test-lang的所有ul元素
    var uls = $('ul.test-lang');
    console.log(uls.length);

    //组合选择器
    var com1 = $('input[name=username],li.lang-lua');
    console.log("组合选择器："+com1.length);

    //层级选择器
    var cj1 = $('#need-compiled li[name=userLearned]');
    console.log("层级选择器"+cj1.length);

    //子选择器
    var p_c = $('form[name=loginForm]>input[name=username]');
    console.log("子选择器"+p_c.length);

    //过滤器
    var selected = $('#need-compiled>li');
    console.log("li对象数组长度："+selected.length);

    var filtered1 = $('#need-compiled>li:first-child');
    console.log("过滤器1："+filtered1.length);

    var filtered2 = $('#need-compiled>li:nth-child(even)');
    console.log("对象吗？"+filtered2);
    console.log("文本"+filtered2.text());
    console.log("过滤器2："+filtered2.length);


    console.log("从这里开始看");
    //操作DOM
    var p = $('#need-compiled p');
    //更改里面的文本
    p.text("更改后的值 &amp;");
    console.log(p.text());
    console.log(p.html());
    //更改里面的内容为带有html标记的内容，p标记依然存在
    p.html('更改后的内容');
    console.log(p.html());


    // console.log(p);
    // console.log(p.get(0).innerHTML);
    // console.log(p.get(0).innerText);
    //
    // console.log(p.get(0).innerText);
    // console.log(p.context);
    // console.log(p.prevObject);
    // console.log(p.__proto__);

    //动态改变CSS
    //p.css('background-color','green').css('border','5px solid black').css('width','100px');
    p.addClass("newclass");


});

//层级选择器
//$('ul.lang li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]
//$('div.testing li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]


//练习2
// $(function () {
//     var selected = $('ol.test-lang li.lang-c');
//
//     /*
//      var msg='';
//      $.each(selected,function (i) {
//      msg += 'class='+ selected[i].getAttribute('class')+",innerHTML="+selected[i].innerHTML +';\r';
//      })
//      alert(msg);
//      */
//
//     // 高亮结果:
//     if (!(selected instanceof jQuery)) {
//         return alert('不是有效的jQuery对象!');
//     }
//     selected.css('background-color', '#ffd351');
// });


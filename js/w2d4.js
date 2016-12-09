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


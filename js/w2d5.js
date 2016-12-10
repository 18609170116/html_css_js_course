/**
 * Created by lgm on 2016/12/10.
 */
$(function () {

    //隐藏Python节点
    var target = $('li.dy')[1];//现在变成dom对象了。
    console.log(target);
    console.log(target.innerText);
    //可以操作css隐藏dom节点。
    //。。。。。。。。

    //转回jqeury对象并调用hide()
    $(target).hide();
    console.log("对象被隐藏了");
    //显示对象
    //$(target).show();


    //显示dom信息
    console.log($(document).width()); // 800
    console.log($(document).height()); // 3500

    var div1 = $('div')[0];
    //console.log(div1);
    $(div1).width('444');
    console.log($(div1).width());

    //操作节点属性
    //添加一个属性
    var jquery_target = $(target);
    jquery_target.attr('id','id1');

    //取得原有class的属性值
    var old_class_value = jquery_target.attr('class');
    console.log(old_class_value);
    //去掉class属性值中的' dy'
    var sub = old_class_value.substr(0,old_class_value.indexOf(' dy'));
    console.log(sub);
    //赋予该对象新的class属性。
    jquery_target.attr('class',sub);



    //操作表单
    var input1 = $('#test-input');
    console.log(input1.val());
    input1.val("luo@hotmail.com");

    var select = $('#test-select');
    console.log(select.val());

    select.val('上海1');
    //console.log(select.val());


    //修改DOM结构
    //字符串方式append
    var ul = $('ul');
    ul.append('<li class="lang">C语言</li>');

    //对象方式append
    var li2 = document.createElement('li');
    li2.setAttribute('class','lang');
    li2.innerHTML = 'c++';
    ul.append(li2);

    //函数方式append
    ul.append(function(){
       return '<li class="lang">C#</li>';
    });

    //prepend方式新增, 会加到最前面
    ul.prepend('<li class="lang by">Perl</li>');

    //同级之间新增用before和after
    var swift = $($('li')[3]);
    swift.before('<li class="lang by add" >Swing</li>');

    //remove 元素

    var deletedObj = $($('li')[8]).remove();
    console.log(deletedObj);

});
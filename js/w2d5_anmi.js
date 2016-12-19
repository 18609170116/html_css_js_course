/**
 * Created by lgm on 2016/12/10.
 */
$(function () {
    //动画 隐藏
    // $('#div1').hide(3000);

    //动画不停地显示和隐藏
    // setInterval(function () {
    //     $('#div1').toggle(1400);
    // }, 1000);

    //绑定click事件
    $('#div1').click(function () {
        //alert("点击了");
        console.log('点击了');
    });

    //slideToggle动画
    // setInterval(function () {
    //     $('#div1').slideToggle('quick');
    // },1000);

    //fadeToggle动画
    // $('#div1').fadeToggle('slow');

    //动画
    $('#div1').animate({
        //透明度
        opacity: 0.55,
        width: '256px',
        height: '500px'
    }, 3000, function () {
        console.log('动画结束');
        $('#div1').css('background-color', 'green');
    });


});

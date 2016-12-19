'use strict';
window.onload =function () {
    // 对li排序:
//TODO
    //取得所有li对象
    var arr = document.getElementsByTagName('li');

    //临时数组
    var tempArray = new Array(arr.length);
    //把所有li对象的innerHTML值赋到临时数组
    for(var i=0;i<arr.length;i++){
        tempArray[i] = arr[i].innerHTML;
    }
    //临时数组排序
    tempArray.sort();

    //把排序后的临时数组的每一个元素的值赋给arr对象
    for(var i=0;i<arr.length;i++){
        arr[i].innerHTML = tempArray[i];
    }
    console.log(tempArray);


    // 测试:
    function test() {
        var
            arr, i,
            t = document.getElementById('test-list');
        if (t && t.children && t.children.length === 5) {
            arr = [];
            for (i=0; i<t.children.length; i++) {
                arr.push(t.children[i].innerText);
            }
            if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
                alert('测试通过!');
            }
            else {
                alert('测试失败: ' + arr.toString());
            }
        }
        else {
            alert('测试失败!');
        }


    }

    test();
}

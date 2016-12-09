/**
 * Created by lgm on 2016/12/9.
 */
window.onload = function () {
    var arr = document.getElementsByTagName('li');
    var tempArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i].innerHTML;
    }

    tempArr.sort();
    console.log(tempArr);

    for (var i = 0; i < arr.length; i++) {
        arr[i].innerText = tempArr[i];
    }
};
var value = document.querySelector('#value');
var memory = 0;
var ce = document.querySelector('#ce');
var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var b4 = document.querySelector('#b4');
var b5 = document.querySelector('#b5');
var b6 = document.querySelector('#b6');
var b7 = document.querySelector('#b7');
var b8 = document.querySelector('#b8');
var b9 = document.querySelector('#b9');
var b0 = document.querySelector('#b0');
var ceClick = function () {
    value.value = 0;
}
ce.onclick = ceClick;

var b1Click = function () {
    value.value = +(value.value + "1");
}
b1.onclick = b1Click;

var b2Click = function () {
    value.value = +(value.value + "2");
}
b2.onclick = b2Click;

var b3Click = function () {
    value.value = +(value.value + "3");
}
b3.onclick = b3Click;

var b4Click = function () {
    value.value = +(value.value + "4");
}
b4.onclick = b4Click;

var b5Click = function () {
    value.value = +(value.value + "5");
}
b5.onclick = b5Click;

var b6Click = function () {
    value.value = +(value.value + "6");
}
b6.onclick = b6Click;

var b7Click = function () {
    value.value = +(value.value + "7");
}
b7.onclick = b7Click;

var b8Click = function () {
    value.value = +(value.value + "8");
}
b8.onclick = b8Click;

b9Click = function () {
    value.value = +(value.value + "9");
}
b9.onclick = b9Click;

b0Click = function () {
    value.value = +(value.value + "0");
}
b0.onclick = b0Click;

window.addEventListener('keydown',this.check,false);

function check(e) {
    // alert(e.keyCode);
    var code = e.keyCode;
    if (code == 49 || code == 97 || code == 35)
        b1Click();
    else if (code == 50 || code == 98 || code == 40)
        b2Click();
    else if (code == 51 || code == 99 || code == 34)
        b3Click();
    else if (code == 52 || code == 100 || code == 37)
        b4Click();
    else if (code == 53 || code == 101 || code == 12)
        b5Click();
    else if (code == 54 || code == 102 || code == 39)
        b6Click();
    else if (code == 55 || code == 103 || code == 36)
        b7Click();
    else if (code == 56 || code == 104 || code == 38)
        b8Click();
    else if (code == 57 || code == 105 || code == 33)
        b9Click()
    else if (code == 48 || code == 96 || code == 45)
        b0Click();
    else if (code == 27)
        ceClick();
}

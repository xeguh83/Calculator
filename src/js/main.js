var value = document.querySelector('#value');
var firstArgument;
var result;
var memory = 0;
var printing = false;
var operation;
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
var dot = document.querySelector("#zap");
var pm = document.querySelector("#pm");
var back = document.querySelector("#back");
var plus = document.querySelector("#plus");

var ceClick = function () {
    value.value = 0;
    firstArgument = undefined;
    setNormalFont();
};
ce.onclick = ceClick;

var dotClick = function () {
    if (value.value.indexOf(",") != -1)
        return;
    value.value = value.value + ",";
};
dot.onclick = dotClick;

var pmClick = function () {
    if (value.value.indexOf("-") == -1) {
        value.value = "-" + value.value;
    } else {
        value.value = value.value.substring(1);
    }
};
pm.onclick = pmClick;

var backClick = function () {
    if (value.value.length == 1 || (value.value.length == 2 && value.value.indexOf("-") != -1)) {
        value.value = "0";
        return;
    }
    value.value = value.value.substring(0, value.value.length - 1);
    if (value.value.length < 14) {
        setNormalFont();
    }
};
back.onclick = backClick;

var plusClick = function () {
    printing = false;
    var tempValue = value.value + "";
    tempValue = +(tempValue.replace(",", "."));
    if (firstArgument = undefined) {
        firstArgument = tempValue;
        operation = addition;
    } else {
        executeOperation(tempValue, addition);
    }
};
plus.onclick = plusClick;

var b1Click = function () {
    printValue("1");
};
b1.onclick = b1Click;

var b2Click = function () {
    printValue("2");
};
b2.onclick = b2Click;

var b3Click = function () {
    printValue("3");
};
b3.onclick = b3Click;

var b4Click = function () {
    printValue("4");
};
b4.onclick = b4Click;

var b5Click = function () {
    printValue("5");
};
b5.onclick = b5Click;

var b6Click = function () {
    printValue("6");
};
b6.onclick = b6Click;

var b7Click = function () {
    printValue("7");
};
b7.onclick = b7Click;

var b8Click = function () {
    printValue("8");
};
b8.onclick = b8Click;

b9Click = function () {
    printValue("9");
};
b9.onclick = b9Click;

b0Click = function () {
    printValue("0");
};
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
        b9Click();
    else if (code == 48 || code == 96 || code == 45)
        b0Click();
    else if (code == 27)
        ceClick();
    else if (code == 110 || code == 188 || code == 190)
        dotClick();
    else if (code == 8)
        backClick();
}

function printValue(symbol) {
    if (!printing) {
        value.value = symbol;
        firstArgument = 0;
        setNormalFont();
        printing = true;
    } else {
        addSymbol(symbol);
    }
}

function setNormalFont() {
    value.style.fontSize = "24px";
}

function setSmallFont() {
    value.style.fontSize = "20px";
}

function addSymbol(symbol) {
    var newValue = value.value == "0" ? symbol : value.value + symbol;
    if (newValue.length > 17) {
        return;
    }
    visualizeValue(newValue);
    printing = true;
}

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function executeOperation(secondArgument, nextOperation) {
    var result = operation(firstArgument, secondArgument);
    operation = nextOperation;
    if ((result + "").length > 17) {
        value.value = result.toExponential(10);
        setSmallFont();
    }
}

function visualizeValue(newValue) {
    value.value = newValue;
    if (newValue.toString().length >= 14) {
       setSmallFont();
    }
}

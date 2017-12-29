var input = document.querySelector('.numberInput');
var para0 = document.querySelector('.return-p-square');
var para1 = document.querySelector('.return-p-cube');
var para2 = document.querySelector('.return-p-factorial');

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}
    function Calculations() {
    var num = input.value;
    if (isNaN(num)) {
        para0.textContent = 'You need to enter a number!';
        para1.textContent = '';
        para2.textContent = '';
    } else {
        para0.textContent = num + ' squared is ' + squared(num) + '. ';
        para1.textContent = num + ' cubed is ' + cubed(num) + '. ';
        para2.textContent = num + ' factorial is ' + factorial(num) + '. ';
        para0.style.backgroundColor = "yellow";
        para1.style.backgroundColor = "aqua";
        para2.style.backgroundColor = "lime";
    }
}

input.onchange = Calculations;

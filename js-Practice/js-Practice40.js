var div40 = document.getElementById('js-prct40');
var div40a = document.createElement('div');
var div40b = document.createElement('div');
var para40 = document.createElement('p');
var para40b = document.createElement('p');

var in40a = document.createElement('input');
var in40b = document.createElement('input');
var btn40 = document.createElement('button');
para40.textContent = '---';
para40.style.fontSize = '2em';
para40.style.marginTop = '100px';
para40.style.width = '200px';

in40a.oninput = function () {
    suma40();
}
in40b.oninput = function () {
    suma40();
}

function suma40() {
    var a = in40a.value;
    var b = in40b.value;
    var suma = sumTwo40(a, b);
    var resta = restTwo40(a, b);
    if (suma != 8 || resta != 8 || (a != 8 && b != 8)) {
        para40.textContent = '--';
    }
    if ((a != '' && b != '')) {
        if (a == 8) {
            para40.textContent = 'El valor del input #1 es ' + a;
        }
        if (b == 8) {
            para40.textContent = 'El valor del input #2 es ' + b;
        }
        if (suma === 8) {
            para40.textContent = 'El valor de la suma es ' + suma;
        }
        if (resta === 8) {
            para40.textContent = 'El valor de la resta es ' + resta;
        }
    }
}

function sumTwo40(x, y) {
    var suma = parseFloat(x) + parseFloat(y);
    return suma;
}

function restTwo40(x, y) {
    var rest = Math.abs(parseFloat(x) - parseFloat(y));
    return rest;
}

btn40.onclick = function () {
    in40a.value = 0;
    in40b.value = 0;
    para40.textContent = '---';
    para40.style.fontSize = '5em';
    para40.style.marginTop = '100px';
    para40.style.width = '150px';
}

div40a.style.width = '200px';
div40a.style.backgroundColor = 'rgba(20,25,150,0.4)';
div40b.style.backgroundColor = 'rgba(155,50,250,0.5)';
div40a.style.float = 'left';
div40b.style.float = 'left';
div40a.style.padding = '25px';
div40a.style.paddingTop = '75px';
div40b.style.paddingLeft = '150px';
div40b.style.paddingRight = '150px';
div40a.style.height = '150px';
div40b.style.height = '250px';
div40.style.marginBottom = '275px';
div40.style.marginLeft = '150px';
div40b.style.verticalAlign = 'center';
div40.appendChild(div40a);
div40.appendChild(div40b);

in40a.style.width = '200px';
in40b.style.width = '200px';
in40a.setAttribute('id', 'input38');
in40b.setAttribute('id', 'input38');
in40a.setAttribute('type', 'number');
in40b.setAttribute('type', 'number');
in40a.setAttribute('placeholder', '#1');
in40b.setAttribute('placeholder', '#2');
btn40.style.width = '68px';
btn40.textContent = 'Reset!';
div40a.appendChild(in40a);
div40a.appendChild(in40b);
div40a.appendChild(btn40);
div40b.appendChild(para40);
div40b.appendChild(para40b);

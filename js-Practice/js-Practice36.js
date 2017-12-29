var div36 = document.getElementById('js-prct36');
var in36a = document.createElement('INPUT');
var in36b = document.createElement('INPUT');
var in36c = document.createElement('INPUT');
var para36a = document.createElement('p');

in36a.setAttribute('placeholder', 'Input a number');
in36b.setAttribute('placeholder', 'Input a number');
in36c.setAttribute('placeholder', 'Input a number');
in36a.setAttribute('type', 'number');
in36b.setAttribute('type', 'number');
in36c.setAttribute('type', 'number');

in36a.oninput = function () {
    para36a.textContent = checkLastDigit(in36a.value,in36b.value,in36c.value);
}
in36b.oninput = function () {
    para36a.textContent = checkLastDigit(in36a.value,in36b.value,in36c.value);
}
in36c.oninput = function () {
    para36a.textContent = checkLastDigit(in36a.value,in36b.value,in36c.value);
}

function checkLastDigit(x, y, z) {
    var SameLastDig = "Mismo ultimo digito";
    var DiffLastDig = "Diferente ultimo digito";
    if (x % 10 === y % 10 && y % 10 === z % 10) {
        return SameLastDig;
    }
    return DiffLastDig;
}

in36a.style.backgroundColor = 'rgb(222, 234, 238)';
in36b.style.backgroundColor = 'rgb(177, 203, 187)';
in36c.style.backgroundColor = 'rgb(238, 162, 154)';
in36b.style.width = '200px';
in36a.style.width = '200px';
in36c.style.width = '200px';
in36a.style.height = '30px';
in36b.style.height = '30px';
in36c.style.height = '30px';
in36a.style.fontSize = '2em';
in36b.style.fontSize = '2em';
in36c.style.fontSize = '2em';
in36a.style.textAlign = 'center';
in36b.style.textAlign = 'center';
in36c.style.textAlign = 'center';
div36.appendChild(in36a);
div36.appendChild(in36b);
div36.appendChild(in36c);
div36.appendChild(para36a);
para36a.style.fontSize = '3em';
para36a.style.color = 'blue';

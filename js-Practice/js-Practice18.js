var div18 = document.getElementById('js-prct18');
var in18a = document.createElement('INPUT');
var in18b = document.createElement('INPUT');
var para18 = document.createElement('p');

in18a.setAttribute('type', 'number');
in18b.setAttribute('type', 'number');
in18a.setAttribute('placeholder', 'numA');
in18b.setAttribute('placeholder', 'numB');

in18a.oninput = function () {
    if (in18a.value == '' & in18b.value == '') {
        para18.textContent = '';
    } else {
        var numA = parseFloat(in18a.value);
        var numB = parseFloat(in18b.value);
        para18.textContent = checkEqual(numA, numB);
    }
}
in18b.oninput = function () {
    if (in18b.value == '') {
        para18.textContent = '';
    } else {
        var numA = parseFloat(in18a.value);
        var numB = parseFloat(in18b.value);
        para18.textContent = checkEqual(numA, numB);
    }
}

function checkEqual(x, y) {
    if (x == 50 || y == 50) {
        var result18 = 'Value = ' + true;
        return result18
    } else if (x + y == 50) {
        var result18 = 'Value = ' + true;
        return result18
    }
}

in18a.style.backgroundColor = 'rgba(50,255,10,0.5)';
in18b.style.backgroundColor = 'rgba(0,100,250,0.3)';
in18a.style.width = '70px';
in18b.style.width = '70px';
in18a.style.textAlign = 'center';
in18b.style.textAlign = 'center';
in18a.style.fontSize = '2em';
in18b.style.fontSize = '2em';
div18.appendChild(in18a);
div18.appendChild(in18b);
div18.appendChild(para18);
para18.style.fontSize = '3em';

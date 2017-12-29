var div17 = document.getElementById('js-prct17');
var in17a = document.createElement('INPUT');
var in17b = document.createElement('INPUT');
var para17 = document.createElement('p');

in17a.setAttribute('type', 'number');
in17b.setAttribute('type', 'number');
in17a.setAttribute('placeholder', 'numberA');
in17b.setAttribute('placeholder', 'numberB');

var numA = 19;
in17a.setAttribute('value', numA.toString());

in17a.oninput = function () {
    if (in17a.value == '' & in17b.value == '') {
        para17.textContent = '';
    } else {
        var numA = parseFloat(in17a.value);
        var numB = parseFloat(in17b.value);
        para17.textContent = absDiff3(numA, numB);
    }
}
in17b.oninput = function () {
    if (in17b.value == '') {
        para17.textContent = '';
    } else {
        var numA = parseFloat(in17a.value);
        var numB = parseFloat(in17b.value);
        para17.textContent = absDiff3(numA, numB);
    }
}

function absDiff3(x, y) {
    if (x < y) {
        var result17 = x + ' - ' + y + ' = ' + (Math.abs(x - y)) +  ' = 3 * ' + Math.abs(x - y) + ' = ' + 3 * Math.abs(x - y) ;
        return result17
    } else {
        return Math.abs(x - y);
    }
}

in17a.style.backgroundColor = 'rgba(250,150,0,0.5)';
in17b.style.backgroundColor = 'rgba(0,150,250,0.5)';
in17a.style.width = '70px';
in17b.style.width = '70px';
in17a.style.textAlign = 'center';
in17b.style.textAlign = 'center';
div17.appendChild(in17a);
div17.appendChild(in17b);
div17.appendChild(para17);
para17.style.fontSize = '3em';

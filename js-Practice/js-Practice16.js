var div16 = document.getElementById('js-prct16');
var in16a = document.createElement('INPUT');
var in16b = document.createElement('INPUT');
var para16 = document.createElement('p');
div16.appendChild(in16a);
div16.appendChild(in16b);
div16.appendChild(para16);

in16a.setAttribute('type', 'number');
in16b.setAttribute('type', 'number');
in16a.setAttribute('placeholder', 'numberA');
in16b.setAttribute('placeholder', 'numberB');

in16a.oninput = function () {
    if (in16a.value == '' ) {
        para16.textContent = '';
    } else {
        var numB = parseFloat(in16a.value);
        var numA = parseFloat(in16b.value);
        para16.textContent = sumTriple(numA,numB);
    }
}
in16b.oninput = function () {
    if (in16b.value == '' ) {
        para16.textContent = '';
    } else {
        var numB = parseFloat(in16a.value);
        var numA = parseFloat(in16b.value);
        para16.textContent = sumTriple(numA,numB);
    }
}

function sumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
para16.style.fontSize = '3em';
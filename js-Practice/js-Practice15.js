var div15 = document.getElementById('js-prct15');
var in15a = document.createElement('INPUT');
var in15b = document.createElement('INPUT');
var para15 = document.createElement('p');
div15.appendChild(in15a);
div15.appendChild(in15b);
div15.appendChild(para15);

var numB = 13;
in15a.setAttribute('placeholder', 'Number');
in15a.setAttribute('type', 'number');
in15b.setAttribute('type', 'number');
in15b.setAttribute('value', numB.toString());
in15b.setAttribute('placeholder', numB.toString());

in15a.oninput = function () {
    if (in15a.value == '') {
        para15.textContent = null;
    } else {
        var numB = 13;
        var numA = parseFloat(in15a.value);
        if (numA > numB) {
            para15.textContent = 2 * Math.abs(numB - numA);
            para15.style.color = 'green';
        } else if (numA < numB) {
            para15.textContent = numB - numA;
            para15.style.color = 'red';
        } else {
            para15.textContent = numB - numA;
            para15.style.color = 'blue';
        }
    }
}
para15.style.fontSize = '3em';

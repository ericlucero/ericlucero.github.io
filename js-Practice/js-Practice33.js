var div33 = document.getElementById('js-prct33');
var in33a = document.createElement('INPUT');
var in33b = document.createElement('INPUT');
var para33a = document.createElement('p');

in33a.onchange = function () {
    para33a.textContent = numberBetween(in33a.value,in33b.value);
}
in33b.onchange = function () {
    para33a.textContent = numberBetween(in33a.value,in33b.value);
}

function numberBetween(a,b) {
    if ((a > 40 && a < 60) && (b > 40 && b < 60) || (a > 70 && a < 100) && (b > 70 && b < 100)) {
        return true;
    } else {
        return false;
    }
}

in33a.setAttribute('placeholder', 'Input a number');
in33b.setAttribute('placeholder', 'Input a number');
in33a.setAttribute('type', 'number');
in33b.setAttribute('type', 'number');
in33a.style.backgroundColor = 'rgba(237,12,12,0.5)';
in33b.style.backgroundColor = 'rgba(220,240,20,0.8)';
in33b.style.width = '200px';
in33a.style.width = '200px';
in33a.style.height = '30px';
in33b.style.height = '30px';
in33a.style.fontSize = '2em';
in33b.style.fontSize = '2em';
in33a.style.textAlign = 'center';
in33b.style.textAlign = 'center';
div33.appendChild(in33a);
div33.appendChild(in33b);
div33.appendChild(para33a);
para33a.style.fontSize = '3em';
para33a.style.color = 'blue';

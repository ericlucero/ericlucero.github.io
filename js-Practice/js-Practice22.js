var div22 = document.getElementById('js-prct22');
var in22a = document.createElement('INPUT');
var in22b = document.createElement('INPUT');
var para22a = document.createElement('p');
var para22b = document.createElement('p');

in22b.setAttribute('type', 'number');
in22b.setAttribute('min', 0);
in22a.setAttribute('placeholder', 'Write a String');
in22b.setAttribute('placeholder', 'remove at');

in22b.oninput = function () {
    var in22aLength = in22a.value.toString().length;
    in22b.setAttribute('max', (in22aLength-1));
    para22a.textContent = removeAt(in22a.value.toString(), in22b.value);
}

function removeAt(x, y) {
    var removedVal = x.charAt(y);
    return removedVal;
}

in22a.style.backgroundColor = 'rgba(250,255,0,0.8)';
in22b.style.backgroundColor = 'rgba(0,100,250,0.2)';
in22a.style.width = '600px';
in22b.style.width = '80px';
in22a.style.height = '30px';
in22b.style.height = '30px';
in22a.style.textAlign = 'center';
in22b.style.textAlign = 'center';
in22a.style.fontSize = '2em';
in22b.style.fontSize = '1.2em';
div22.appendChild(in22a);
div22.appendChild(in22b);
div22.appendChild(para22a);
div22.appendChild(para22b);
para22a.style.fontSize = '3em';
para22a.style.color = 'blue';
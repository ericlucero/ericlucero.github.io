var div29 = document.getElementById('js-prct29');
var in29a = document.createElement('INPUT');
var in29b = document.createElement('INPUT');
var in29c = document.createElement('INPUT');
var para29a = document.createElement('p');

in29a.setAttribute('placeholder', 'Input a number');
in29b.setAttribute('placeholder', 'Input a number');
in29c.setAttribute('placeholder', 'Input a number');
in29a.setAttribute('type', 'number');
in29b.setAttribute('type', 'number');
in29c.setAttribute('type', 'number');

in29a.onchange = function () {
    var x = in29a.value;
    var y = in29b.value;
    var z = in29c.value;

    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
        para29a.textContent = true;
    } else {
        para29a.textContent = false;
    }
}
in29b.onchange = function () {
    var x = in29a.value;
    var y = in29b.value;
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        para29a.textContent = true;
    } else {
        para29a.textContent = false;
    }
}


in29a.style.backgroundColor = 'rgba(21,233,127,1)';
in29b.style.backgroundColor = 'rgba(240,141,141,1)';
in29c.style.backgroundColor = 'rgba(141,141,250,0.5)';
in29b.style.width = '200px';
in29a.style.width = '200px';
in29c.style.width = '200px';
in29a.style.height = '30px';
in29b.style.height = '30px';
in29c.style.height = '30px';
in29a.style.fontSize = '2em';
in29b.style.fontSize = '2em';
in29c.style.fontSize = '2em';
in29a.style.textAlign = 'center';
in29b.style.textAlign = 'center';
in29c.style.textAlign = 'center';
div29.appendChild(in29a);
div29.appendChild(in29b);
div29.appendChild(in29c);
div29.appendChild(para29a);
para29a.style.fontSize = '3em';
para29a.style.color = 'blue';

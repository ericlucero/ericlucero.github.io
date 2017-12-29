var div28 = document.getElementById('js-prct28');
var in28a = document.createElement('INPUT');
var in28b = document.createElement('INPUT');
var para28a = document.createElement('p');

in28a.setAttribute('placeholder', 'Input a number');
in28b.setAttribute('placeholder', 'Input a number');
in28a.setAttribute('type', 'number');
in28b.setAttribute('type', 'number');

in28a.onchange = function () {
    var x = in28a.value;
    var y = in28b.value;
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        para28a.textContent = true;
    } else {
        para28a.textContent = false;
    }
}
in28b.onchange = function () {
    var x = in28a.value;
    var y = in28b.value;
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        para28a.textContent = true;
    } else {
        para28a.textContent = false;
    }
}


in28a.style.backgroundColor = 'rgba(170,80,250,1)';
in28b.style.backgroundColor = 'rgba(0,250,0,1)';
in28b.style.width = '200px';
in28a.style.width = '200px';
in28a.style.height = '30px';
in28b.style.height = '30px';
in28a.style.fontSize = '2em';
in28b.style.fontSize = '2em';
in28a.style.textAlign = 'center';
in28b.style.textAlign = 'center';
div28.appendChild(in28a);
div28.appendChild(in28b);
div28.appendChild(para28a);
para28a.style.fontSize = '3em';
para28a.style.color = 'blue';

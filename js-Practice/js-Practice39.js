var div39 = document.getElementById('js-prct39');
var div39a = document.createElement('div');
var div39b = document.createElement('div');
var para39 = document.createElement('p');
var para39b = document.createElement('p');

var in39a = document.createElement('input');
var in39b = document.createElement('input');
var btn39 = document.createElement('button');
para39.textContent = '---';
para39.style.fontSize = '5em';
para39.style.marginTop = '100px';
para39.style.width = '150px';

in39a.oninput = function () {
    suma39();
}
in39b.oninput = function () {
    suma39();
}

function suma39() {
    var a = in39a.value;
    var b = in39b.value;
    var sum = sumTwo39(a, b);
    if (sum >= 50 && sum <= 80) {
        para39b.textContent = sum;
        para39.textContent = '65';
        para39.style.fontWeight = 'bold';
        para39.style.color = 'white';
        para39.style.fontSize = '8em';
        para39.style.textShadow = '2px 5px 3px rgb(220, 15, 4)';
    } else {
        para39b.textContent = sum;
        para39.textContent = '80';
        para39.style.fontWeight = 'bold';
        para39.style.color = 'gray';
        para39.style.fontSize = '8em';
        para39.style.textShadow = '2px 5px 3px white';
    }
}

function sumTwo39(x, y) {
    var suma = parseFloat(x) + parseFloat(y);
    return suma;
}

btn39.onclick = function () {
    in39a.value = 0;
    in39b.value = 0;
    para39.textContent = '---';
    para39.style.fontSize = '5em';
    para39.style.marginTop = '100px';
    para39.style.width = '150px';
    //    para39.style.backgroundColor = 'rgba(255,0,0,0.5)';
}

div39a.style.width = '200px';
div39a.style.backgroundColor = 'rgba(0,255,0,0.5)';
div39b.style.backgroundColor = 'rgba(255,0,0,0.5)';
div39a.style.float = 'left';
div39b.style.float = 'left';
div39a.style.padding = '25px';
div39b.style.paddingLeft = '150px';
div39b.style.paddingRight = '150px';
div39a.style.height = '200px';
div39b.style.height = '250px';
div39.style.marginBottom = '300px';
div39.style.marginLeft = '150px';
div39b.style.verticalAlign = 'center';
div39.appendChild(div39a);
div39.appendChild(div39b);

in39a.style.width = '200px';
in39b.style.width = '200px';
in39a.setAttribute('id', 'input38');
in39b.setAttribute('id', 'input38');
in39a.setAttribute('type', 'number');
in39b.setAttribute('type', 'number');
in39a.setAttribute('placeholder', '#1');
in39b.setAttribute('placeholder', '#2');
btn39.style.width = '68px';
btn39.textContent = 'Reset!';
div39a.appendChild(in39a);
div39a.appendChild(in39b);
div39a.appendChild(btn39);
div39b.appendChild(para39);
div39b.appendChild(para39b);
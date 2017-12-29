var div41 = document.getElementById('js-prct41');
var div41a = document.createElement('div');
var div41b = document.createElement('div');
var para41 = document.createElement('p');

var in41a = document.createElement('input');
var in41b = document.createElement('input');
var in41c = document.createElement('input');
var btn41 = document.createElement('button');
para41.textContent = '---';
para41.style.fontSize = '2em';
para41.style.marginTop = '100px';
para41.style.width = '200px';

in41a.oninput = function () {
    checkEquals41();
}
in41b.oninput = function () {
    checkEquals41();
}
in41c.oninput = function () {
    checkEquals41();
}

function checkEquals41() {
    var a = in41a.value;
    var b = in41b.value;
    var c = in41c.value;

    if (a === b && b === c) {
        para41.textContent = 60;
    } else if (a !== b && b !== c) {
        para41.textContent = 40;
    } else if (a === b || b === c || a === c) {
        para41.textContent = 20;
    }
}

btn41.onclick = function () {
    in41a.value = 0;
    in41b.value = 0;
    para41.textContent = '---';
    para41.style.fontSize = '5em';
    para41.style.marginTop = '100px';
    para41.style.width = '150px';
}

div41a.style.width = '200px';
div41a.style.backgroundColor = 'rgba(120,25,150,0.4)';
div41b.style.backgroundColor = 'rgba(15,50,250,0.5)';
div41a.style.float = 'left';
div41b.style.float = 'left';
div41a.style.padding = '25px';
div41a.style.paddingTop = '75px';
div41b.style.paddingLeft = '150px';
div41b.style.paddingRight = '150px';
div41a.style.height = '150px';
div41b.style.height = '250px';
div41.style.marginBottom = '275px';
div41.style.marginLeft = '150px';
div41b.style.verticalAlign = 'center';
div41.appendChild(div41a);
div41.appendChild(div41b);

in41a.style.width = '200px';
in41b.style.width = '200px';
in41c.style.width = '200px';
in41a.setAttribute('id', 'input38');
in41b.setAttribute('id', 'input38');
in41c.setAttribute('id', 'input38');
in41a.setAttribute('type', 'number');
in41b.setAttribute('type', 'number');
in41c.setAttribute('type', 'number');
in41a.setAttribute('placeholder', '#1');
in41b.setAttribute('placeholder', '#2');
in41c.setAttribute('placeholder', '#3');
btn41.style.width = '68px';
btn41.textContent = 'Reset!';
div41a.appendChild(in41a);
div41a.appendChild(in41b);
div41a.appendChild(in41c);
div41a.appendChild(btn41);
div41b.appendChild(para41);

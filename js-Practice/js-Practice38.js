var div38 = document.getElementById('js-prct38');
var div38a = document.createElement('div');
var div38b = document.createElement('div');
var para38 = document.createElement('p');
var para38b = document.createElement('p');

var in38a = document.createElement('input');
var in38b = document.createElement('input');
var in38c = document.createElement('input');
var in38d = document.createElement('input');
var in38e = document.createElement('input');
var btn38 = document.createElement('button');
para38.textContent = '---';
para38.style.fontSize = '5em';
para38.style.marginTop = '100px';
para38.style.width = '150px';

in38a.oninput = function () {
    makeProm();
}
in38b.oninput = function () {
    makeProm();
}
in38c.oninput = function () {
    makeProm();
}
in38d.oninput = function () {
    makeProm();
}
in38e.oninput = function () {
    makeProm();
}

function calculateGrade(a, b, c, d, e) {
    var grade = 0;
    if (e == '' && a != '' && b != '' && c != '' && d != '') {
        grade = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
        return grade / 4;
    } else {
        grade = (parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e));
        return grade / 5;
    }
}

function makeProm() {
    var a = in38a.value;
    var b = in38b.value;
    var c = in38c.value;
    var d = in38d.value;
    var e = in38e.value;
    var prom = calculateGrade(a, b, c, d, e);
    if (prom >= 95 && prom <= 100) {
        para38.textContent = prom;
        para38.style.backgroundColor = '#ff6f69';
        para38.style.padding = '20px';
        para38.style.fontWeight = 'bold';
        para38.style.color = 'white';
        para38.style.textShadow = '2px 5px 3px rgb(160, 17, 13)';
        para38b.textContent = 'A+';
        para38b.style.fontSize = '4em';
    } else if (prom >= 91 && prom < 95) {
        para38.textContent = prom;
        para38.style.backgroundColor = '#ff6f69';
        para38.style.padding = '20px';
        para38.style.fontWeight = 'bold';
        para38.style.color = 'white';
        para38.style.textShadow = '2px 5px 3px rgb(160, 17, 13)';
        para38b.textContent = '';
    } else if (prom > 80 && prom <= 90) {
        para38.textContent = prom;
        para38.style.backgroundColor = '#ffcc5c';
        para38.style.padding = '20px';
        para38.style.fontWeight = 'bold';
        para38.style.color = 'white';
        para38.style.textShadow = '2px 5px 3px rgb(220, 150, 4)';
    } else if (prom > 70 && prom <= 80) {
        para38.textContent = prom;
        para38.style.backgroundColor = '#87bdd8';
        para38.style.padding = '20px';
        para38.style.fontWeight = 'bold';
        para38.style.color = 'white';
        para38.style.textShadow = '2px 5px 3px rgb(36, 115, 151)';
    } else if (prom <= 70) {
        para38.textContent = prom;
        para38.style.backgroundColor = 'black';
        para38.style.padding = '20px';
        para38.style.fontWeight = 'bold';
        para38.style.color = 'white';
        para38.style.textShadow = '2px 5px 3px white';
    }
}
btn38.onclick = function () {
    in38a.value = 0;
    in38b.value = 0;
    in38c.value = 0;
    in38d.value = 0;
    in38e.value = 0;
    para38.textContent = '---';
    para38.style.textShadow = '2px 2px 2px red';
    para38.style.fontSize = '5em';
    para38.style.marginTop = '100px';
    para38.style.width = '150px';
    para38.style.backgroundColor = '#ffeead';
}

div38a.style.backgroundColor = '#96ceb4';
div38b.style.backgroundColor = '#ffeead';
div38a.style.float = 'left';
div38b.style.float = 'left';
div38a.style.padding = '25px';
div38b.style.paddingLeft = '200px';
div38b.style.paddingRight = '200px';
div38a.style.height = '300px';
div38b.style.height = '350px';
div38.style.marginBottom = '400px';
div38.style.marginLeft = '150px';
div38b.style.verticalAlign = 'center';
div38.appendChild(div38a);
div38.appendChild(div38b);

in38a.setAttribute('id', 'input38');
in38b.setAttribute('id', 'input38');
in38c.setAttribute('id', 'input38');
in38d.setAttribute('id', 'input38');
in38e.setAttribute('id', 'input38');
in38a.setAttribute('type', 'number');
in38b.setAttribute('type', 'number');
in38c.setAttribute('type', 'number');
in38d.setAttribute('type', 'number');
in38e.setAttribute('type', 'number');
in38a.setAttribute('max', 100);
in38b.setAttribute('max', 100);
in38c.setAttribute('max', 100);
in38d.setAttribute('max', 100);
in38e.setAttribute('max', 100);
in38a.setAttribute('min', 0);
in38b.setAttribute('min', 0);
in38c.setAttribute('min', 0);
in38d.setAttribute('min', 0);
in38e.setAttribute('min', 0);
in38a.setAttribute('placeholder', '#1');
in38b.setAttribute('placeholder', '#2');
in38c.setAttribute('placeholder', '#3');
in38d.setAttribute('placeholder', '#4');
in38e.setAttribute('placeholder', 'exam');
btn38.style.width = '68px';
btn38.textContent = 'Reset!';
div38a.appendChild(in38a);
div38a.appendChild(in38b);
div38a.appendChild(in38c);
div38a.appendChild(in38d);
div38a.appendChild(in38e);
div38a.appendChild(btn38);
div38b.appendChild(para38);
div38b.appendChild(para38b);

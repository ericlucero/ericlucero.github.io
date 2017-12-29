var div8 = document.getElementById('js-prct8');
var minNum = 1;
var maxNum = 10;
var frm8 = document.createElement("FORM");
frm8.textContent = 'Un numero entre ' + minNum + ' y ' + maxNum + '  ';
frm8.setAttribute("id", "myForm");
frm8.style.fontSize = '2em';
div8.appendChild(frm8);

var y = document.createElement("INPUT");
y.setAttribute("type", "number");
document.getElementById("myForm").appendChild(y);

var btn8 = document.createElement('button');
btn8.textContent = 'Check!';
btn8.style.fontSize = '1.25em';
btn8.style.margin = '10px';
btn8.style.cursor = 'pointer';
div8.appendChild(btn8);

var rndm = generateRndmNum(10);
//console.log(rndm);

// Boton de reinicio
var btnRefresh8 = document.createElement('button');
btnRefresh8.textContent = 'Refresh!';
btnRefresh8.style.fontSize = '1.25em';
btnRefresh8.style.margin = '10px';
btnRefresh8.style.cursor = 'pointer';
btnRefresh8.style.backgroundColor = 'rgba(250,0,0,0.3)';
div8.appendChild(btnRefresh8);
btnRefresh8.onclick = function () {
    para8.textContent = '';
    y.value = '';
    var rndm = generateRndmNum(10);
    console.log(rndm);
}

var para8 = document.createElement('p');
div8.appendChild(para8);
para8.style.fontSize = '1.5em';
para8.style.color = 'blue';


btn8.onclick = function () {
    var in8 = y.value;
    console.log('Click !!');
    console.log('in8 = ' + in8);
    console.log('Random = ' + rndm);
    if (in8 == rndm) {
        para8.textContent = 'Lo has conseguido, el numero es: ' + rndm + '!!';
    }
    if (in8 === '') {
        para8.textContent = 'Introduzca un valor correcto!';
    }
    if (in8 < rndm) {
        para8.textContent = 'El numero ' + in8 + ' es muy bajo';
    }
    if (in8 > rndm) {
        para8.textContent = 'El numero ' + in8 + ' es muy alto';
    }
}

//Creacion del numero random
function generateRndmNum(num) {
    var rndom = Math.floor(Math.random() * (num + 1));
    return rndom;
}
var div10 = document.getElementById('js-prct10');

// Formulario 1--------------------
var frm10a = document.createElement("FORM");
frm10a.textContent = '1st Number: ';
frm10a.setAttribute("id", "myForm10");
frm10a.style.fontSize = '1.4em';
frm10a.style.marginTop = '0.5em';
div10.appendChild(frm10a);

var Num1 = document.createElement('INPUT');
Num1.setAttribute("type", "number");
Num1.style.marginLeft = '0.5em';
document.getElementById("myForm10").appendChild(Num1);

// Formulario 2--------------------
var frm10b = document.createElement("FORM");
frm10b.textContent = '2nd Number: ';
frm10b.setAttribute("id", "myForm10b");
frm10b.style.fontSize = '1.4em';
frm10b.style.marginTop = '0.5em';
div10.appendChild(frm10b);

var Num2 = document.createElement('INPUT');
Num2.setAttribute("type", "number");
Num2.style.marginLeft = '0.5em';
document.getElementById("myForm10b").appendChild(Num2);

var btnMult = document.createElement('button');
var btnDiv = document.createElement('button');
var btnReset = document.createElement('button');
btnMult.style.marginRight = '10px';
btnDiv.style.marginRight = '10px';
btnMult.style.marginTop = '10px';
btnMult.style.fontSize = '1.75em';
btnDiv.style.fontSize = '1.75em';
btnReset.style.fontSize = '1.75em';
btnMult.textContent = ' Multiply';
btnDiv.textContent = ' Divide';
btnReset.textContent = ' Reset';
btnMult.style.backgroundColor = 'rgba(30,255,30,0.6)';
btnDiv.style.backgroundColor = 'rgba(255,30,30,0.6)';
btnReset.style.backgroundColor = 'gray';
btnReset.style.color = 'white';
div10.appendChild(btnMult);
div10.appendChild(btnDiv);
div10.appendChild(btnReset);
var para10 = document.createElement('p');
div10.appendChild(para10);
btnMult.onclick = function () {
    var Num1val = Num1.value;
    var Num2val = Num2.value;
    if (Num1val == '' || Num2val == '') {
        para10.textContent = 'Bitch Please!!';
    } else {
        var prod = Num1val * Num2val;
        para10.textContent = prod;
        console.log(prod);
    }
}

btnDiv.onclick = function () {
    var Num1val = Num1.value;
    var Num2val = Num2.value;
    if (Num1val == '' || Num2val == '' || Num2val == 0) {
        para10.textContent = 'Bitch Please!!';
    } else if (Num2val != 0) {
        var divd = Num1val / Num2val;
        para10.textContent = divd;
        console.log(divd);
    }
}
btnReset.onclick = function () {
    Num1.value = '';
    Num2.value = '';
    para10.textContent = '';
}
para10.style.fontSize = '4em';
para10.style.fontWeight = 'bold';
para10.style.color = 'rgba(0,150,255,0.7)';
para10.style.textShadow = '3px 4px 3px black';

var exp1 = document.getElementById("exp-1");
var exp2 = document.getElementById("exp-2");
var exp3 = document.getElementById("exp-3");
var exp4 = document.getElementById("exp-4");
var exp5 = document.getElementById("exp-5");
var dte1 = document.getElementById("expDate1");
var pos1 = document.getElementById("expPos1");
var plc1 = document.getElementById("expPlace1");
var par1 = document.getElementById("expPara1");
var par2 = document.getElementById("expPara2");
var par3 = document.getElementById("expPara3");
var par4 = document.getElementById("expPara4");
var par5 = document.getElementById("expPara5");

exp1.onmouseover = function () {
    par1.textContent = 'Docente en la facultad de Ingeniería, como profesor de Física, Calculo y Matemáticas.';
    par1.style.marginTop = '2em';
    exp1.style.cursor = "pointer";
    exp1.style.backgroundColor = 'rgba(111,111,111,0.3)';
    exp1.style.marginLeft = '21%';
    exp1.style.float = 'left';
    pos1.style.fontSize = '1.2em';
    pos1.style.fontWeight = 'bolder';
    dte1.style.fontSize = '1.2em';
    dte1.style.color = 'blue';
    plc1.style.color = 'blue';
    plc1.style.fontSize = '1em';
    plc1.style.fontWeight = '500';
    pos1.style.backgroundColor = 'rgba(111,111,111,0.4)';
    dte1.style.backgroundColor = 'rgba(111,111,111,0.4)';
    plc1.style.backgroundColor = 'rgba(111,111,111,0.4)';
    par1.style.backgroundColor = 'rgba(111,111,111,0.4)';
}
exp1.onmouseout = function () {
    par1.textContent = '';
    par1.style.marginTop = '';
    exp1.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    exp1.style.marginLeft = '0%';
    exp1.style.float = '';
    pos1.style.fontSize = '1em';
    pos1.style.fontWeight = '100';
    dte1.style.fontSize = '';
    dte1.style.color = '';
    plc1.style.color = '';
    plc1.style.fontSize = '';
    plc1.style.fontWeight = '';
    pos1.style.backgroundColor = '';
    dte1.style.backgroundColor = '';
    plc1.style.backgroundColor = '';
    par1.style.backgroundColor = '';
}

exp2.onmouseover = function () {
    par2.textContent = 'Docente en la facultad de Ingeniería, como profesor de Física, Calculo y Matemáticas.';
    par2.fontSize = '6em';
    exp2.style.backgroundColor = 'rgba(111,111,111,0.2)';
}
exp2.onmouseout = function () {
    par2.textContent = '';
    exp2.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
}
exp3.onmouseover = function () {
    par3.textContent = 'Docente en la facultad de Ingeniería, como profesor de Física, Calculo y Matemáticas.';
    par3.fontSize = '6em';
    exp3.style.backgroundColor = 'rgba(111,111,111,0.3)';
}
exp3.onmouseout = function () {
    par3.textContent = '';
    exp3.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
}

exp4.onmouseover = function () {
    par4.textContent = 'Docente en la facultad de Ingeniería, como profesor de Física, Calculo y Matemáticas.';
    par4.fontSize = '6em';
    exp4.style.backgroundColor = 'rgba(111,111,111,0.4)';
}
exp4.onmouseout = function () {
    par4.textContent = '';
    exp4.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
}

exp5.onmouseover = function () {
    par5.textContent = 'Docente en la facultad de Ingeniería, como profesor de Física, Calculo y Matemáticas.';
    par5.fontSize = '6em';
    exp5.style.backgroundColor = 'rgba(111,111,111,0.4)';
}
exp5.onmouseout = function () {
    par5.textContent = '';
    exp5.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
}

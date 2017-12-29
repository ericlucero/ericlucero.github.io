var div0 = document.getElementById('js-prct4');
var form = document.getElementById('frm0');
var submit = document.getElementById('submit-btn');
var rst = document.getElementById('reset-btn');
form.style.fontSize = '1.5em';
var lado_a = document.getElementById('lado_a');
var lado_b = document.getElementById('lado_b');
var lado_c = document.getElementById('lado_c');

submit.onclick = function () {
    var para0 = document.createElement('p');
    document.getElementById('js-prct4').appendChild(para0);
    var para1 = document.createElement('p');
    document.getElementById('js-prct4').appendChild(para1);
    if (lado_a.value === "" || lado_c.value === "" || lado_c.value === "") {
        lado_a.value = 5;
        lado_b.value = 6;
        lado_c.value = 7;
    }
    var Perimetro = parseInt(lado_a.value) + parseInt(lado_b.value) + parseInt(lado_c.value);
    var Peri = (Perimetro / 2);
    var HeroFormula = Peri * (Peri - parseInt(lado_a.value)) * (Peri - parseInt(lado_b.value)) * (Peri - parseInt(lado_c.value));
    para0.textContent = 'Perimetro: ' + Perimetro;
    para0.style.fontSize = '24px';
    para1.textContent = 'Area: ' + Math.sqrt(HeroFormula);
    para1.style.fontSize = '24px';
    rst.onclick = function () {
        para0.textContent = '';
        para1.textContent = '';
        lado_a.value = '';
        lado_b.value = '';
        lado_c.value = '';
    }
};
window.onload = function () {
    var c = document.getElementById("myCanvas");
    //var canvas = document.createElement('canvas');
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(300, 20);
    ctx.lineTo(300, 120);
    ctx.lineTo(50, 20);
    ctx.font = "20px Verdana";
    ctx.fillText("a", 150, 90);
    ctx.fillText("b", 175, 16);
    ctx.fillText("c", 275, 65);
    ctx.stroke();
};

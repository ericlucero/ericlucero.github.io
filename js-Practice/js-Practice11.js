var div11 = document.getElementById('js-prct11');
var inF = document.createElement('INPUT');
var inC = document.createElement('INPUT');
var inK = document.createElement('INPUT');
var sctn11a = document.createElement('div');
var sctn11b = document.createElement('div');
var sctn11c = document.createElement('div');
var sctn11ap = document.createElement('p');
var sctn11bp = document.createElement('p');
var sctn11cp = document.createElement('p');
sctn11a.style.backgroundColor = 'rgba(0,200,200,0.4)';
sctn11b.style.backgroundColor = 'rgba(100,200,0,0.4)';
sctn11c.style.backgroundColor = 'rgba(200,200,0,0.6)';
sctn11a.style.borderRadius = '14px 0px 0px 14px';
sctn11c.style.borderRadius = '0px 14px 14px 0px';
sctn11a.style.marginLeft = '25px';
sctn11a.style.width = '30%';
sctn11b.style.width = '30%';
sctn11c.style.width = '30%';
sctn11a.style.float = 'left';
sctn11b.style.float = 'left';
sctn11c.style.float = 'left';
sctn11a.style.padding = '8px';
sctn11b.style.padding = '8px';
sctn11c.style.padding = '8px';
div11.appendChild(sctn11a);
div11.appendChild(sctn11b);
div11.appendChild(sctn11c);
sctn11ap.textContent = 'Celsius: ';
sctn11bp.textContent = 'Fahrenheit: ';
sctn11cp.textContent = 'Kelvin: ';
sctn11ap.style.fontSize = '2em';
sctn11bp.style.fontSize = '2em';
sctn11cp.style.fontSize = '2em';
inC.style.fontSize = '2em';
inF.style.fontSize = '2em';
inK.style.fontSize = '2em';
sctn11a.appendChild(sctn11ap);
sctn11b.appendChild(sctn11bp);
sctn11c.appendChild(sctn11cp);
sctn11a.appendChild(inC);
sctn11b.appendChild(inF);
sctn11c.appendChild(inK);
inC.setAttribute('placeholder', 'Celsius');
inF.setAttribute('placeholder', 'Fahrenheit');
inK.setAttribute('placeholder', 'Kelvin');
inC.setAttribute("type", "number");
inF.setAttribute("type", "number");
inK.setAttribute("type", "number");

inC.setAttribute("oninput", "CelsiusTo(this.value)");
inF.setAttribute("oninput", "FahrenheitTo(this.value)");
inK.setAttribute("oninput", "KelvinTo(this.value)");
inC.setAttribute("onchange", "CelsiusTo(this.value)");
inF.setAttribute("onchange", "FahrenheitTo(this.value)");
inK.setAttribute("onchange", "KelvinTo(this.value)");

function CelsiusTo(valNum) {
    valNum = parseFloat(valNum);
    inF.value = (valNum * 1.8) + 32;
    inK.value = valNum + 273.15;
}

function FahrenheitTo(valNum) {
    valNum = parseFloat(valNum);
    inC.value = (valNum -32) / 1.8;
    inK.value = ((valNum - 32)/1.8) + 273.15;
}

function KelvinTo(valNum) {
    valNum = parseFloat(valNum);
    inC.value = valNum-273.15;
    inF.value = ((valNum - 273.15)*1.8) + 32;
}

div11.style.paddingBottom = '12em';
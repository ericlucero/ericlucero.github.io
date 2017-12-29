var div19 = document.getElementById('js-prct19');
var in19a = document.createElement('INPUT');
var para19 = document.createElement('p');

in19a.setAttribute('type', 'number');
in19a.setAttribute('placeholder', 'numA');

in19a.oninput = function () {
    if (in19a.value == '') {
        para19.textContent = '';
    } else {
        var numA = parseFloat(in19a.value);
        para19.textContent = testhundred(numA);
    }
}

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

in19a.style.backgroundColor = 'rgba(50,255,150,0.35)';
in19a.style.width = '80px';
in19a.style.textAlign = 'center';
in19a.style.fontSize = '2.5em';
div19.appendChild(in19a);
div19.appendChild(para19);
para19.style.fontSize = '3em';
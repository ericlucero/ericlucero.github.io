var div32 = document.getElementById('js-prct32a');
var in32a = document.createElement('INPUT');
var in32b = document.createElement('INPUT');
var para32a = document.createElement('p');

var a = in32a.value;
var b = in32b.value;

in32a.onchange = function(){
    para32a.textContent = 'El valor mas cercano a 100 es ' +   nearestTo(in32a.value,in32b.value);
}
in32b.onchange = function(){
    para32a.textContent = 'El valor mas cercano a 100 es ' +    nearestTo(in32a.value,in32b.value);
}

function nearestTo(x, y) {
    var nearTo = 100;
    var a = Math.abs(nearTo - x);
    var b = Math.abs(nearTo - y);
    if (a < b) {
        return x;
    } else {
        return y;
    }
}

in32a.setAttribute('placeholder', 'Input a number');
in32b.setAttribute('placeholder', 'Input a number');
in32a.setAttribute('type', 'number');
in32b.setAttribute('type', 'number');
in32a.style.backgroundColor = 'rgba(125,233,27,0.3)';
in32b.style.backgroundColor = 'rgba(110,110,110,0.3)';
in32b.style.width = '200px';
in32a.style.width = '200px';
in32a.style.height = '30px';
in32b.style.height = '30px';
in32a.style.fontSize = '2em';
in32b.style.fontSize = '2em';
in32a.style.textAlign = 'center';
in32b.style.textAlign = 'center';
div32.appendChild(in32a);
div32.appendChild(in32b);
div32.appendChild(para32a);
para32a.style.fontSize = '3em';
para32a.style.color = 'blue';

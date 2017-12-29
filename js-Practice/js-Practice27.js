var div27 = document.getElementById('js-prct27');
var in27a = document.createElement('INPUT');
var para27a = document.createElement('p');

in27a.setAttribute('placeholder', 'Check if string starts with Java');

in27a.oninput = function () {
    if (in27a.value.toString().length != null) {
        para27a.textContent = checkStringStart(in27a.value.toString());
    } else if(in27a.value === '') {
        para27a.textContent = '';
    }
}
para27a.textContent = '';
function checkStringStart(x) {
    if (x.slice(0, 4) == 'Java') {
        return true;
    } else {
        return false;
    }
}

in27a.style.backgroundColor = 'rgba(255,250,0,07)';
in27a.style.width = '600px';
in27a.style.height = '30px';
in27a.style.textAlign = 'center';
in27a.style.fontSize = '2em';
div27.appendChild(in27a);
div27.appendChild(para27a);
para27a.style.fontSize = '3em';
para27a.style.color = 'blue';

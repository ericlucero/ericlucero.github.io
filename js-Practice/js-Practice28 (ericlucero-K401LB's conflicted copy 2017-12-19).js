var div28 = document.getElementById('js-prct28');
var in28a = document.createElement('INPUT');
var para28a = document.createElement('p');

in28a.setAttribute('placeholder', 'Enter a number');

in28a.oninput = function () {
    if (in28a.value.toString().length != null) {
        para28a.textContent = checkStringStart(in28a.value.toString());
    } else if(in28a.value === '') {
        para28a.textContent = '';
    }
}
para28a.textContent = '';
function checkStringStart(x) {
    if (x.slice(0, 4) == 'Java') {
        return true;
    } else {
        return false;
    }
}

in28a.style.backgroundColor = 'rgba(0,250,250,0.5)';
in28a.style.width = '600px';
in28a.style.height = '30px';
in28a.style.textAlign = 'center';
in28a.style.fontSize = '2em';
div28.appendChild(in28a);
div28.appendChild(para28a);
para28a.style.fontSize = '3em';
para28a.style.color = 'blue';

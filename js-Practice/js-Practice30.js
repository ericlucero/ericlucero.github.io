var div30 = document.getElementById('js-prct30');
var in30a = document.createElement('INPUT');
var para30a = document.createElement('p');

in30a.setAttribute('placeholder', 'Check if string starts with Java');

in30a.oninput = function () {
    if (in30a.value.toString().length != null) {
        para30a.textContent = checkStringStart2(in30a.value.toString());
    } else if(in30a.value === '') {
        para30a.textContent = '';
    }
}

function checkStringStart2(x) {
    var Script = x.slice(0, 6);
    if (Script == 'Script') {
        return x.slice(6);
    } else {
        return x;
    }
}

in30a.style.backgroundColor = 'rgba(50,71,230,0.6)';
in30a.style.width = '600px';
in30a.style.height = '30px';
in30a.style.textAlign = 'center';
in30a.style.fontSize = '2em';
div30.appendChild(in30a);
div30.appendChild(para30a);
para30a.style.fontSize = '3em';
para30a.style.color = 'blue';
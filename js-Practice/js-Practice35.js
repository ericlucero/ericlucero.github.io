var div35 = document.getElementById('js-prct35');
var in35a = document.createElement('INPUT');
var in35b = document.createElement('INPUT');
var para35a = document.createElement('p');

in35b.onchange = function () {
    para35a.textContent = checkNumberOfChar(in35a.value,in35b.value );
}
in35b.oninput = function () {
    para35a.textContent = checkNumberOfChar(in35a.value,in35b.value );
}

function checkNumberOfChar(x, y) {
    var a = x.split("");
    var cntdr = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == y) {
            cntdr++;
        }
    }
    return cntdr;
}

in35a.style.backgroundColor = 'rgba(21,252,12,0.75)';
in35a.style.width = '500px';
in35b.style.width = '100px';
in35a.style.height = '30px';
in35b.style.height = '30px';
in35a.style.fontSize = '2em';
in35a.style.textAlign = 'center';
div35.appendChild(in35a);
div35.appendChild(in35b);
div35.appendChild(para35a);
para35a.style.fontSize = '3em';
para35a.style.color = 'blue';

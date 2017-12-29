var div37 = document.getElementById('js-prct37');
var in37a = document.createElement('INPUT');
var para37a = document.createElement('p');

in37a.oninput = function () {
    para37a.textContent = FirstThreeLowerCase(in37a.value);
}

function FirstThreeLowerCase(x) {
    if (x.length > 3) {
        var a = x.substr(0, 3).toLowerCase();
        var b = x.replace(x.substr(0, 3), a);
        return b;
    } else {
        var c = x.replace(x, x.toUpperCase());
        return c;
    }
}

in37a.setAttribute('placeholder', 'Input a string');
in37a.style.backgroundColor = 'rgb(80, 57, 76)';
in37a.style.color = 'white';
in37a.style.width = '500px';
in37a.style.height = '30px';
in37a.style.fontSize = '2em';
in37a.style.textAlign = 'center';
div37.appendChild(in37a);
div37.appendChild(para37a);
para37a.style.fontSize = '3em';
para37a.style.color = 'blue';

var div26 = document.getElementById('js-prct26');
var in26a = document.createElement('INPUT');
var para26a = document.createElement('p');

in26a.setAttribute('placeholder', 'Write a String');

in26a.oninput = function () {
    if (in26a.value.toString().length > 3) {
        para26a.textContent = changeFirstAtLast3(in26a.value.toString());
    } else {
        para26a.textContent = '';
    }
}

function changeFirstAtLast3(x) {
    var last3 = x.slice( (x.length - 3), (x.length ));
    var newString = last3 + x + last3;
    return newString;
}

in26a.style.backgroundColor = 'rgba(30,30,190,0.4)';
in26a.style.width = '600px';
in26a.style.height = '30px';
in26a.style.textAlign = 'center';
in26a.style.fontSize = '2em';
div26.appendChild(in26a);
div26.appendChild(para26a);
para26a.style.fontSize = '3em';
para26a.style.color = 'blue';
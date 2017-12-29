var div23 = document.getElementById('js-prct23');
var in23a = document.createElement('INPUT');
var para23a = document.createElement('p');

in23a.setAttribute('placeholder', 'Write a String');

in23a.oninput = function () {
    if (in23a.value.toString().length > 1) {
        para23a.textContent = changeFirstAndLast(in23a.value.toString());
    } else {
        para23a.textContent = '';
    }
}

function changeFirstAndLast(x) {
    var first = x.charAt(0);
    var last = x.charAt((x.length - 1));
    var rest = x.slice(1, (x.length - 1));
    var newString = last + rest + first;
    return newString;
}

in23a.style.backgroundColor = 'rgba(100,255,20,0.8)';
in23a.style.width = '600px';
in23a.style.height = '30px';
in23a.style.textAlign = 'center';
in23a.style.fontSize = '2em';
div23.appendChild(in23a);
div23.appendChild(para23a);
para23a.style.fontSize = '3em';
para23a.style.color = 'blue';

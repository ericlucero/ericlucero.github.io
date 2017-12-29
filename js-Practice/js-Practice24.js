var div24 = document.getElementById('js-prct24');
var in24a = document.createElement('INPUT');
var para24a = document.createElement('p');

in24a.setAttribute('placeholder', 'Write a String');

in24a.oninput = function () {
    if (in24a.value.toString().length > 1) {
        para24a.textContent = changeFirstAtLast(in24a.value.toString());
    } else {
        para24a.textContent = '';
    }
}

function changeFirstAtLast(x) {
    var last = x.charAt((x.length - 1));
    var rest = x.slice(1, (x.length - 1));
    var newString = last + rest + last;
    return newString;
}

in24a.style.backgroundColor = 'rgba(30,30,190,0.4)';
in24a.style.width = '600px';
in24a.style.height = '30px';
in24a.style.textAlign = 'center';
in24a.style.fontSize = '2em';
div24.appendChild(in24a);
div24.appendChild(para24a);
para24a.style.fontSize = '3em';
para24a.style.color = 'blue';

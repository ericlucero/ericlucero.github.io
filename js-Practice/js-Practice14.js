var div14 = document.getElementById('js-prct14');
var in14  = document.createElement('INPUT');
var par14 = document.createElement('p');
div14.appendChild(in14);
in14.setAttribute('placeholder', 'filename');

in14.onchange = function () {
    var filename14 = in14.value;
    if (filename14 == '') {
        par14.textContent = null;
    } else {
        var fileExt = filename14.split(".").pop();
        par14.textContent = 'Document extension: ' + fileExt;
    }
}
par14.style.fontSize = '3em';
div14.appendChild(par14);

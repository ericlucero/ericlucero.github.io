var div21 = document.getElementById('js-prct21');
var in21a = document.createElement('INPUT');
var para21a = document.createElement('p');

in21a.setAttribute('placeholder', 'Enter filename');

in21a.oninput = function () {
    para21a.textContent = pyConcat(in21a);
}

function pyConcat(valA) {
    var in21aVal = valA.value.toString();
    var pyPrefix = "Py";
    if (valA.value == '') {
        para21a.textContent = '';
    } else if (in21aVal.slice(0, 2) == "Py" || in21aVal.slice(0, 2) == "py") {
        return in21aVal;
    } else {
        return pyPrefix.concat("-", in21aVal);
    }
}

in21a.style.backgroundColor = 'rgba(150,255,0,0.8)';
in21a.style.width = '500px';
in21a.style.textAlign = 'center';
in21a.style.fontSize = '1.5em';
div21.appendChild(in21a);
div21.appendChild(para21a);
para21a.style.fontSize = '3em'; 
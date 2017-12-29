var div20 = document.getElementById('js-prct20');
var in20a = document.createElement('INPUT');
var in20b = document.createElement('INPUT');
var para20a = document.createElement('p');
var para20b = document.createElement('p');

in20a.setAttribute('type', 'number');
in20b.setAttribute('type', 'number');
in20a.setAttribute('placeholder', 'numA');
in20b.setAttribute('placeholder', 'numB');

in20a.oninput = function () {
    if (in20a.value == '' || in20b.value == '') {
        para20a.textContent = '';
        para20b.textContent = '';
    } else {
        var numA = parseFloat(in20a.value);
        var numB = parseFloat(in20b.value);
        para20a.textContent = checkSign(numA, numB);
        para20b.textContent = 'Different sign = ' + checkSameSign(numA, numB);
    }
}
in20b.oninput = function () {
    if (in20b.value == '' || in20a.value == '') {
        para20a.textContent = '';
        para20b.textContent = '';
    } else {
        var numA = parseFloat(in20a.value);
        var numB = parseFloat(in20b.value);
        para20a.textContent = checkSign(numA, numB);
        para20b.textContent = 'Different sign = ' + checkSameSign(numA, numB);
    }
}

function checkSign(x, y) {
    if (x < 0 && y > 0) {
        var result20 = 'The numbers ' + x + ' and ' + y + ' are different signs';
        return result20
    } else if (x > 0 && y < 0) {
        var result20 = 'The numbers ' + x + ' and ' + y + ' are different signs';
        return result20
    }
    if (x < 0 && y < 0) {
        var result20 = 'The numbers ' + x + ' and ' + y + ' are the same sign';
        return result20
    } else if (x > 0 && y > 0) {
        var result20 = 'The numbers ' + x + ' and ' + y + ' are the same sign';
        return result20
    }
}

function checkSameSign(x, y) {
    if ((x > 0 && y < 0) || x < 0 && y > 0) {
        return true;
    } else {
        return false;
    }
}

in20a.style.backgroundColor = 'rgba(250,255,0,0.8)';
in20b.style.backgroundColor = 'rgba(0,100,250,0.2)';
in20a.style.width = '70px';
in20b.style.width = '70px';
in20a.style.textAlign = 'center';
in20b.style.textAlign = 'center';
in20a.style.fontSize = '2em';
in20b.style.fontSize = '2em';
div20.appendChild(in20a);
div20.appendChild(in20b);
div20.appendChild(para20a);
div20.appendChild(para20b);
para20a.style.fontSize = '3em';
para20b.style.fontSize = '3em';

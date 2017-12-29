var form = document.getElementById('form-leap');
var div6 = document.getElementById('js-prct6');
form.style.fontSize = '2em';
form.style.backgroundColor = 'rgba(225,22,22,0.3)';
form.style.margin = '10px 80px';
form.style.padding = '10px';

var para = document.createElement('p');
para.style.fontSize = '2em';
div6.appendChild(para);

var btn6 = document.createElement('button');
btn6.textContent = 'Calculate Leap Year';
btn6.style.fontSize = '1.5em';
div6.appendChild(btn6);
var inLeap = document.getElementById('input-leap');
inLeap.setAttribute('type', 'number');
btn6.onclick = function () {
    var year = inLeap.value;
    if (year === '') {
        alert('Debes introducir un valor para poder calcular');
    } else {;
        para.textContent = calculateLeapYear(year);
    }
};

function calculateLeapYear(yr) {
    var yr;
    var year = yr;
    if (yr % 4 !== 0 && yr % 400 !== 0) {
        yr = year + ' is a Common Year';
        return yr;
    } else if (yr % 100 !== 0) {
        yr = year + ' is a Leap Year';
        return yr;
    } else {
        yr = year + ' is a Leap Year';
        return yr;
    }
}

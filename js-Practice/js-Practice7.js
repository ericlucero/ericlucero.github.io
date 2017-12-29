var div7 = document.getElementById('js-prct7');
var dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var theBigDay = new Date(2000, 0, 1); // 2000 - Ene - 1st

for (var i = 0; i <= 50; i++) {
    theBigDay.setFullYear((2000 + i));
    // Si de la fecha 2000+i / Ene / 1st resulta que el Day() es 0:
    if (theBigDay.getDay() === 0) {
        var pr77 = document.createElement('p');
        pr77.className = 'para1-practice';
        pr77.textContent += ' ' + ( theBigDay.getYear()+1900 );
        div7.appendChild(pr77);
    }
}
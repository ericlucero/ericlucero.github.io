var div34 = document.getElementById('js-prct34');
var in34a = document.createElement('INPUT');
var in34b = document.createElement('INPUT');
var para34a = document.createElement('p');

in34a.onchange = function () {
    para34a.textContent = checkNumberBetween(in34a.value,in34b.value);
}
in34b.onchange = function () {
    para34a.textContent =checkNumberBetween(in34a.value,in34b.value);
}

function checkNumberBetween(a,b) {
    if ( (a > 40 && a < 60) && (b > 40 && b < 60) ) {
        return greaterOfTwo(a,b);
    }
}

function greaterOfTwo(x,y){
     var maxVal = 0;
    if (x > y) {
        maxVal = x;
    } else {
        maxVal = y;
    }
    return maxVal;
}

in34a.setAttribute('placeholder', 'Input a number');
in34b.setAttribute('placeholder', 'Input a number');
in34a.setAttribute('type', 'number');
in34b.setAttribute('type', 'number');
in34a.style.backgroundColor = 'rgba(237,12,12,0.5)';
in34b.style.backgroundColor = 'rgba(220,240,20,0.8)';
in34b.style.width = '200px';
in34a.style.width = '200px';
in34a.style.height = '30px';
in34b.style.height = '30px';
in34a.style.fontSize = '2em';
in34b.style.fontSize = '2em';
in34a.style.textAlign = 'center';
in34b.style.textAlign = 'center';
div34.appendChild(in34a);
div34.appendChild(in34b);
div34.appendChild(para34a);
para34a.style.fontSize = '3em';
para34a.style.color = 'blue';

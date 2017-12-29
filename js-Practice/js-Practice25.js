var div25 = document.getElementById('js-prct25');
var in25a = document.createElement('INPUT');
var para25a = document.createElement('p');
var para25b = document.createElement('p');

in25a.setAttribute('placeholder', 'Check multiple of...');
in25a.setAttribute('type', 'number');
in25a.setAttribute('min', 0);

in25a.oninput = function () {
    if (in25a.value != 0 && in25a.value % 7 == 0 && in25a.value % 3 != 0) {
        para25a.textContent = 'Multiplo de 7';
        para25b.textContent = '';
    } else if (in25a.value != 0 && in25a.value % 3 == 0 && in25a.value % 7 != 0) {
        para25a.textContent = '';
        para25b.textContent = 'Multiplo de 3';
    } else if (in25a.value % 7 == 0 && in25a.value % 3 == 0 && in25a.value != 0) {
        para25a.textContent = 'Multiplo de 7';
        para25b.textContent = 'Multiplo de 3';
    } else if(in25a.value % 7 != 0 && in25a.value % 3 != 0) {
        para25a.textContent = '';
        para25b.textContent = '';
    }
}

//function checkMultiple(x) {
//    if (x % 7 == 0)
//        var multiple7 = true;
//    return multiple7;
//}

in25a.style.backgroundColor = 'rgba(30,30,190,0.4)';
in25a.style.width = '600px';
in25a.style.height = '30px';
in25a.style.textAlign = 'center';
in25a.style.fontSize = '2em';
div25.appendChild(in25a);
div25.appendChild(para25a);
div25.appendChild(para25b);
para25a.style.fontSize = '3em';
para25a.style.color = 'blue';
para25b.style.fontSize = '3em';
para25b.style.color = 'blue';

//var iter = 16;
//for (var i = 1; i <= iter; i++) {
//    var myDiv = document.createElement('div');
//    myDiv.setAttribute("id","div-eventListId    ");
//    div25.appendChild(myDiv);
//}
//
//function random(number) {
//    return Math.floor(Math.random() * number);
//}
//
//function bgChange() {
//    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//    return rndCol;
//}
//
//var divs = document.getElementById('div-eventListId');
//for (var i = 0; i < divs.length; i++) {
//    divs[i].onclick = function (e) {
//        e.target.style.backgroundColor = bgChange();
//    }
//}

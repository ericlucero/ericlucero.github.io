var w3resource = "w3resource";
var div5 = document.getElementById('js-prct5');
var para5_0 = document.createElement('p');
var para5_1 = document.createElement('p');
var para5_2 = document.createElement('p');
var splited = w3resource.split("");
document.getElementById('js-prct5').appendChild(para5_0);
document.getElementById('js-prct5').appendChild(para5_1);
document.getElementById('js-prct5').appendChild(para5_2);

para5_0.style.fontSize = '1.5em';
para5_0.style.color = 'blue';
para5_0.style.cursor = 'pointer';
para5_0.setAttribute('class', 'para0-practice');
para5_1.style.fontSize = '2em';
para5_1.setAttribute('class', 'para1-practice');
para5_2.setAttribute('class', 'para2-practice');
para5_0.textContent = 'Click';
para5_1.textContent = splited;
para5_0.onclick = function () {
    var last = splited.pop();
    var b = splited.unshift(last);
    var first = splited[0];
    para5_1.textContent = splited;
    para5_2.textContent = splited.toString();
    para5_2.style.color = 'red';
}

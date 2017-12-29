var div12 = document.getElementById('js-prct12');
var btn12 = document.createElement('button');
div12.appendChild(btn12);

btn12.style.fontSize = '2em';
btn12.textContent = 'Ver el URL';
btn12.style.cursor = 'pointer';
var para12 = document.createElement('p');

btn12.onmouseover = function () {
    para12.textContent = 'This page URL is: ' + window.location.href;
}

para12.style.fontSize = '3em';
para12.style.color = 'red';
para12.style.width = '800px';
para12.style.textShadow = '4px 6px 4px blue';   
para12.style.marginLeft = '80px';
div12.appendChild(para12);

var section = document.getElementById('js-prct1');
var para0 = document.createElement('p');
var para1 = document.createElement('p');
var scec0 = document.getElementById('js-prct1').appendChild(para0);
var scec1 = document.getElementById('js-prct1').appendChild(para1);

var date = new Date();
var days = ['Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var hours = date.getHours();
var minutes = date.getMinutes();
var sec = date.getSeconds();
var am = 'a.m.';
var pm = 'p.m.';

para0.textContent = 'Today is: ' + days[date.getDay() - 1];

if (date.getHours() >= 13) {
    para1.textContent = 'Current time is: ' + date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds() + ' ' +
        pm;
} else {
    para1.textContent = 'Current time is: ' + date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds() + ' ' +
        am;
}
para0.setAttribute('class', 'para0-practice');
para1.setAttribute('class', 'para2-practice');

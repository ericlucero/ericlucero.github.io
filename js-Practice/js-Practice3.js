var date = new Date();
var div0 = document.getElementById('js-prct3'); 
var para2 = document.createElement('p');
var para3 = document.createElement('p');
var para4 = document.createElement('p');
var para5 = document.createElement('p');
var res1 = document.getElementById('js-prct3').appendChild(para2);
var res1 = document.getElementById('js-prct3').appendChild(para3);
var res1 = document.getElementById('js-prct3').appendChild(para4);
var res1 = document.getElementById('js-prct3').appendChild(para5);

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var monthts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
var dte = date.getDate();
var day  = date.getDay();
var mnth = date.getMonth();
var mnth1 = date.getMonth("January");
var year = date.getFullYear();

para2.textContent = monthts[date.getMonth()] + ' - '+date.getDay() + ' - '+year;
para2.setAttribute('class','para0-practice');

para3.textContent = monthts[date.getMonth()] + '/'+date.getDay() + '/'+year;
para3.setAttribute('class','para1-practice');
para4.textContent = date.getDay()+ ' - '+monthts[date.getMonth()] + ' - '+year;
para4.setAttribute('class','para1-practice');
para5.textContent = date.getDay() +'/'+monthts[date.getMonth()]  + '/'+year;
para5.setAttribute('class','para2-practice');
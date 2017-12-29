var div9 = document.getElementById('js-prct9');
var para90 = document.createElement('p');
var para91 = document.createElement('p');
var para92 = document.createElement('p');

para90.className = 'para0-practice';
para91.className = 'para1-practice';
para92.className = 'para2-practice';

div9.appendChild(para90);
div9.appendChild(para91);
div9.appendChild(para92);

para90.textContent = 'Faltan';
para92.textContent = 'dias para Navidad !!';

Date.daysBetween = function (date1, date2) {
    //Get 1 day in milliseconds   
    var one_day = 1000 * 60 * 60 * 24; 
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime(); 
    // Calculate the difference in milliseconds  
    var difference_ms = date2_ms - date1_ms; 
    // Convert back to days and return   
    return Math.round(difference_ms / one_day);
}

//Set the two dates
var today = new Date();
var Navidad = new Date( today.getFullYear(), today.getMonth(),25);

//console.log('Days between ' + today.toLocaleDateString() + ' and ' + Navidad.toLocaleDateString() + ': ' + Date.daysBetween(today,Navidad) );
para91.textContent = (Date.daysBetween(today,Navidad) + 1 );
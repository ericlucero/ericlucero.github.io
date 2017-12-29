var output = document.querySelector('.div-countdown ');
output.innerHTML = '';

var i = 10;
while(i>=0){
 var para = document.createElement('p');  
 para.textContent = i;
 output.appendChild(para);    
 i--;
}


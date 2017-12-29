var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');

var para = document.getElementById('p-formDefault');

  form.onsubmit = function(e) {
        if(fname.value === '' || lname.value === '') {
          e.preventDefault();
          para.textContent = 'You need to fill in both names!';
        }else{
            para.textContent = 'Thanks!';
        }
      }
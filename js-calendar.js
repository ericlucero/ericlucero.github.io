var select = document.querySelector('.select-calendar');
var list = document.querySelector('.ul-calendar');
var h1 = document.querySelector('.month-header');

select.onchange = function() {
  var choiceMonth = select.value;

  var days = 31;
    if(choiceMonth == 'February'){
        days = 28;
    }
    if(choiceMonth == 'April' || choiceMonth == 'June' || choiceMonth == 'March'){
        days = 30;
    }

  createCalendar(days, choiceMonth);
}

function createCalendar(days, choiceMonth) {
  list.innerHTML = '';
  h1.textContent = choiceMonth;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

//createCalendar(31,'January');
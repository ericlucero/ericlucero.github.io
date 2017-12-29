var btnCambiaColor = document.getElementById('button-cambiaColorId2');
var divCambiaColor = document.getElementById('div-cambiaColorId2');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

function bgChange(objct) {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    objct.target.style.backgroundColor = rndCol;
}

btnCambiaColor.addEventListener('click', bgChange);
divCambiaColor.addEventListener('click', bgChange);

// Con addEventListener se puede aplicar la misma funcion a varios elementos

//btnCambiaColor.onfocus = bgChange;//Cuando esta activo
//btnCambiaColor.onblur = bgChange;//CUando pierde focus
//btnCambiaColor.ondblclick = bgChange; //Cuando doble-click
//btnCambiaColor.onmouseover = bgChange; //Cuando Hover
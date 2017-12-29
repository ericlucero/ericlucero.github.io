var btnCambiaColor = document.getElementById('button-cambiaColorId');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.getElementById('div-cambiaColorId').style.backgroundColor = rndCol;
}

//btnCambiaColor.onfocus = bgChange;//Cuando esta activo
//btnCambiaColor.onblur = bgChange;//CUando pierde focus
//btnCambiaColor.ondblclick = bgChange; //Cuando doble-click
btnCambiaColor.onmouseover = bgChange; //Cuando Hover
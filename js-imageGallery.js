var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var k = 1; k <= 5; k++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'media/pic' + k + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function (objct) {
        // imgSrc se le asigna el src de objct
        var imgSrc = objct.target.getAttribute('src');
        displayImg(imgSrc);
    }
    //Coloca el atributo a la imagen grande
    function displayImg(imgSrc) {
        //objct es displayedImage
        displayedImage.setAttribute('src', imgSrc);
    }
}
/* Wiring up the Darken/Lighten button */
  var darkCol = "rgba(0,0,0,0)";
  var lightCol = "rgba(0,0,0,0.3)";
btn.onclick = function () {
    var attbtn = btn.getAttribute("class");
    console.log(attbtn);
    if (attbtn === "dark") {
        btn.textContent ="lighten";
        btn.setAttribute("class", "lighten");
        overlay.style.backgroundColor = lightCol;
    }
        if (attbtn === "lighten") {
        btn.textContent ="darken";
        btn.setAttribute("class", "dark");
        overlay.style.backgroundColor = darkCol;
    }
}

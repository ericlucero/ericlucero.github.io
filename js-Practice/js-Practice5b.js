var changer = document.getElementById('js-prct5b');
var a = document.createElement('pre');
var click = document.createElement('p');
changer.appendChild(click);
changer.appendChild(a);

a.textContent = ' w3resources ';
a.style.fontSize = '2em';
a.setAttribute('class', 'para1-practice');
a.setAttribute("id", "id");

click.textContent = 'Click';
click.style.marginTop = '1em';
click.style.color = 'green';
click.style.cursor = 'pointer';
click.setAttribute('class', 'para0-practice');

//funcion para animar el texto - onclick:
click.onclick = function animate_string(id) {
    var text = a.textContent; //Le pasa el contenido de a. a var text
    // Funcion --setInterval(f,t)-- ejecuta la funcion -f- cada -t- ms.
    setInterval(function () {
        // Por concatenacion se da el efecto de animacion
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        // Le pasa este valor al elemento -a-
        a.textContent = text;
    }, 300);
}

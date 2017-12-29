var div31 = document.getElementById('js-prct31');
var in31a = document.createElement('INPUT');
var in31b = document.createElement('INPUT');
var in31c = document.createElement('INPUT');
var para31a = document.createElement('p');
var btn31a = document.createElement('button');

in31a.setAttribute('placeholder', 'Input a number');
in31b.setAttribute('placeholder', 'Input a number');
in31c.setAttribute('placeholder', 'Input a number');
in31a.setAttribute('type', 'number');
in31b.setAttribute('type', 'number');
in31c.setAttribute('type', 'number');

btn31a.onclick = function () {
    //    console.log('\n Click! \n');
    //    console.log('x1 = ' + x1);
    //    console.log('x2 = ' + x2);
    //    console.log('x3 = ' + x3);
    var x1 = in31a.value;
    var x2 = in31b.value;
    var x3 = in31c.value;
    para31a.textContent = maxOfThree(x1, x2, x3);
}

in31a.onchange = function () {
    //    console.log('\n Click! \n');
    //    console.log('x1 = ' + x1);
    //    console.log('x2 = ' + x2);
    //    console.log('x3 = ' + x3);
    var x1 = in31a.value;
    var x2 = in31b.value;
    var x3 = in31c.value;
    para31a.textContent = maxOfThree(x1, x2, x3);
}

//console.log(maxOfThree(-1, 2, 33));
//console.log(maxOfThree(-12, -2, -33));
//console.log(maxOfThree(-555, 552, 533));
//console.log(maxOfThree(555, 552, 533));

function maxOfThree(x, y, z) {
    var maxVal = 0;
    if (x > y) {
        maxVal = x;
    } else {
        maxVal = y;
    }
    if (z > maxVal) {
        maxVal = z;
    }
    return maxVal;
}

in31a.style.backgroundColor = 'rgba(21,233,127,1)';
in31b.style.backgroundColor = 'rgba(240,141,141,1)';
in31c.style.backgroundColor = 'rgba(255,241,0,0.8)';
in31b.style.width = '200px';
in31a.style.width = '200px';
in31c.style.width = '200px';
in31a.style.height = '30px';
in31b.style.height = '30px';
in31c.style.height = '30px';
in31a.style.fontSize = '2em';
in31b.style.fontSize = '2em';
in31c.style.fontSize = '2em';
in31a.style.textAlign = 'center';
in31b.style.textAlign = 'center';
in31c.style.textAlign = 'center';
div31.appendChild(in31a);
div31.appendChild(in31b);
div31.appendChild(in31c);
div31.appendChild(btn31a);
btn31a.textContent = 'Check!';
btn31a.style.width = '80px';
btn31a.style.height = '40px';
div31.appendChild(para31a);
para31a.style.fontSize = '3em';
para31a.style.color = 'blue';
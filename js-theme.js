var select = document.querySelector('.select-theme');
var html = document.querySelector('.output-theme');

select.onchange = function () {
    var choice = select.value;

    // ADD SWITCH STATEMENT
    switch (choice) {
        case 'white':
            update('white', 'black');
            break;
        case 'black':
            update('black', 'white');
            break;
        case 'purple':
            update('purple', 'white');
            break;
        case 'yellow':
            update('yellow', 'black');
            break;
        case 'psychedelic':
            update('lime', 'yellow');
            break;            
    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

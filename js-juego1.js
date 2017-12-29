//Math.floor(x):
//returns the value of x rounded down to its nearest integer:   Math.floor(4.7);    // returns 4 
//Math.random() 
//returns a random number between 0 (inclusive),  and 1 (exclusive): 

var randomNumber = Math.floor(Math.random()*100) + 1;

//Declaracion de variables
var guesses = document.querySelector('.Previousguesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

// Conteo de los turnos
var guessCount = 1; 
var resetButton;
guessField.focus();  // Pone el cursor en este elemento.

//Primera funcion:
//Toma el value del elemento que se ha asignado como guessField. Ademas, si el turno es el primero imprime las previous guesses.
function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
    // Esto va impimiendo las entradas del usuario
    guesses.textContent += userGuess + ' ';
 // Si el usuario la pega se imprime un mensaje,
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
      // Se cambia el color de la barra
    lastResult.style.backgroundColor = 'green';
    lastResult.style.color = 'white';
    lastResult.style.padding = '5px';
      
    lowOrHi.textContent = '';
      // Se termina el juego
    setGameOver();
      //Termina el juego si ya tiene 10 turnos
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
      // Si no la pega, imprime.
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    lastResult.style.color = 'white';
    lastResult.style.padding = '5px';      
      // Si la entrada del usuario esta debajo del randomNumber generado le dice:
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
 
  guessCount++; // Despues de cada turno se incrementa en 1.
  guessField.value = ''; // Se reinicia el input/
  guessField.focus();
}

// Le dice al elemento guessSubmit que al click ejecute la funcion checkGuess
guessSubmit.addEventListener('click', checkGuess);

// funcion que termina el juego
function setGameOver(){
    guessField.disable = true;
    guessSubmit.disable = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}

// Funcion que permite reiniciar el juego, evitando recargar la pagina.
function resetGame(){
    guessCount = 1; // Reinicia el conteo de turnos
    var resetParas = document.querySelectorAll('.resultParas p'); 
    // Borra todos los paragraps
    for(var i =0; i < resetParas.length; i++){
        resetParas[i].textContent = ' ';
    }
    // Quita el resetButton
    resetButton.parentNode.removeChild(resetButton);
    // Habilita los campos para relledar nuevamente
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    // Quita el background rojo o verde
    lastResult.style.backgroundColor = 'white';
    //  Genera otro RandomNumber para empezar
    randomNumber = Math.floor(Math.random()*100) + 1;
}
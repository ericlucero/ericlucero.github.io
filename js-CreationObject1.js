var input = document.getElementById('input-Object');
var btn = document.getElementById('button-Object');
var para = document.getElementById('para-Object');
btn.onclick = function () {
    var code = input.value;
    para.textContent = eval(code);
}

//         create New Person by a normal function
//function createNewPerson(name) {
//    var obj = {};
//    obj.name = name;
//    obj.greeting = function () {
//        alert('Hi I\'m ' + this.name + '.');
//    };
//    return obj;
//}

//You now can create a person:
//var salva = createNewPerson('Salva');
//salva.name;  // Asi lo imprime apenas carga la pagina (lo corre)
//salva.greeting();

//Create a Person with the constructor function! (constructor function capital letter)
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.';
        console.log(string);
        var pronoun;
        if (gender === 'male' || gender === 'Male' || gender === 'm' || gender === 'M') {
            pronoun = ' He likes ';
        } else if (gender === 'female' || gender === 'Female' || gender === 'f' || gender === 'F') {
            pronoun = ' She likes ';
        } else {
            pronoun = ' They like ';
        }
        // Se agrega el pronoun a la string:
        string += pronoun;
        console.log(string);
        if (this.interests.length === 1) {
            string += this.interests[0] + '.';
        } else {
            for (var i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) { // El ultimo item
                    string += ' and ' + this.interests[i] + '.';
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }
        console.log(string);
        alert(string);
    }
    this.greeting = function () {
        alert('Hello!!, I\'m ' + this.name.first + '!.');
    };
}
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
var person2 = new Person('Sofia', 'Neelson', 30, 'female', ['read', 'soccer', 'physics']);
var person3 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'soccer', 'kickboxing']);

Person.prototype.farewell = function(){
    alert(this.name.first + ' has left the building. Bye for now!');
};
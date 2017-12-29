        var input = document.querySelector('input');
        var btn = document.querySelector('button');
        var para = document.querySelector('p');
        btn.onclick = function() {
            var code = input.value;
            para.textContent = eval(code);
        }
        var person = {
            name: ['Bob', 'Smith'],
            age: 32,
            gender: 'male',
            interests: ['music', 'skiing'],
            bio: function() {
                alert(this.nam  e[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
            },
            greeting: function() {
                alert('Hi! I\'m ' + this.name[0] + '.');
            }
        };
        // Agregando una nueva propiedad al Objeto, con variables.
        var myDataName = 'height';
        var myDataValue = '1.75m';
        person[myDataName] = myDataValue;
        // Uso de " this "
        var person1 = {
            name: 'Chris',
            greeting: function() {
                alert('Hi! I\'m ' + this.name + '.');
            }
        }

        var person2 = {
            name: 'Brian',
            greeting: function() {
                alert('Hi! I\'m ' + this.name + '.');
            }
        }
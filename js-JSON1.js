//var header = document.getElementById('JSON-header');
//var section = document.getElementById('JSON-section');
var header = document.querySelector('header');
var section = document.querySelector('section');

//To obtain the JSON, we are going to use an API called XMLHttpRequest. 
//Make newtwork request
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest(); //request object in XMLHttp constructor...

request.open('GET', requestURL); // open new request
request.responseType = 'json'; // let XMLHttp know os json ton convert String
request.send();

// Event handler: onload
request.onload = function () {
    var superHeroes = request.response; // get the string from the response
    //    var superHeroes = JSON.parse(superHeroesText); // convert it to an object
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    myH1.setAttribute('class', 'JSON-h1');
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

// creates and displays the superhero cards:

function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.setAttribute('class', 'JSON-h2');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

//Setup
var contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
];

console.log("contacts length = " + contacts.length);


function lookUpProfile(firstName, prop) {
  console.log("This is for: " + firstName);
  var counter = 0;
  if (checkExists(firstName) == 0) {
    return "No such contact";
  } else {
    for (var i = 0; i < contacts.length; i++) {
      if (firstName == contacts[i].firstName) {
        console.log("Name Founded");
        console.log("i = " + i);
        console.log(contacts[i][prop]);
        if (contacts[i][prop] == undefined) {
          console.log("No such property");
          return "No such property";
        } else {
          return contacts[i][prop];
        }
      }
    }
  }
  // Only change code above this line
}


function checkExists(key) {
  var counter = 0;
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (key == contacts[i].firstName) {
      counter++;
    }
  }
  return counter;
}

// Change these values to test your function
// lookUpProfile("Akira", "likes");
// lookUpProfile("Zakira", "age");
lookUpProfile("Kristian", "number");
lookUpProfile("Sherlock", "lastNames");
lookUpProfile("bob", "lastNames");

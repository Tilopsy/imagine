const btn = document.getElementById('btn');
btn.onclick = function () {
  const name = prompt('Enter your full name.');
  document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let username = 'Tilopsy';
let age = 40;
let present = false;

// Objects
const person = {
  username: 'Tilopsy',
  age: 40,
  present: false,
  child: {
    name: 'Tilly',
    friend: {
      name: 'Tyler'
    }
  }
}
console.log(person.username);
person.age = 70;
console.log(person);

// Arrays
const bottle1 = {
  size: 'large',
  color: 'yellow'
}



const bottle2 = {
  size: 'small',
  color: 'blue'
}

const bottles = [bottle1, bottle2];
bottles.push(bottle1);
bottles.push(bottle2)
bottles;
bottles[1].color;

const date = new Date();
date.toString();
date.getDay();

// If/Else
// const age = 18;
if (age >= 18) {
  'You are true';
} else {
  'You are false';
}

// For loop
for (let i = 0; i <= 5; i += 1) {
  console.log('We did it!', i);
}

// Functions
// Defining a function
function login(username, password) {
  // Validate username and password
  if (!username || !password) {
    return 'Username or password not provided';
  }
  // Verify username and password
  if (username == 'Tilopsy' && password == '1234') {
    return 'User is logged in';
  } else {
    return 'Invalid username or password';
  }
}
// Invoking a function
login('Tilopsy');

// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
43 - 12;
45 / 7;
5 * 3;
14 % 3;
5 * 3;

Math.floor(45 / 24);
45 % 24
Math.random() * 1000;
Math.max(34, 32, 37);
2 * (3 + 4) - 5 / 2;

// Strings in JavaScript
// Concatenation
const firstname = 'Elizabeth';
const lastname = 'Odei';
const middlename = 'Catherine'
firstname + ' ' + middlename + ' ' + lastname;
// Template literal
`${firstname} ${middlename} ${lastname}`;

// String Method
let fullname = "elizabeth catherine odei"

fullname.length
fullname.toUpperCase()
fullname.toLowerCase()
fullname.charAt(7)
fullname.slice(10, 22)
fullname.split("")
fullname.replace("odei", "antwi")
fullname.indexOf("catherine")

// string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GHS${amount}`)
amount.toString()


// Write a function that will add a participant to our Google Classroom

// Functions
const participants = [];
function addParticipant(email) {
  // Check if email was provided
  if (!email) {
    return 'No email provided'
  }
  // Check if email is valid
  if (!email.includes('@gmail.com')) {
    return 'Invalid email provided';
  }
  // Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('bettyafuaantwi@yahoo.com');
addParticipant('lizzie@gmail.com');
addParticipant();
addParticipant('bettyafua');
participants;

// // Arrays in JavaScript
// const users = [
//   {
//     username: 'Tilopsiii',
//     password: '1234',
//     email: 'bettyafuaantwi@yahoo.com'
//   },
//    {
//     username: 'Tilopsy',
//     password: '12345',
//     email: 'lizzie@gmail.com'
//   }
// ];

// Write a function that will take a user with  firstname, lastname and return fullname;
function fullName(user) {
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}`
  };
}

const user = {
  firstname: 'Elizabeth',
  lastname: 'Odei'
}
fullName(user);


// Array map
const users = [
  { firstname: 'Elizabeth', lastname: 'Odei' },
  { firstname: 'Abena', lastname: 'Yankey' },
  { firstname: 'Ama', lastname: 'Manu' },
  { firstname: 'Henry', lastname: 'Amponsah' },
  { firstname: 'Philip', lastname: 'Antwi' },

]
// users.map(fullName);

// Square of numbers
function square(number) {
  return number ** 2;
}
square(5);
const numbers = [9, 8, 7, 6];
numbers.map(square);


// Write a function that takes a number. If the number is an even number, it should return "true" if it is an odd number, it should return "false".
function isEven(number) {
  return number % 2 === 0;
}
isEven(6);
numbers.filter(isEven);

// Write a function that will allow a user to reset their password
const user = {
  email: 'bettylizzie25@gmail.com',
  password: 'Lilibet'
}

function resetPassword(email, newPassword) {
  // Check if email and new password was provided
  if (!email || !newPassword) {
    return 'Email or password not provided';
  }

  // Check if provided email is correct
  if (email === user, email) {
    // Update password with new one
    user.password = newPassword;
    return 'Password reset successful';
  }

  if (email !== user.email) {
    return "Invalid email";
  }
}
user;
resetPassword("bettylizzie25@gmail.com", 'Betty')
user;

// Objects in JavaScript


// You have been given an array of students with some of them marked as absent and others marked as present
// Write a function that returns the total number of students present

const students = [
  { id: 1, present: true },
  { id: 2, present: true },
  { id: 3, present: false },
  { id: 4, present: true },
  { id: 5, present: false },
]


function totalStudents() {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].present) {
      total++;
    }
  }
  return total;
}

totalStudents()


// Classes in JavaScript

class Laptop {
  constructor(brand, colour) {
    this.brand = brand;
    this.colour = colour;
  }
}

const Laptop1 = new Laptop("Dell", "Black");
const Laptop2 = new Laptop('HP', 'silver');

Laptop1.brand
Laptop2.brand
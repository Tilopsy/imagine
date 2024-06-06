const btn = document.getElementById('btn');
btn.onclick = function() {
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
        friend: {name: 'Tyler'
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
  for (let i = 0; i <= 5;  i+=1) {
    console.log('We did it!', i);
  }
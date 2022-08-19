//  For even number 0 to 20
 for (let i = 0; i <= 20; i += 2) {
    console.log(i);
} 
// For decrement 100 to 0 by 10 */
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
} 
//  For decreasing 25 to 0 by 5 */
 for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
} 
let maximum = parseInt(prompt("enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = (prompt("the number is too high"));
    } else {
        guess = (prompt("the number is too low"))
    }
}
console.log(`you took ${attempts} guesses`)


let input = prompt("what would you like to do");
const todos = ['brush', 'breakfast'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*******')
    } else if (input === 'new') {
        const newTodo = prompt('new to do?');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`)
    } else if (input === 'delete') {
        const indexStr = prompt('enter index to del');
        const index = parseInt(indexStr);
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(indexStr, 1);
            console.log(`deleted ${deleted[0]}`);
        } else {
            console.log('unknown index')
        }
    }
    input = prompt("what would you like to do")
}
console.log("Quitting")
function printHeart() {
    console.log("<3")
}
printHeart();
function greet(firstName) {
    console.log(`First name is: ${firstName}`)
}
greet('sheraz');
greet('momin');
greet('ahmad');
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());

}
rant('I hate rant')
// Program to figure out if both die are 1//

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("snake eyes")
    } else {
        console.log("No FU")
    }
}
// program to give out ur first plus last name using functions 
function fullName(firstName, lastName) {
     console.log(`Your full name is Mr ${firstName} ${lastName}`)
 }
 fullName('arham', 'khan')
function ShortsWeather(temperature) {
    return temperature >= 75;
 }

function capitalize(word) {
    return word[0].toUpperCasse() + word.slice(1)
}
 function callTwice(func) {
    func();
   func();
}

 function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
const place = 'World';
const greeting = 'Hello'

// console.log is similar to print in python

console.log('%s %s', greeting, place);
console.log(greeting, place);
console.log(`${greeting} ${place}`);

// this s single line comment

/*
this is multiline comment     ctrl + /
*/

// declaring vairable

var a = 10
// This is available before declaring
// can be changed

let b = 10
// block Scoped
// available after declaration

const c = 10
// can not be changed
// similar to let

/* usage
const - as often as possible
let - in loops
var - rarely */

/* strings */
let str1 = 'Hello';
let str2 = 'World';
console.log(str1+' '+str2);

/* warning */
let num1 = '1';
let num2 = 1
console.log(num1+num2)
// will print 11
console.log(num2+1)
// will print 2

/* Data types */
const people = ['boy1', 'boy2', 'boy3'];
const one = new Number(1);
const str = new String("Hello World");
const bol = new Boolean(true);
const person = {
    firstName: "Vignesh",
    lastName: "Allam"
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof bol);
console.log(typeof person);
console.log(typeof sayHello);

console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(bol instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

/* Math Operations */
num1 = 100;
console.log(num1 + 25);
console.log(num1 - 100);
console.log(num1 * 100);
console.log(num1 / 1500);

console.log(num1 % 1500);
console.log(++num1);
console.log(--num1);

console.log(Math.PI);
console.log(Math.sqrt(100));

/* Data conversion */

console.log(parseInt('100'));
console.log(parseInt('150'));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

console.log(parseFloat('1.00'));
console.log(parseFloat('AC'));

console.log(parseInt('1.5'));
console.log(parseInt('1+1'));

console.log(parseInt(`${1+1}`));

console.log(num1.toString());

/* Error Handling */
// throw execption similar to raise in python

function logError(theException) {
    console.log(theException);
}

try {
    throw 'raised error';
} catch (ex) {
    console.log('got an error');
    logError(ex);
} finally {
    console.log('always run this');
}

/* Dates */
// time is a javaScript object
// month starts from 0 for giving in as parameteres

const now = new Date();          // current date
const randomDate = new Date(2015, 3, 12, 6, 25, 58);         // year, month, date, hr, min, sec

now.setFullYear(2014);
now.setMonth(3);        // month starts at 0
now.setDate(4);
now.setHours(4);        // 24 hr clock
now.setMinutes(24);
now.setSeconds(46);

console.log(now);

/* Conditional Statements */
// operators [<, <=, >, >=, ==, ===, !=, !==]
// '42' == 42 --> true; does data conversion
// '42' === 42 --> false; also checks for data type
// variables having empty are false. (ex. if (x) console.log('not empty'))

let status = 200;

if (status === 200) {
    console.log('OK!');
} else if (status === 400) {
    console.log('Error!');
} else {
    console.log('Unkown status');
}

// or if only one line for block in condition
if (status === 200) console.log('OK!');
else if (status === 400) console.log('Error!');
else console.log('Unknown status');

// or Ternary- instant
const message = (status === 200) ? 'OK' : 'ERROR';
console.log(message);

/* combining conditions
and &
or |
shortcut and &&
shortcut or || */

/* Switch */

status = 200;
switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error');
        break
    default:
        console.log('Unknown value');
        break;
}

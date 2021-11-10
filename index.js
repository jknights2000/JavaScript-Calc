console.log('welcome to calculator!');

const readline = require("readline-sync");

console.log('Enter Number 1:');
const reponse1 = readline.prompt();
console.log('Enter Number 2:');
const reponse2 = readline.prompt();

const result = reponse1 * reponse2;

console.log(`${reponse1} x ${reponse2} = ${result}`);



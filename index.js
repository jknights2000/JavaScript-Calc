console.log('welcome to calculator!');

const readline = require("readline-sync");
console.log('operator:');
const op = readline.prompt();
console.log('Enter Number 1:');
const number1 = readline.prompt();
console.log('Enter Number 2:');
const number2 = readline.prompt();
let result = 0;
switch(op){
    case "*":
        result = number1 * number2;
        console.log(`${number1} x ${number2} = ${result}`);
        break;
    case "+":
        result = parseInt(number1) + parseInt(number2);
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    default:
        console.log(`invalid operator`);
        break;
}
/*
if("*" == op){
    const result = number1 * number2;

    console.log(`${number1} x ${number2} = ${result}`);
}else if("+" == op){
    const result = parseInt(number1) + parseInt(number2);

    console.log(`${number1} + ${number2} = ${result}`);
}else if("/" == op){
    const result = number1 / number2;

    console.log(`${number1} / ${number2} = ${result}`);
}else if("-" == op){
    const result = number1 - number2;

    console.log(`${number1} - ${number2} = ${result}`);
}else{
    

    console.log(`invalid operator`);
}
*/



console.log('welcome to calculator!');

const readline = require("readline-sync");
console.log('operator:');
const op = readline.prompt();

console.log(`number of numbers to ${op}:`);
const amount = readline.prompt();
let arr = new Array(amount);

for(let i = 0; i < amount;i++){
    let counter = i + 1;
    console.log(`Enter Number ${counter}:`);
    let number = readline.prompt();
    arr[i] = number;
}

let result = 0;

for(let i = 0; i < amount;i++){

    switch(op){
        case "*":
            if(result==0)
            {
                result = arr[i];
            }else
            {
                result = result * arr[i];
            }
            
            break;
        case "+":
            result = result + parseInt(arr[i]);
            break;
        case "/":
            if(result==0)
            {
                result = arr[i];
            }else
            {
                result = result / arr[i];
            }
            break;
        case "-":
            if(result==0)
            {
                result = arr[i];
            }else
            {
                result = result - arr[i];
            }
            break;
        default:
            console.log(`invalid operator`);
            break;
    }
}
console.log(`Answer = ${result}`);
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



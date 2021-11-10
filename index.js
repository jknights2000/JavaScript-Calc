welcome();
calc();


function welcome(){
    console.log('welcome to calculator!');
    console.log('======================');
    
}


function AskInput(message){
    const readline = require("readline-sync");
    
    do{
        console.log(message);
        const maybeblank = readline.prompt();
        if(maybeblank !== ""){
            return maybeblank;
        }
    } while(true)
}


function AskNum(message){
        let maybenumber = +AskInput(message);
    
        
    while(isNaN(maybenumber)){
        maybenumber = +AskInput(message);
    }
    return maybenumber;
}
function calc(){

const op = AskInput('operator:');
const amount = AskNum(`number of numbers to ${op}:`);
let arr = new Array(amount);

for(let i = 0; i < amount;i++){
    let counter = i + 1;
    let number = AskNum(`Enter Number ${counter}:`);
    arr[i] = +number;
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
            result = result + arr[i];
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




const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
const EXIT_MODE = '3';
welcome();



function welcome(){
    const add = require('./arithmetic');
    const word = require('./vowelCounting');
    console.log('welcome to calculator!');
    console.log('======================');
    
    while (true) {
        const calculationMode = getClacMode();
        if (calculationMode === ARITHMETIC_MODE) {
            add.calc();
        } else if (calculationMode === VOWEL_COUNTING_MODE) {
            word.wordCalc();
        }else if(calculationMode == EXIT_MODE){
            const answer = getExit();
            if(answer === "Y")
            {
                return;
            }
        }else{
            console.error(`${calculationMode} is a Invalid Mode Input`)
        }
    }
}



function getClacMode(){
    const input = require('./userInput');
    return input.AskInput(`\
    ${ARITHMETIC_MODE})Arithmatic 
    ${VOWEL_COUNTING_MODE}) Vowel Counting
    ${EXIT_MODE}) EXIT`)
    }
function getExit()
{
    const input = require('./userInput');
    let answer = "";
  
    while(answer != "Y" && answer != "N"){
    answer = input.AskInput("Exit:y/n");
    answer = answer.toUpperCase();
    }
    return answer;
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



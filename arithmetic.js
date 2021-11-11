exports.calc = function(){
        const input = require('./userInput');
    const op = input.AskInput('operator:');
    const amount = input.AskNum(`number of numbers to ${op}:`);
    let arr = new Array(amount);

    for(let i = 0; i < amount;i++){
        let counter = i + 1;
        let number = input.AskNum(`Enter Number ${counter}:`);
        arr[i] = +number;
    }

    let result = 0;

    

        switch(op){
            case "*":
                    result = arr.reduce(function(accumlator,currentvalue){return accumlator * currentvalue},1);
                break;
            case "+":
                    result = arr.reduce(function(accumlator,currentvalue){return accumlator + currentvalue},0);
                break;
            case "/":
                const noZeros = arr.filter(nums => nums != 0);
                console.log(noZeros);
                result = arr.reduce(function(accumlator,currentvalue){
                    if(accumlator == 0){
                        return currentvalue;
                    }
                return accumlator / currentvalue},0);
                break;
            case "-":
                result = arr.reduce(function(accumlator,currentvalue){
                    if(accumlator == 0){
                        return currentvalue;
                    }
                return accumlator - currentvalue},0);
            default:
                console.log(`invalid operator`);
                break;
        }
    
    console.log(`Answer = ${result}`);
}
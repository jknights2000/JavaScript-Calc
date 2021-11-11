exports.calc = function(){
        const input = require('./userInput');
    const op = input.GetOp();
    const amount = input.AskNum(`number of numbers to ${op}:`);
    let arr = new Array(amount);

    for(let i = 0; i < amount;i++){
        let counter = i + 1;
        let number = input.AskNum(`Enter Number ${counter}:`);
        arr[i] = +number;
    }

    let result = 0;

     result =   doCalc(result,op,arr);
    
    console.log(`Answer = ${result}`);
}
function doCalc(result,op,arr){
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
            throw `invalid operator`;
    }
    return result;
}
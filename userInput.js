exports.AskNum = function(message){
    const input = require('./userInput');
    let maybenumber = +input.AskInput(message);

    
while(isNaN(maybenumber)){
    maybenumber = +input.AskInput(message);
}
return maybenumber;
}

exports.AskInput=function(message){
    const readline = require("readline-sync");
    
    do{
        console.log(message);
        const maybeblank = readline.prompt();
        if(maybeblank !== ""){
            return maybeblank;
        }
    } while(true)
}
exports.GetOp=function(){
    const input = require('./userInput');
    let opinput ="";
    do{
        opinput = input.AskInput('operator:');
    }while(opinput !="*"&&opinput !="/"&&opinput !="-"&&opinput !="+")
    return opinput;
}
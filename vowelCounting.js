exports.wordCalc = function(){
    const input = require('./userInput');
    const string = input.AskInput('Please enter a string:');
    const answer = Vowels(string);

    console.log('The vowel are:');
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
}

function Vowels(string) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of string) {
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar]++;
        }
    }
    return counts;
}
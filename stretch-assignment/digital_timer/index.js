const milliseconds = document.getElementById('msTens');
const millisecondsHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');


let msSecond = 0;
let msSecondHundreds = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;


setInterval(function() {
    msSecond = msSecond + 1
    milliseconds.textContent = msSecond;
    if(msSecond > 8) {
        msSecond = 0;
        msSecondHundreds = msSecondHundreds + 1
        millisecondsHundreds.textContent = msSecondHundreds;
        if(msSecondHundreds > 8) {
            msSecondHundreds = 0;
            secondOnesCounter += 1;
            secondOnes.textContent = secondOnesCounter; 
            if(secondOnesCounter > 8) {
                secondOnesCounter = 0;
                secondTens.textContent = secondTensCounter;
            }
        }
    }
}, 10)


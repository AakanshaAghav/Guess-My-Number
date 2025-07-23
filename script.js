'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);
    
    // When there is no input
    if (!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';

    } else if (guess === secretNumber){ // When Player Wins!
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        highscore++;
        document.querySelector('.highscore').textContent = highscore;

    } else if (guess > secretNumber){ // When guess is too high
        if (score > 1){
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNumber){ // When guess is too low
        if (score > 1){
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    
});

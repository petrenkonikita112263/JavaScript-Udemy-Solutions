"use strict"

/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// global variables
// scores -> [score1, score2] numbers
// roundScore - number from dice
// activePlayer = 0 - 1st Player, and 1 - 2nd Player
// dice - number of the one of sixth dices
// gameStatus - boolean = true - NEW GAME, false - GAME OVER
var scores, roundScore, activePlayer, dice, gameStatus;

init();

function init() {
    scores = [0, 0]
    activePlayer = 0;
    roundScore = 0;
    gameStatus = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// adding roll dice button function - event handler -> callback function
// click - type of event, 2nd parameter - eventListener call btn function not by us - callback
document.querySelector('.btn-roll').addEventListener('click',
    function () {
        if (gameStatus) {
            // 1. Random number
            var dice = Math.floor(Math.random() * 6) + 1;

            // 2. Display the result
            // create the variable that store the dice
            var diceDOM = document.querySelector('.dice')
            // return display dice
            diceDOM.style.display = 'block';
            // change image
            diceDOM.src = 'images/dice-' + dice + ".png";

            // 3. Update the round score IF the rolled number was NOT a 1
            if (dice !== 1) {
                // add score
                roundScore += dice;
                // display the roundScore in UI
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }
    });

function nextPlayer() {
    activePlayer === 0 ? activePlayer++ : activePlayer--;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// hold the number and move current score to global
document.querySelector('.btn-hold').addEventListener('click',
    function () {
        if (gameStatus) {

            // 1. Add current score to global score
            scores[activePlayer] += roundScore;

            // 2. Update the UI
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

            // Set the final score
            var inputScore = document.querySelector('.final-score').value;
            var endScore
            if (!inputScore && !isNaN(inputScore)) {
                endScore = 100;
            } else {
                endScore = inputScore;
            }

            // 3. Check if player won the game
            if (scores[activePlayer] >= endScore) {
                document.getElementById('name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gameStatus = false;
            } else {
                nextPlayer();
            }
        }
    });

// start new game
document.querySelector('.btn-new').addEventListener('click', init);
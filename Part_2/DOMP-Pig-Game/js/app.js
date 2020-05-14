/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// create variables
var scores, roundScore, activePlayer, dice, gameStatus;

init();

// var score1 = 0
// var score2 = 0
// use only one variable
// scores = [0, 0];                            // 0 - 1st score of Player1
// roundScore = 0;
// activePlayer = 0;                           // 0 - 1st PLayer, 1 - 2nd Player

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
    document.getElementById('name-0').textContent= 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

} 

// DOM manupilation
// select number of points from html number 11 using id
// document.querySelector('#current-' + activePlayer).textContent = dice;                    

// let's us select staff like at css - only select the first element that its find
// textContent - change the text in that element
// tracking active player

// we made same thing but using html
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// example of to read the content and store it to variable
// var x = document.querySelector('#score-0').textContent;
// console.log(x)

// select element by id instead using querySelector
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

// // using querySeelctor to change css - image with dice
// document.querySelector('.dice').style.display = 'none';
// use first the style method, then the property display and value none

// adding button function - event handler -> callback function
// select button and andd eventListener
// click - type of event, 2nd parameter - eventListener call btn function not by us - callback
// or add anonymous function
document.querySelector('.btn-roll').addEventListener('click', 
function() {
    if (gameStatus) {
        // 1. Random number
        // random number fron 1 to 6
        // Math.random() * 6 give random number from 0 to 5 in decimal
        // use floor to get integer and + 1 to get numbers from 1 to 6
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
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
            // // switch to next player
            // activePlayer === 0 ? activePlayer++ : activePlayer--;
            // // set the roundScore to 0
            // roundScore = 0;
            // // set current score to 0
            // document.getElementById('current-0').textContent = '0';
            // document.getElementById('current-1').textContent = '0';
            // // display active player in UI remove active class from Player1 to Player2
            // // document.querySelector('.player-0-panel').classList.remove('active');
            // // document.querySelector(".player-1-panel").classList.add('active');
            // // use togle
            // document.querySelector('.player-0-panel').classList.toggle('active');
            // document.querySelector('.player-1-panel').classList.toggle('active');
            // // hide the dice before switch to player
            // document.querySelector('.dice').style.display = 'none';
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

// hold the number and move to global
document.querySelector('.btn-hold').addEventListener('click',
function() {
    if (gameStatus) {
        // 1. Add current score to global score
        scores[activePlayer] += roundScore;

        // 2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Check if player won the game
        if (scores[activePlayer] >= 100) {
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

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// var scores, roundScore, activePlayer, gamePlaying;

// gamePlaying = true;


// init();


// document.querySelector('.btn-roll').addEventListener('click', function () {

//     if (gamePlaying) {

//         // 1. random numner

//         var dice = Math.floor(Math.random() * 6) + 1;


//         // 2. display result


//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';


//         // 3. update round score, only if the rolled number was NOT a 1.

//         if (dice !== 1) {
//             // add score

//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;


//         } else {
//             // next player 

//             nextPlayer();

//         }

//     }




// });

// document.querySelector('.btn-hold').addEventListener('click', function () {

//     if (gamePlaying) {


//         // add current player score to global player score

//         scores[activePlayer] += roundScore;


//         // update UI

//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//         // check if player won the game

//         if (scores[activePlayer] >= 20) {

//             // player wins

//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

//             gamePlaying = false;

//         } else {

//             // next player
//             nextPlayer();

//         }


// }

// })




// function nextPlayer() {

//     // (ternary op.)

//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';


//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';


// };


// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {

//     gamePlaying = true;

//     scores = [0, 0];
//     activePlayer = 0;
//     roundScore = 0;

//     document.querySelector('.dice').style.display = 'none';

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.getElementById('name-0').textContent = 'Player1';
//     document.getElementById('name-1').textContent = 'Player2';

//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');

//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');

//     document.querySelector('.player-0-panel').classList.add('active');

// }



// ! PONIZEJ - TO DZIALA, NIE KASOWAC !!!!:





// var scores, roundScore, activePlayer, gamePlaying;

// gamePlaying = true;


// var previous;


// init();





// var form = document.querySelector('.max-points-form');

// var punktyForm = document.querySelector('.max-points-form');
// var punkty = document.querySelector('#max-points');


// punktyForm.addEventListener('submit', e => {

//     // zapobieganie domyslnej akcji

//     e.preventDefault();
//     console.log('test');
//     console.log(punkty.value);

//     // form.reset();




// });









// document.querySelector('.btn-roll').addEventListener('click', function () {

//     if (gamePlaying) {

//         console.log('test - game playing');

//         // 1. random numner

//         var dice = Math.floor(Math.random() * 6) + 1;


//         // 2. display result


//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';


//         // 3. update round score, only if the rolled number was NOT a 1.

//         if (dice !== 1) {
//             // add score

//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;


//         } else {

//             console.log('test - game NOT playing');
//             // next player 

//             nextPlayer();

//         }

//     }




// });

// document.querySelector('.btn-hold').addEventListener('click', function () {

//     if (gamePlaying) {


//         // add current player score to global player score

//         scores[activePlayer] += roundScore;


//         // update UI

//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//         // check if player won the game

//         if (scores[activePlayer] >= punkty.value) {

//             // player wins

//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

//             gamePlaying = false;

//         } else {

//             // next player
//             nextPlayer();

//         }


//     }

// })




// function nextPlayer() {

//     // (ternary op.)

//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';


//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';


// };


// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {

//     gamePlaying = true;

//     scores = [0, 0];
//     activePlayer = 0;
//     roundScore = 0;

//     document.querySelector('.dice').style.display = 'none';

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.getElementById('name-0').textContent = 'Player1';
//     document.getElementById('name-1').textContent = 'Player2';

//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');

//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');

//     document.querySelector('.player-0-panel').classList.add('active');

// }




// ! EXPERIMENTAL 2



var scores, roundScore, activePlayer, gamePlaying;

gamePlaying = true;


var numbers = [];
var numbers2 = [];
// var current;


init();


// definiowanie do ilu punktów ma być gra


var form = document.querySelector('.max-points-form');

var punktyForm = document.querySelector('.max-points-form');
var punkty = document.querySelector('#max-points');


punktyForm.addEventListener('submit', e => {

    // zapobieganie domyslnej akcji

    e.preventDefault();
    console.log('test');
    console.log(punkty.value);

    // form.reset();




});






//  * turlanie kosci:


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        console.log('test - game playing');

        // 1. random numner

        var dice = Math.floor(Math.random() * 6) + 1;
        console.log('dice: ', dice);

        var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log('dice2: ', dice2);


        // 2. display result


        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        var diceDOM2 = document.querySelector('.dice-2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';




        // 3. update round score, only if the rolled number was NOT a 1.

        if (dice !== 1 && dice2 !== 1) {
            // add score

            roundScore += (dice + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            // ustalanie wartosci zmiennych (array) - zczytywane z kostki

            numbers.push(dice);
            console.log('numbers: ', numbers);

            numbers2.push(dice2);
            console.log('numbers2: ', numbers2);

            // licznik

            var counter = numbers.length;
            var counter2 = numbers2.length;
            // console.log('counter: ', counter);

            // zczytywanie ostatniej i przedostatniej liczby z arraya numbers

            var last = numbers[counter - 1];
            var secondLast = numbers[counter - 2];

            var last2 = numbers2[counter2 - 1];
            var secondLast2 = numbers2[counter2 - 2];

            console.log('last: ', last, 'second last: ', secondLast);
            console.log('last 2: ', last2, 'second last 2: ', secondLast2);




            console.log('scores: ', scores);


            // * warunek - jesli secondLast = 6 i jesli last rowna sie 6 to kasuj wynik globalny:

            // if(secondLast === 6 && last === 6) {
                
            //     console.log('RESET');
            //     scores[activePlayer] = 0;

            //      // update UI

            //     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            //     // przełączanie na następnego gracza:

            //      nextPlayer();
            // };

            // * warunek 2 - jesli wypadną naraz diwe szóstki - kasuj wynik globalny"


            if(dice === 6 && dice2 === 6) {
                
                console.log('RESET');
                scores[activePlayer] = 0;

                 // update UI

                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                // przełączanie na następnego gracza:

                 nextPlayer();
            };


            





        } else {

            console.log('test - game NOT playing');
            // next player 

            nextPlayer();

        }

    }




});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {


        // add current player score to global player score

        scores[activePlayer] += roundScore;


        // update UI

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        console.log('scores-hold: ', scores);

        // check if player won the game

        if (scores[activePlayer] >= punkty.value) {

            // player wins

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        } else {

            // next player
            nextPlayer();

        }


    }

})




function nextPlayer() {

    // (ternary op.)

    numbers = [];
    numbers2 = [];

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';


};


document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    numbers = [];
    numbers2 = [];

    gamePlaying = true;

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}

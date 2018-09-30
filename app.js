var scoresList, roundScore, activePlayer, dice;

scoresList   = [0, 0];
roundScore   = 0;
activePlayer = 0;
dice         = Math.floor(Math.random() * 6) + 1; // Generate number between 1 & 6

document.querySelector('.dice').style.display                  = 'none'; // Hide dice img when load the page for first time
document.querySelector('#current-' + activePlayer).textContent = dice;

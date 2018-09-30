var scoresList, roundScore, activePlayer, effectiveCells;

scoresList   = [0, 0];
roundScore   = 0;
activePlayer = 0;

effectiveCells = ['current-0', 'current-1', 'score-0', 'score-1'];
setEffectiveCellsToZero();
hideDice();

document.querySelector('.btn-roll').addEventListener('click', rollDice);


function setEffectiveCellsToZero() {
  for(counter = 0; counter < effectiveCells.length; counter ++){
    document.getElementById(effectiveCells[counter]).textContent = 0;
  }
}

function rollDice() {
  var dice, diceDom;

  dice                  = Math.floor(Math.random() * 6) + 1; // Generate number between 1 & 6
  diceDom               = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src           = 'images/dice-' + dice + '.png';

  dice !== 1 ? addCurrentPlayerScore(dice) : changeCurrentPlayer();
}

function addCurrentPlayerScore(dice) {
  roundScore += dice;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
}

function changeCurrentPlayer() {
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore   = 0;
  document.querySelectorAll('#current-0, #current-1').textContent = 0;
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
  hideDice();
}

function hideDice() {
  document.querySelector('.dice').style.display = 'none';
}

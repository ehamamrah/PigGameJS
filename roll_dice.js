var scoresList, roundScore, activePlayer, effectiveCells;

scoresList   = [0, 0];
roundScore   = 0;
activePlayer = 0;
winningValue = 100;

effectiveCells = ['current-0', 'current-1', 'score-0', 'score-1'];

setEffectiveCellsToZero();
hideDice();

document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', holdResults);

// Rolling Dice Functions
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

// Holding Results
function holdResults(){
  scoresList[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scoresList[activePlayer];

  (scoresList[activePlayer] >= winningValue) ? setWinnerResult() : changeCurrentPlayer();
}

function setWinnerResult() {
  document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
  hideDice();
  controlPlayerPanel(false, true);
}
// Shareable Functions
function changeCurrentPlayer() {
  controlPlayerPanel(false, false);
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore   = 0;
  document.querySelectorAll('#current-0, #current-1').textContent = 0;
  controlPlayerPanel(true, false);
  hideDice();
}

function controlPlayerPanel(active, winner) {
  active_player_panel = document.querySelector('.player-' + activePlayer + '-panel').classList;
  active ? active_player_panel.add('active') : active_player_panel.remove('active');
  winner ? active_player_panel.add('winner') : '';
}

function setEffectiveCellsToZero() {
  for(counter = 0; counter < effectiveCells.length; counter ++){
    document.getElementById(effectiveCells[counter]).textContent = 0;
  }
}

function hideDice() {
  document.querySelector('.dice').style.display = 'none';
}

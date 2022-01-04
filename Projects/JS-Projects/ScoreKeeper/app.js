
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Score')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Score')
}

const resetButton = document.querySelector('#reset');
const scoreChoice = document.querySelector('#winningScore');

let winningScore = 3;

scoreChoice.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
})

function updateScores(player, opponent) {
  if (GameNotOver) {
    player.score++;
    if (player.score === winningScore) {
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function() {
  updateScores(p1, p2);
})

p2.button.addEventListener('click', function() {
  updateScores(p2, p1);
})

resetButton.addEventListener('click', reset)

function GameNotOver() {
  return p1.score !== winningScore && p2.score !== winningScore;
}

function reset() {
  p1.score = 0;
  p2.score = 0;

  p1.display.textContent = 0;
  p2.display.textContent = 0;

  p1.display.classList.remove('has-text-success', 'has-text-danger');
  p2.display.classList.remove('has-text-success', 'has-text-danger');

  p1.button.disabled = false;
  p2.button.disabled = false;
}
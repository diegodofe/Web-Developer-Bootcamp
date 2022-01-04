const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');

const scoreChoice = document.querySelector('#winningScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

scoreChoice.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
})

p1Button.addEventListener('click', function() {
  if (GameNotOver()) {
    p1Score++;
    p1Display.textContent = p1Score;
  }
})

p2Button.addEventListener('click', function() {
  if (GameNotOver()) {
    p2Score++;
    p2Display.textContent = p2Score;
  }
})

resetButton.addEventListener('click', reset)

function GameNotOver() {
  return p1Score !== winningScore && p2Score !== winningScore;
}

function reset() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
}
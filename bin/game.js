function createRandomCode() {
  let masterColors = [];

  for (i = 0; i < 4; i++) {
    let codePeg = document.createElement('div');
    let hiddenCode = document.createElement('p');
    let pegObject = new Peg(codePeg);

    let pegColor = pegObject.randomColor();
    masterColors.push(pegColor);

    hiddenCode.textContent = '?';
    codePeg.classList.add('master-code-peg');

    codePeg.appendChild(hiddenCode);
    masterCodeContainer.appendChild(codePeg);
  }

  return masterColors;
}

function enableRow() {
  let previousRow = document.querySelector(`#pegs-row-${currentRowIndex - 1}`);
  let currentRow = document.querySelector(`#pegs-row-${currentRowIndex}`);

  if (previousRow) {
    previousRow.classList.add('disabled');
    previousRow.disabled = true;
  }
  if (currentRow) {
    currentRow.classList.remove('disabled');
    currentRow.disabled = false;
  }
}

function isGameWon(clues) {
  return clues.length == 4 && clues.every(color => color === 'red');
}

function calculateClues() {
  let currentRow = document.querySelector(`#pegs-row-${currentRowIndex}`);
  let guessedColors = [...currentRow.children].map(peg => peg.style.backgroundColor);

  let answerKey = [...masterCode];
  let clues = [];

  guessedColors.forEach((color, index) => {
    if (color == answerKey[index]) {
      clues.push('red');
      delete answerKey[index];
      delete guessedColors[index];
    }
  });

  if (isGameWon(clues)) {
    window.alert('You win!!!!');
  }
  else {
    guessedColors.forEach((color, index) => {
      if (answerKey.includes(color)) {
        clues.push('green');
        delete answerKey[answerKey.indexOf(color)];
      }
    });
  }

  return clues;
}

function giveClues(clues) {
  let currentClues = document.querySelector(`#clues-row-${currentRowIndex}`);

  [...currentClues.children].forEach((clue, index) => {
    clue.style.backgroundColor = clues[index];
  });
}

function endGame(clues) {
  if (currentRowIndex == 11 || isGameWon(clues)) {
    [...masterCodeContainer.children].forEach((peg, index) => {
      peg.style.backgroundColor = masterCode[index];
      peg.removeChild(peg.firstChild);
    });

  }
  if (currentRowIndex == 11) {
    window.alert('Game over! You lose');
  }
}

const masterCodeContainer = document.querySelector('#master-code-container');
const makeGuess = document.querySelector('#make-guess');
let masterCode = createRandomCode();

let currentRowIndex = 1;

new Board().createRows();
enableRow();

makeGuess.addEventListener('click', () => {
  clues = calculateClues();
  giveClues(clues);
  currentRowIndex++;
  enableRow();

  endGame(clues);
});

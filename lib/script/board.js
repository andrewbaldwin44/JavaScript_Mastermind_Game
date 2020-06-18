class Board {
  constructor() {
    this.board = document.querySelector('#board');
  }

  createRows() {
    for (let r = 10; r > 0; r--) {
      let row = document.createElement('div');
      row.classList.add("row");

      let pegs = this.createPegs();
      let clues = this.createClues();

      pegs.setAttribute('id', `pegs-row-${r}`);
      clues.setAttribute('id', `clues-row-${r}`);

      pegs.disabled = true;

      row.appendChild(pegs);
      row.appendChild(clues);
      this.board.appendChild(row);
    }
  }

  createPegs() {
    let pegsContainer = document.createElement('div');
    pegsContainer.classList.add('pegs-container');

    for (let p = 0; p < 4; p++) {
      let peg = document.createElement('div');
      peg.classList.add("peg");
      peg.style.backgroundColor = 'white';

      let pegObject = new Peg(peg).cycleColors();

      pegsContainer.appendChild(peg);
    }

    return pegsContainer;
  }

  createClues() {
    let cluesContainer = document.createElement('div');
    cluesContainer.classList.add('clues-container');

    for (let c = 0; c < 4; c++) {
      let clue = document.createElement('div');
      clue.classList.add("clue");

      cluesContainer.appendChild(clue);
    }

    return cluesContainer;
  }
}

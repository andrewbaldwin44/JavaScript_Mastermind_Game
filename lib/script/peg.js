class Peg {
  constructor(peg) {
    this.peg = peg;
    this.colors = ['white', 'red', 'green', 'blue', 'yellow', 'brown'];
    this.currentColorValue = 1;
  }

  cycleColors() {
    this.peg.addEventListener('click', () => {
      if (!this.peg.parentNode.disabled) {
        this.peg.style.backgroundColor = this.color();
        this.currentColorValue++;
        if (this.currentColorValue == this.colors.length) this.currentColorValue = 0;
      }
    });
  }

  randomColor() {
    this.currentColorValue = Math.floor(Math.random() * this.colors.length);
    return this.color();
  }

  color() {
    return this.colors[this.currentColorValue];
  }
}

openInstructions = document.querySelector('#open-instructions');
instructionsOverlay = document.querySelector('#instructions-overlay');
closeInstructions = document.querySelector('#close-instructions');

openInstructions.addEventListener('click', () => {
  instructionsOverlay.style.display = 'flex';
});

closeInstructions.addEventListener('click', () => {
  instructionsOverlay.style.display = 'none';
})

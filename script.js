function computerPlay() {
   let computerChoice = Math.floor(Math.random() * 3);
   return (computerChoice === 0) ? 'Rock' :
      (computerChoice === 1) ? 'Paper' : 'Scissors';
}

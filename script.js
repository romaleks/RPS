function computerPlay() {
   let computerChoice = Math.floor(Math.random() * 3);
   return (computerChoice === 0) ? 'rock' :
      (computerChoice === 1) ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() === 'rock') {
      if (computerSelection === 'rock') return 'Tie! Computer showed the same symbol';
      else if (computerSelection === 'paper') return 'You lost! Rock doesn\'t beat Paper';
      else return 'You won! Rock beats Scissors'
   } else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'paper') return 'Tie! Computer showed the same symbol';
      else if (computerSelection === 'scissors') return 'You lost! Paper doesn\'t beat Scissors';
      else return 'You won! Paper beats Rock'
   } else {
      if (computerSelection === 'scissors') return 'Tie! Computer showed the same symbol';
      else if (computerSelection === 'rock') return 'You lost! Scissors don\'t beat Rock';
      else return 'You won! Scissors beat Paper'
   } 
}
function computerPlay() {
   let computerChoice = Math.floor(Math.random() * 3);
   return (computerChoice === 0) ? 'Rock' :
      (computerChoice === 1) ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() === 'rock') {
      if (computerSelection === 'Rock') return 'Tie! Computer showed the same symbol';
      else if (computerSelection === 'Paper') return 'You lost! Rock doesn\'t beat Paper';
      else return 'You won! Rock beats Scissors'
   } else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'Paper') return 'Tie! Computer showed the same symbol';
      else if (computerSelection === 'Scissors') return 'You lost! Paper doesn\'t beat Scissors';
      else return 'You won! Paper beats Rock'
   } else {
      if (computerSelection === 'Scissors') return 'Tie! Computer showed the same symbol';
      else if (computerSelection === 'Rock') return 'You lost! Scissors don\'t beat Rock';
      else return 'You won! Scissors beat Paper'
   } 
}

function game() {

   let playerScore = 0, computerScore = 0;

   for (let i = 0; i < 5; i++) {
      playerSelection = prompt('Choose one Symbol (Rock, Paper, Scissors)', '');
      while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
         playerSelection = prompt('Please, choose one Symbol only from this list (Rock, Paper, Scissors)', '');
      }
      computerSelection = computerPlay();
      let round = playRound(playerSelection, computerSelection);
      if (round.includes('You won')) playerScore++;
      if (round.includes('You lost')) computerScore++;
      alert(`You choose "${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}"\nComputer choose "${computerSelection}"\n${round}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
   }

   if (playerScore > computerScore) alert('Congratulations! You defeated Computer');
   else if (playerScore < computerScore) alert('Sorry( Computer was stronger');
   else alert('Tie! Friendship won!');
}
game()
const buttons = document.querySelectorAll('.content__item');

const personImage = document.querySelector('#person');
const computerImage = document.querySelector('#computer');

const title = document.querySelector('.result__title');
const subtitle = document.querySelector('.result__subtitle');
function game() {
   buttons.forEach((button) => button.addEventListener('click', function() {
      const personSelection = button.getAttribute('id');
      const computerSelection = computerPlay();
      personImage.innerHTML =
      `<img src="img/${personSelection}.png" alt="${personSelection}" height="50">`; //Display person's selection image
      computerImage.innerHTML =
      `<img src="img/${computerSelection}.png" alt="${computerSelection}" height="50">`; //Display computer's selection image

      let round = playRound(personSelection, computerSelection);
      title.textContent = round[0];
      subtitle.textContent = round[1];
   }));
}

game();

function computerPlay() {
   let computerChoice = Math.floor(Math.random() * 3);
   return (computerChoice === 0) ? 'rock' :
      (computerChoice === 1) ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === 'rock') {
      if (computerSelection === 'rock') return ['Tie!', 'Computer showed the same symbol'];
      else if (computerSelection === 'paper') return ['You lost!', 'Rock doesn\'t beat Paper'];
      else return ['You won!', 'Rock beats Scissors'];
   } else if (playerSelection === 'paper') {
      if (computerSelection === 'paper') return ['Tie!', 'Computer showed the same symbol'];
      else if (computerSelection === 'scissors') return ['You lost!', 'Paper doesn\'t beat Scissors'];
      else return ['You won!', 'Paper beats Rock'];
   } else {
      if (computerSelection === 'scissors') return ['Tie!', 'Computer showed the same symbol'];
      else if (computerSelection === 'rock') return ['You lost!', 'Scissors don\'t beat Rock'];
      else return ['You won!', 'Scissors beat Paper'];
   } 
}


// function game() {

//    let playerScore = 0, computerScore = 0;

//    for (let i = 0; i < 5; i++) {
//       playerSelection = prompt('Choose one Symbol (Rock, Paper, Scissors)', '');
//       while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
//          playerSelection = prompt('Please, choose one Symbol only from this list (Rock, Paper, Scissors)', '');
//       }
//       computerSelection = computerPlay();
//       let round = playRound(playerSelection, computerSelection);
//       if (round.includes('You won')) playerScore++;
//       if (round.includes('You lost')) computerScore++;
//       alert(`You choose "${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}"\nComputer choose "${computerSelection}"\n${round}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
//    }

//    if (playerScore > computerScore) alert('Congratulations! You defeated Computer');
//    else if (playerScore < computerScore) alert('Sorry( Computer was stronger');
//    else alert('Tie! Friendship won!');
// }
// game()
const userName = document.querySelector('.player__name');
userName.textContent = prompt('Please, enter your name', '')

const buttons = document.querySelectorAll('.content__item');

const personImage = document.querySelector('#person');
const computerImage = document.querySelector('#computer');

const title = document.querySelector('.result__title');
const subtitle = document.querySelector('.result__subtitle');
const personDisplayedScore = document.querySelector('#person-score');
const computerDisplayedScore = document.querySelector('#computer-score');

let personScore = 0, computerScore = 0;

buttons.forEach((button) => button.addEventListener('click', function() {
   if (personScore == 5 || computerScore == 5) return;

   const personSelection = button.getAttribute('id');
   const computerSelection = computerPlay();
   personImage.innerHTML =
   `<img src="img/${personSelection}.png" alt="${personSelection}" height="50">`; //Display person's selection image
   computerImage.innerHTML =
   `<img src="img/${computerSelection}.png" alt="${computerSelection}" height="50">`; //Display computer's selection image

   let round = playRound(personSelection, computerSelection);
   title.textContent = round[0];
   subtitle.textContent = round[1];

   if (round[0] == 'You won!') personScore++;
   if (round[0] == 'You lost!') computerScore++;

   personDisplayedScore.textContent = personScore;
   computerDisplayedScore.textContent = computerScore;

   if (personScore == 5) {
      title.textContent = 'Congratulations!!!';
      subtitle.textContent = 'You defeated Computer';
   } else if (computerScore == 5) {
      title.textContent = 'Sorry(';
      subtitle.textContent = 'Computer was stronger';
   }
}));

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
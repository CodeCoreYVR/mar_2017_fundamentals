let guess;

while(true) {
  guess = parseInt(prompt('What is the lucky number?'));
  if (guess === 9) {
    alert('Good guess!');
    break;
  } else {
    alert('Sorry! Guess again.');
  }
}

// remember that `prompt` will always give you a string even if the user enters
// numbers. You will have to parse the output to a number if you need to compare
// it or such.
const luckyNumber = parseInt(prompt('What is your lucky number?'));

console.log(luckyNumber);

// if is a statement that takes an expression. Ideally the expression will
// return `true` or `false`. If it's `true` then the block of code within
// `if` will be executed. Otherwise, it will check other conditions inside
// `else if` or `else`. You must have one `if` you can optianlly have at most
// one `else` and you can have as many `else if` as you like.
if(luckyNumber === 10) {
  alert('Awesome!');
} else if(luckyNumber > 8) {
  alert('Almost Awesome!');
} else {
  alert('Not awesome!');
}

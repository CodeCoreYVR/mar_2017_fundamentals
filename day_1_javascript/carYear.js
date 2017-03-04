const carYear = parseInt(prompt('What year is your car?'));

if(isNaN(carYear)) {
  console.log('Please enter a proper value');
} else if(carYear >= 2017) {
  console.log('Future Car');
} else if(carYear > 2010) {
  console.log('New Car');
} else if(carYear > 2000) {
  console.log('Old car');
} else {
  console.log('Very Old');
}

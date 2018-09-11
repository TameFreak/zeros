module.exports = function getZerosCount(number) {
  let counter = 0;

  for (let i = 5; i <= number; i += 5){
    let elem = i;
    while(elem % 5 === 0){
      counter++;
      elem = elem / 5;
    }
  }

  return counter;
}

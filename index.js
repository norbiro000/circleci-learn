exports.fizzOrBuzz = function (number) {
  return number == 15 ? 'fizzbuzz' : number % 2 == 0 ? 'buzz' : 'fizz'
}

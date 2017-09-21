module.exports = function zeros(expression) {
  var factorials = expression.split('*'),
      numbers = [],
      fives = 0,
      twos = 0;

  factorials = factorials.map(function(elem) {
    return elem.slice(0, -1);
  });
  
  for(var i = 0; i < factorials.length; i++) {
    var elem = factorials[i];
    if ( elem.endsWith('!') ) {
      elem = elem.slice(0, -1);
      for (var j = 0; j < elem/2; j++) {
        numbers.push(elem - j*2);
      }
    } else {
      for (var j = 0; j < elem; j++) {
        numbers.push(elem - j);
      }
    }
  }

  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];  
    if ( num % 5 == 0 ) {
      while (num % 5 == 0) {
          num /= 5;
          ++fives;
      }
    }
    if ( num % 2 == 0 ) {
      while (num % 2 == 0) {
          num /= 2;
          ++twos;
      }
    }
  }
  
  return (fives > twos) ? twos : fives;
}
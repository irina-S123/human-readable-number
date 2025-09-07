function toReadable(number) {
  const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number === 0) return 'zero';

  function helper(n) {
    let result = '';

    if (n < 20) {
      result = ones[n];
    } else if (n < 100) {
      result = tens[Math.floor(n / 10)];
      if (n % 10) result += ' ' + ones[n % 10];
    } else if (n < 1000) {
      result = ones[Math.floor(n / 100)] + ' hundred';
      if (n % 100) result += ' ' + helper(n % 100);
    }
    return result;
  }

  return helper(number);
}
console.log(toReadable(1));        

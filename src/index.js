function toReadable(number) {
  const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];
  const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number === 0) return 'zero';

  let words = '';

  if (Math.floor(number / 100) > 0) {
    words += ones[Math.floor(number / 100)] + ' hundred';
    number %= 100;
    if (number > 0) words += ' ';
  }

  if (number >= 10 && number < 20) {
    words += teens[number - 10];
  } else {
    if (Math.floor(number / 10) > 1) {
      words += tens[Math.floor(number / 10)];
      number %= 10;
      if (number > 0) words += ' ' + ones[number];
    } else if (number > 0) {
      words += ones[number];
    }
  }

  return words;
}

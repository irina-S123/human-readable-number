function toReadable(number) {
  const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];
  const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number === 0) {
    return 'zero';
  }

  let words = '';

  const hundredsDigit = Math.floor(number / 100);
  const remainder = number % 100;

  if (hundredsDigit > 0) {
    words += ones[hundredsDigit] + ' hundred';
    if (remainder > 0) {
      words += ' ';
    }
  }

  if (remainder >= 10 && remainder < 20) {
    words += teens[remainder - 10];
  } else {
    const tensDigit = Math.floor(remainder / 10);
    const onesDigit = remainder % 10;

    if (tensDigit > 1) {
      words += tens[tensDigit];
      if (onesDigit > 0) {
        words += ' ' + ones[onesDigit];
      }
    } else if (onesDigit > 0) {
      words += ones[onesDigit];
    }
  }

  return words;
}

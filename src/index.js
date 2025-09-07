function numberToReadableString(num) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousands = ["", "thousand", "million", "billion"];

  if (num === 0) return "zero";

  let words = [];
  let i = 0;

  while (num > 0) {
    let chunk = num % 1000;
    if (chunk) {
      let chunkWords = [];
      let hundreds = Math.floor(chunk / 100);
      let remainder = chunk % 100;

      if (hundreds) {
        chunkWords.push(ones[hundreds], "hundred");
      }

      if (remainder) {
        if (remainder < 10) {
          chunkWords.push(ones[remainder]);
        } else if (remainder > 10 && remainder < 20) {
          chunkWords.push(teens[remainder - 10]);
        } else {
          chunkWords.push(tens[Math.floor(remainder / 10)]);
          if (remainder % 10) {
            chunkWords.push(ones[remainder % 10]);
          }
        }
      }

      if (thousands[i]) {
        chunkWords.push(thousands[i]);
      }

      words.unshift(chunkWords.join(" "));
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return words.join(" ");
}

// Example usage:
console.log(numberToReadableString(123456789));

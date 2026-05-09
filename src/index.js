const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let decodedString = '';

  for (let i = 0; i < expr.length; i += 10) {
    const chunk = expr.slice(i, i + 10);

    if (chunk === '**********') {
      decodedString += ' ';
    } else {
      // Весь код обработки буквы теперь внутри else
      let morseLetter = '';
      for (let j = 0; j < chunk.length; j += 2) {
        const pair = chunk.slice(j, j + 2);
        if (pair === '10') {
          morseLetter += '.';
        } else if (pair === '11') {
          morseLetter += '-';
        }
      }

      if (MORSE_TABLE[morseLetter]) {
        decodedString += MORSE_TABLE[morseLetter];
      }
    }
  }

  return decodedString;
};

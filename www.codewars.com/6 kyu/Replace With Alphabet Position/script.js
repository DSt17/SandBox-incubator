function alphabetPosition(text) {
  let str = '';
  text = text.toLowerCase();
  let arr_en = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (let i = 0; i < text.length; i++) {
    if (arr_en.indexOf(text[i]) < 0) {
      continue;
    } else {
      str += arr_en.indexOf(text[i]) + 1 + ' ';
    }
  }
  return str.trim();
}

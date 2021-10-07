function squareDigits(num) {
  let rrr = num.toString();
  let str = '';

  for (let i = 0; i < rrr.length; i++) {
    let numb = parseInt(rrr[i]);
    let val = Math.pow(numb, 2);
    str += val.toString();
  }
  return Number(str);
}

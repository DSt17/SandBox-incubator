function nbYear(p0, percent, aug, p) {
  let n = 1;
  let population = p0 + p0 * (percent / 100) + aug;
  while (population < p) {
    population = population + population * (percent / 100) + aug;
    n++;
  }
  return n;
}

function power(base, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= base;
  }

  return result;
}

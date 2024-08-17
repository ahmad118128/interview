function oddnumber(myNumber) {
  if (typeof myNumber === 'string') {
    myNumber = Number(myNumber);
  }

  if (myNumber % 2 === 0) {
    return 'the number that you enter is odd';
  }
  return 'the number that you enter is not odd';
}

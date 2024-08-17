function averageNumber([...args]) {
  const sumNumbers = args.reduce((a, b) => a + b, 0);
  return sumNumbers / args.length;
}

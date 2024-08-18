export default function SumArray(Arr) {
  let sum = 0;
  if (Array.isArray(Arr)) {
    for (let x of Arr) {
      sum += x;
    }
  }
  return sum;
}

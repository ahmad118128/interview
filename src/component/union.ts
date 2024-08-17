type unionType = 'string' | 'number';
const a = 5;
const b = '5';
function add(a: number, b: string) {
  return a + b;
}
add(5, '25');

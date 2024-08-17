type unionType = string | number;

export function Union(a: number, b: number): unionType {
  a = 1;
  b = 2;
  return a + b;
}

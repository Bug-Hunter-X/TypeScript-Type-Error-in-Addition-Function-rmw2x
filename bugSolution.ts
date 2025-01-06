function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string') {
    a = parseFloat(a);
  }
  if (typeof b === 'string') {
    b = parseFloat(b);
  }
  return a + b;
}

let result1 = addSafe("1", 2); // Works correctly, converts string to number
let result2 = addSafe(1, 2); // Works correctly
let result3 = add(1,2); // Works correctly
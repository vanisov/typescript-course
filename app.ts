function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void { // void means that this function doesnt return anything
  console.log('Result: ' + num);
}


printResult(add(5, 12));
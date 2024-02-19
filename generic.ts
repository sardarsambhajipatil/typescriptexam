// Create a generic function that takes 2 arguments from a generic type and return the summation of this 2 arguments

function sum<T extends number>(a: T, b: T): number {
  return a+b;
}

console.log(sum(1, 2));
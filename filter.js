const numbers = [12, 24, 56, 34, 2, 567, 2, 6, 88, 3, 5, 7, 754]

const par = number => number % 2 === 0;

const parNumber = numbers.filter(par);

console.log(`Array com números pares: ${parNumber}`)
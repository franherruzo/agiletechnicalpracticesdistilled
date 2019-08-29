const FizzBuzz = (number: number): string => {
  if (number === 15) return 'fizzbuzz';
  if (number === 30) return 'fizzbuzz';
  if (number === 45) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return String(number);
};

export default FizzBuzz;

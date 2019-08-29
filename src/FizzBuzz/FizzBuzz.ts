const FizzBuzz = (number: number): string => {
  if (number % 3 === 0) return 'fizz';
  if (number === 5) return 'buzz';
  return String(number);
};

export default FizzBuzz;

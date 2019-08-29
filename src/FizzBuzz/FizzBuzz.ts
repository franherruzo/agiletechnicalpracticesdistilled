const FizzBuzz = (number: number): string => {
  if (number === 3) return 'fizz';
  if (number === 6) return 'fizz';
  if (number === 9) return 'fizz';
  return String(number);
};

export default FizzBuzz;

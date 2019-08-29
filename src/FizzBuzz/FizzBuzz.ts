const FizzBuzz = (number: number): string => {
  if (number % 3 === 0) return 'fizz';
  return String(number);
};

export default FizzBuzz;

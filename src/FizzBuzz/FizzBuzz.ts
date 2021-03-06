const FizzBuzz = (number: number): string => {
  if (number < 1) throw new Error('Number should be bigger than 0');
  if (number > 100) throw new Error('Number should be lower than 101');
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return String(number);
};

export default FizzBuzz;

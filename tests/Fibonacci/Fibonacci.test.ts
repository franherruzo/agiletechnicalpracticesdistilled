import Fibonacci from '../../src/Fibonacci/Fibonacci';

describe('Fibonacci', () => {
  it('return the next number(1) in the fibonacci sequence for the 1st, 2nd and 3rd position', () => {
    expect(Fibonacci(0)).toBe(1);
    expect(Fibonacci(1)).toBe(1);
    expect(Fibonacci(2)).toBe(1);
  });
  it('return the next number in the fibonacci sequence for any position correctly', () => {
    expect(Fibonacci(3)).toBe(2);
    expect(Fibonacci(4)).toBe(3);
    expect(Fibonacci(5)).toBe(5);
  });
});

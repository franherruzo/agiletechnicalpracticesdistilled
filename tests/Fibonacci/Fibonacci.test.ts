import Fibonacci from '../../src/Fibonacci/Fibonacci';

describe('Fibonacci', () => {
  it('return the next number(1) in the fibonacci sequence for the 1st, 2nd and 3rd position', () => {
    expect(Fibonacci(0)).toBe(1);
    expect(Fibonacci(1)).toBe(1);
    expect(Fibonacci(2)).toBe(1);
  });
});

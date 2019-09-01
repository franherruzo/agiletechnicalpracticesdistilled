import Fibonacci from '../../src/Fibonacci/Fibonacci';

describe('Fibonacci', () => {
  it('return the next number(1) in the fibonacci sequence for the first position', () => {
    expect(Fibonacci(0)).toBe(1);
  });
});

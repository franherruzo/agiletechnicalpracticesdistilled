import FizzBuzz from '../../src/FizzBuzz/FizzBuzz';

describe('FizzBuzz', () => {
  it('should returns 1 when I fizzbuzz 1', () => {
    expect(FizzBuzz(1)).toBe('1');
  });
  it('should returns 2 when I fizzbuzz 2', () => {
    expect(FizzBuzz(2)).toBe('2');
  });
  it('should returns 4 when I fizzbuzz 4', () => {
    expect(FizzBuzz(4)).toBe('4');
  });
  it('should returns fizz when I fizzbuzz 3', () => {
    expect(FizzBuzz(3)).toBe('fizz');
  });
  it('should returns fizz when I fizzbuzz 6', () => {
    expect(FizzBuzz(6)).toBe('fizz');
  });
  it('should returns fizz when I fizzbuzz 9', () => {
    expect(FizzBuzz(9)).toBe('fizz');
  });
  it('should returns fizz when I fizzbuzz 9', () => {
    expect(FizzBuzz(9)).toBe('fizz');
  });
});

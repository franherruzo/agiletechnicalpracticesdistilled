import LeapYear from '../../src/LeapYear/LeapYear';

describe('Leap Year', () => {
  it('check if is a typical leap year', () => {
    expect(LeapYear(1996)).toBe(true);
  });
});

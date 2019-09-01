import LeapYear from '../../src/LeapYear/LeapYear';

describe('Leap Year', () => {
  it('check if 1996 a typical leap year', () => {
    expect(LeapYear(1996)).toBe(true);
  });
  it('check if 2001 a typical common year', () => {
    expect(LeapYear(2001)).toBe(false);
  });
});

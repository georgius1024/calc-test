import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  it('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
  test.each`
    a      | op     | b      | expected
    ${2}   | ${'*'} | ${2}   | ${4}
    ${2}   | ${'+'} | ${2}   | ${4}
    ${2}   | ${'-'} | ${2}   | ${0}
    ${2}   | ${'/'} | ${2}   | ${1}
    ${2}   | ${'&'} | ${2}   | ${'error'}
    ${2}   | ${'+'} | ${'b'}   | ${'error'}
    ${'a'}   | ${'-'} | ${2}   | ${'error'}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});

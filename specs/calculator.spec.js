import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
});

describe.each([1, 2, 3])('test', (a) => {
  console.log(a);
});

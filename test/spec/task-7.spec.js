import task from '../../src/task-7.js';

const getPolynomial = task;

describe('Task 7: Polynomials', () => {
  describe('boundary cases', () => {
    it('should return zero for for no coefficients',
      () => expect(getPolynomial()).toBe('0'));

    it('should return just a number for one coef',
      () => expect(getPolynomial(1.5)).toBe('1.5'));

    it('should return just a negative number for one negative coef',
      () => expect(getPolynomial(-1.5)).toBe('-1.5'));
  });

  describe('should omit zero coefficients', () => {
    it('const', () => expect(getPolynomial(0, 0, 0, 0, 0, 100)).toBe('100'));

    it('x', () => expect(getPolynomial(0, 1, 0)).toBe('x'));

    it('x-square', () => expect(getPolynomial(1, 0, 0)).toBe('x^2'));

    it('zero coef in the middle', () => expect(getPolynomial(1, 0, 0, 1)).toBe('x^3+1'));
  });

  it('should correctly handle negative coef at highest power of x',
    () => expect(getPolynomial(-8, 21, -20, 11, 47, 12)).toBe('-8*x^5+21*x^4-20*x^3+11*x^2+47*x+12'));

  it('simple linear poly',
    () => expect(getPolynomial(-2, 3)).toBe('-2*x+3'));

  it('Freakingly long polynomial',
    () => expect(
      getPolynomial(29.2, 0, -1.2, 6.6, -0.2, -5.6, -7.4, -2.2, 3.8, 19.6, 34, 15.2, 21.6, 16, 11, 26.8, 21.6, 31.2, 11, 28.4)).toBe(
      '29.2*x^19-1.2*x^17+6.6*x^16-0.2*x^15-5.6*x^14-7.4*x^13-2.2*x^12+3.8*x^11+19.6*x^10+34*x^9+15.2*x^8+21.6*x^7+16*x^6+11*x^5+26.8*x^4+21.6*x^3+31.2*x^2+11*x+28.4'));

});

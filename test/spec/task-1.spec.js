import task from '../../src/task-1.js';

const sum = task;

describe('Task 1: Summation Machine', () => {
  it('should return zero for zero value',
    () => expect(sum(0)).toBe(0));

  it('should return zero for zero values',
    () => expect(sum(0, 0, 0, 0)).toBe(0));

  it('Boring case',
    () => expect(sum(1, 2, 3, 4)).toBe(10));

  it('Boring case #2',
    () => expect(sum(5, -5, 5, -5, 5, -5, 5, -5)).toBe(0));
});

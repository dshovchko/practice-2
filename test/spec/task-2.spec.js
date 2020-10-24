import task from '../../src/task-2.js';

const createCounter = task;

describe('Task 2: Counter Factory', () => {
  it('should return a function',
    () => expect(createCounter(0)).toBeFunction());

  it('should return a correct counter', () => {
    const counter = createCounter(5);

    expect(counter()).toBe(0);
    expect(counter()).toBe(5);
    expect(counter()).toBe(10);
    expect(counter()).toBe(15);
  });

  it('counter should always return zero for zero-counter', () => {
    const counter = createCounter(0);

    expect(counter()).toBe(0);
    expect(counter()).toBe(0);
    expect(counter()).toBe(0);
    expect(counter()).toBe(0);
  });

  it('should create independent counters', () => {
    const counter3 = createCounter(3),
      counter2 = createCounter(-2);

    expect(counter3()).toBe(0);
    expect(counter2()).toBe(0);
    expect(counter3()).toBe(3);
    expect(counter3()).toBe(6);
    expect(counter3()).toBe(9);
    expect(counter2()).toBe(-2);
    expect(counter2()).toBe(-4);
    expect(counter3()).toBe(12);
  });
});

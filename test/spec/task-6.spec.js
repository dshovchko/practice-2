import task from '../../src/task-6.js';

const findPath = task;

describe('Task 6: Pathfinder', () => {
  it('should return null for empty object',
    () => expect(findPath({})).toBe(null));

  it('should return null for object without target',
    () => expect(findPath({
      field1: 'test',
      field15: '15',
      nil: 'nil',
      arr: [64, 48, 19, 'pssst']
    })).toBe(null));

  it('Should find target in first level of object props',
    () => expect(findPath({
      field1: 'g',
      x: 19,
      6: 15,
      nil: 'nil'
    })).toBe('6'));

  it('Should find target in a complex object with array',
    () => expect(findPath({
      field1: 'hello, world',
      name: 'Johnny',
      t: 99,
      'almost-there': '15',
      subobj: {
        name: 13,
        arr: [
          { g: -4, k: 1 },
          { test: NaN, x: 15 }
        ]
      },
      test: 'g'
    })).toBe('subobj.arr.1.x'));
});

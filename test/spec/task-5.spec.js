
import commands from './roverMoves.js';
import task from '../../src/task-5.js';

const boundingRover = task;

describe('Task 5: Bounding Curious Opportunities', () => {

  it('Don\'t move and hands up!',
    () => expect(
      boundingRover([])).toEqual(
      { top: 0, right: 0, bottom: 0, left: 0 }
    ));

  it('Zero cases',
    () => expect(
      boundingRover([commands.zero, commands.bullshit])).toEqual(
      { top: 0, right: 0, bottom: 0, left: 0 }
    ));

  it('Boring case with zero cases',
    () => expect(
      boundingRover([commands.zero, commands.bullshit, commands.boring1])).toEqual(
      { top: 5, right: 0, bottom: 0, left: -1 }
    ));

  it('Several boring cases #1',
    () => expect(
      boundingRover([commands.boring1, commands.boring2])).toEqual(
      { top: 5, right: 17, bottom: -39, left: -1 }
    ));

  it('Several boring cases #2',
    () => expect(
      boundingRover([commands.boring3, commands.boring2, commands.boring1])).toEqual(
      { top: 20, right: 50, bottom: -39, left: -1 }
    ));

});

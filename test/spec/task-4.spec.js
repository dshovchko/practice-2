
import commands from './roverMoves.js';
import task from '../../src/task-4.js';

const runRover = task;

describe('Task 4: Curious Opportunities', () => {

  it('Don\'t move and hands up!',
    () => expect(runRover(commands.zero)).toEqual({ x: 0, y: 0 }));

  it('Bullshit commands',
    () => expect(runRover(commands.bullshit)).toEqual({ x: 0, y: 0 }));

  it('Boring case #1',
    () => expect(runRover(commands.boring1)).toEqual({ x: -1, y: 5 }));

  it('Boring case #2',
    () => expect(runRover(commands.boring2)).toEqual({ x: 17, y: -39 }));

  it('Boring case #3',
    () => expect(runRover(commands.boring3)).toEqual({ x: 50, y: 20 }));

});

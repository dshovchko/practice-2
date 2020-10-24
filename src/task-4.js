
export default function runRover(commandsList) {

    const position = {
        x: 0,
        y: 0
    };

    let direction = 0;

    const moving = [
        distance => { position.y += distance; },
        distance => { position.x += distance; },
        distance => { position.y -= distance; },
        distance => { position.x -= distance; }
    ];

    function turning(strDirection) {
        switch (strDirection) {
            case 'left':
                direction = (direction === 0) ? 3 : (direction - 1);
                break;
            case 'right':
                direction = (direction === 3) ? 0 : (direction + 1);
                break;
            default:
                break;
        }
    }

    commandsList.sort((a, b) => (a.order - b.order));
    commandsList.every(e => {

        const command = e.command.split(' ');
        switch (command[0]) {
            case 'go':
                moving[direction](Number(command[1]));
                break;

            case 'turn':
                turning(command[1]);
                break;

            default:
                break;
        }

        return true;
    });

    return position;
}

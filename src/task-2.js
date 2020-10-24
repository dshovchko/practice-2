
export default function createCounter(n) {

    let counter;
    const diff = n;

    return function() {

        counter = (counter === undefined) ? 0 : counter + diff;

        return counter;
    };
}

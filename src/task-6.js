
export default function findPath(obj) {
    let path = null;

    function check(el, stack) {
        if (typeof el === 'object') {

            for (const key in el) {
                if (check(el[key], `${stack}.${key}`) === true) {
                    break;
                }
            }
        } else if (el.constructor === Array) {

            obj.some((e, i) => check(e[i], `${stack}.${i}`));
        } else if (el === 15) {
            path = stack;

            return true;
        }

        return false;
    }

    for (const key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            check(obj[key], key);
        }
    }

    return path;
}

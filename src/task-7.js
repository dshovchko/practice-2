
export default function getPolynomial(...coefficients) {

    let j = coefficients.length;

    const poly = coefficients.map(e => {
        j--;
        if (e === 0) {
            return null;
        }
        return {
            sign: (e > 0) ? '+' : '',
            coef: (Math.abs(e) === 1 && j > 0) ? '' : `${e}`,
            x: (j === 0) ? '' : `x${(j > 1) ? `^${j}` : ''}`
        };
    }).filter(Boolean).reduce((p, c) => {
        const term = `${(p.length) ? c.sign : ''}${c.coef}${(c.coef.length && c.x.length) ? '*' : ''}${c.x}`;
        return `${p}${term}`;
    }, '');

    return (poly.length > 0) ? poly : '0';
}


export default function boundingRect(coordsList) {
    const rect = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    const xs = coordsList.map(v => (v.x));
    if (xs.length > 0) {
        rect.right = xs.reduce((p, c) => ((p > c) ? p : c));
        rect.left = xs.reduce((p, c) => ((p < c) ? p : c));
    }

    const ys = coordsList.map(v => (v.y));
    if (ys.length > 0) {
        rect.bottom = ys.reduce((p, c) => ((p < c) ? p : c));
        rect.top = ys.reduce((p, c) => ((p > c) ? p : c));
    }

    return rect;
}

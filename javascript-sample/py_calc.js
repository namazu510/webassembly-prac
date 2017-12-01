/**
 * 適当にライプニッツの公式でtimes回までの円周率を計算する関数.
 * @param {number} times
 * @returns {number}
 */
export function calcPy(times) {
    // ∑ (-1)^n / (2n+1) = π/4
    let res = 0.0;
    let even = true;
    for (let i = 0; i < times; i++) {
        if (even) {
            res += 1 / (2 * i + 1);
            even = false;
        } else {
            res += -1 / (2 * i + 1);
            even = true;
        }
    }
    return res * 4;
}

export function calcPy(times: i32) : f64 {
    // ∑ (-1)^n / (2n+1) = π/4
    let res: f64 = 0.0;
    let even: bool = true
    for (let i: i32 = 0; i < times; i++) {
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
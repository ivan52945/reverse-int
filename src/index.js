module.exports = function reverse(n) {
    n_abs = (n < 0) ? -n : n;
    let reverse_number = 0;
    let string_number = n_abs + '';
    for (let i = 0; i < string_number.length; i++) {
        reverse_number += +(string_number[i]) * (10 ** i);
    }
    return reverse_number;
}



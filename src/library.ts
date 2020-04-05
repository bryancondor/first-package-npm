function sumar(numbers) {
    let result;

    if (numbers instanceof Array) {
        result = numbers.reduce((p, c) => p + c);
    }
    return result || numbers;
}
export { sumar };
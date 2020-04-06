function sumar(numbers: number[]) {
    return numbers?.map(n => +n)?.reduce((p, c) => p + c) || 0;
}

function restar(num1: number, num2: number) {
    return num1 - num2;
}

export { sumar, restar };
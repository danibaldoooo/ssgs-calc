const {sum, subtract, multiply, divide, power }= require('./math');


test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('adds 2 + 0 to equal 2', () => {
    expect(sum(2, 0)).toBe(2);
});

test('subtracts 2 - 2 to equal 0', () => {
    expect(subtract(2, 2)).toBe(0);
});

test('subtracts 2 - 0 to equal 2', () => {
    expect(subtract(2, 0)).toBe(2);
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, -2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});

test('multiply 2 * 0 to equal 0', () => {
    expect(multiply(2, 0)).toBe(0);
});

test('multiply 2 * -2 to equal -4', () => {
    expect(multiply(2, -2)).toBe(-4);
});

test('divide 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
});

test('divide 2 / 0 to throw error', () => {
    expect(() => {
        divide(2, 0);
    }).toThrow("Cannot divide by zero");
});

test('divide 2 / -2 to equal -1', () => {
    expect(divide(2, -2)).toBe(-1);
});

test('power 2 ^ 2 to equal 4', () => {
    expect(power(2, 2)).toBe(4);
});

test('power 2 ^ 0 to equal 1', () => {
    expect(power(2, 0)).toBe(1);
});





const {sum, subtract, multiply, divide, power }= require('./calculator');

test('adds 2 + 2 to equal to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

const a = 2+3;
test.skip('a to equal 6', () => {
    expect(a).toBe(6);
});


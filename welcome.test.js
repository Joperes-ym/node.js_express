const welcome = require('./welcome')

test('test name of cuthbert', () => {
    let input = 'cuthbert'
    let output = 'Welcome cuthbert'
    expect(welcome(input)).toBe(output);
})
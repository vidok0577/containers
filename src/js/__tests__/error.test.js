import { ErrorRepository } from '../error';

const errorCodes = [
    [1, 'error1'],
    [2, 'error2'],
    [33, 'Unknown error'],
    [4, 'error4'],
    [5, 'error5'],
];

test.each(errorCodes)('тестируем ошибки', (err, expected) => {
    const result = new ErrorRepository();
    expect(result.translate(err)).toBe(expected);
});
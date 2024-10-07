export class ErrorRepository {
    codes = new Map([
        [1, 'error1'],
        [2, 'error2'],
        [3, 'error3'],
        [4, 'error4'],
        [5, 'error5'],
    ]);
    translate(code) {
        const errorCode = this.codes.get(code);
        if (errorCode) return errorCode;
        return 'Unknown error';
}
}